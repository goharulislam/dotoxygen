<?php
include("./backend/connection.php");
$objDb = new Database;
$cn = $objDb->getConnection();
$response = array();
$a = $_REQUEST;
$b = $_FILES;
//echo "count files: ".count($_FILES['f1']['name'])."<br>";

$function = $_REQUEST["function"];
date_default_timezone_set("Asia/Karachi");

//var_dump($users);
//print_r($_POST);
//print_r(file_get_contents('php://input'));
//$input = json_decode(file_get_contents('php://input'));
//var_dump($input);

if($function != ""){
    switch($function){
        case "get_all":
            get_all($cn);
            break;
        case "get_six":
            get_six($cn);
            break;
        case "create_post":
            create_post($cn, $a, $b);
        break;
        case "update_post":
            create_post($cn);
        break;
        case "delete_post":
            create_post($cn);
        break;
        case "search_heading":
            create_post($cn);
        break;
        case "schedule_call":
            schedule_call($cn, $a);
            contact_us($cn, $a);
        break;
        case "login":
            login($cn, $a, $b);
        break;
        case "upload_multiple_files":
            upload_multiple_files($cn, $a, $b);
        break;
        case "contact_us":
            contact_us($cn, $a);
        break;
        default:
        echo "Default";
    }
}

function get_all($cn){
    $sql = "SELECT * FROM posts";
    $stmt = $cn->prepare($sql);
    $stmt->execute();
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($users);
}

function get_six($cn){
    $sql = "SELECT * FROM posts ORDER BY id DESC LIMIT 6";
    $stmt = $cn->prepare($sql);
    $stmt->execute();
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($users);
}

function create_post($cn, $a, $b){

if($b['file1']){

    $upload_dir = "dotoxygen_images/";
    $server_url = "http://dotoxygen.com/";
    $file1_name = $b["file1"]["name"];
    $file1_tmp_name = $b["file1"]["tmp_name"];
    $error = $b{"file1"}["error"];

    if($error > 0){
        $response = array(
            "status" => "error",
            "status" => true,
            "message" => "Error uploading the file.",
        );
    } else {
        $random_name = rand(1000,1000000)."-".$file1_name;
        $upload_name = $upload_dir.strtolower($random_name);
        $upload_name = preg_replace('/\s+/', '-', $upload_name);

        if(move_uploaded_file($file1_tmp_name, $upload_name)){
            $response = array(
                "status" => "success",
                "status" => false,
                "message" => "File uploaded successfully.",
                "url" => $server_url."/".$upload_name,
            );        
        } else {
            $response = array(
                "status" => "error",
                "status" => true,
                "message" => "Error uploading the file.",
            );
        }
    }
} else {
    $response = array(
        "status" => "error",
        "status" => true,
        "message" => "No file was sent.",
    );
}

echo json_encode($response);

$_REQUEST["image1"] = $file1_name;

    $sql = "INSERT INTO posts(post_id, author, date, heading, text, image1, tags, updated, created) VALUES (:post_id, :author, :date, :heading, :text, :image1, :tags, :updated, :created)";
    $stmt = $cn->prepare($sql);
    $stmt->bindParam(':post_id', $a["post_id"]);
    $stmt->bindParam(':author', $a["author"]);
    $stmt->bindParam(':date', $a["date"]);
    $stmt->bindParam(':heading', $a["heading"]);
    $stmt->bindParam(':text', $a["text"]);
    $stmt->bindParam(':image1', $random_name);
    $stmt->bindParam(':tags', $a["tags"]);
    $stmt->bindParam(':updated', $a["updated"]);
    $stmt->bindParam(':created', $a["created"]);
    if($stmt->execute()){
        $response = ['status' => 1, 'message' => 'Record created successfully.'];
    } else {
        $response = ['status' => 0, 'message' => 'Failed to create record.'];
    }
    echo json_encode($response);
}

function single_file_upload($cn, $a, $b){
/*https://stackoverflow.com/questions/30965631/php-upload-multiple-files-with-different-input-field-names*/
$uploadLocation = 'dotoxygen_images/';
$uploadMainTo = null;
if(isset($b['file1'])){
  $main_image_name = $_FILES['file1']['name'];
  $main_image_size = $_FILES['file1']['size'];
  $main_image_tmp = $_FILES['file1']['tmp_name'];
  $uploadMainTo = $uploadLocation.$main_image_name;
  $moveMain = move_uploaded_file($main_image_tmp,$uploadMainTo);
  echo $moveMain;
}

$uploadSecondTo = null;
if(isset($b['file2'])){
  $second_image_name = $_FILES['file2']['name'];
  $second_image_size = $_FILES['file2']['size'];
  $second_image_tmp = $_FILES['file2']['tmp_name'];
  $uploadSecondTo = $uploadLocation.$second_image_name;
  $moveSecond = move_uploaded_file($second_image_tmp,$uploadSecondTo);
  echo $moveSecond;
}

/*$query = $db->execute("INSERT INTO users (pdf, main_image, second_image) VALUES (?,?,?) WHERE ID = ?", array($uploadPdfTo, $uploadMainTo, $uploadSecondTo, $user_id) );*/
}

function login($cn, $a){
    $sql = "SELECT * FROM users WHERE user_id=?";
    $stmt = $cn->prepare($sql);
    $stmt->execute([$a['user_id']]);
    $user = $stmt->fetch();
    if($user && ($a['password'] === $user['password'])){
        echo "valid";
    } else {
        return $error = "Login and password don't match";
    }
}

function upload_multiple_files($cn, $a, $b){
echo "REQUEST";
print_r($a);
echo "FILES";
print_r($b);

//$d = array_filter($b['file1']['tmp_name']);
$d = count($b['f1']['name']);
echo "count files: ".$d;

for($i=0; $i <$d; $i++){
    echo "name: ".$b['f1']['name'][$i]." | ";
}

//$files = array_filter($_FILES['upload']['name']); //something like that to be used before processing files.

// Count # of uploaded files in array
$total = count($b['f1']['name']);

// Loop through each file
for( $i=0 ; $i < $total ; $i++ ) {

  //Get the temp file path
  $tmpFilePath = $b['f1']['tmp_name'][$i];

  //Make sure we have a file path
  if ($tmpFilePath != ""){
    //Setup our new file path
    $newFilePath = "./dotoxygen_images/" . $b['f1']['name'][$i];

    //Upload the file into the temp dir
    if(move_uploaded_file($tmpFilePath, $newFilePath)) {
        echo "\r\n".$i." file(s) uploaded successfuly";
    }
  }
}

}

function strip_crlf($string)
{
    return str_replace("\r\n", "", $string);
}

function contact_us($cn, $a){
$name = $a["userName"];
$email = $a["userEmail"];
$subject = $a["subject"];
$content = $a["content"];
$to_email = $a["to_email"];
// CRLF Injection attack protection
$name = strip_crlf($name);
$email = strip_crlf($email);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
        echo "The email address is invalid.";
    } else {
        // appending \r\n at the end of mailheaders for end
        $mailHeaders = "From: " . $name . "<" . $email . ">\r\n";
        if(mail($toEmail, $subject, $content, $mailHeaders)){
            $message = "Your contact information is received successfully.";
            $type = "success";
        }
    }
/*===*/
$to = 'user@example.com';
$from = 'sender@example.com';
$fromName = 'SenderName';
$subject = "Send HTML Email in PHP by CodexWorld";
$htmlContent = '
    <html> 
    <head> 
        <title>Welcome to CodexWorld</title> 
    </head> 
    <body> 
        <h1>Thanks you for joining with us!</h1> 
        <table cellspacing="0" style="border: 2px dashed #FB4314; width: 100%;"> 
            <tr> 
                <th>Name:</th><td>CodexWorld</td> 
            </tr> 
            <tr style="background-color: #e0e0e0;"> 
                <th>Email:</th><td>contact@codexworld.com</td> 
            </tr> 
            <tr> 
                <th>Website:</th><td><a href="http://www.codexworld.com">www.codexworld.com</a></td> 
            </tr> 
        </table> 
    </body> 
    </html>'; 
 
// Set content-type header for sending HTML email 
$headers = "MIME-Version: 1.0" . "\r\n"; 
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 
 
// Additional headers 
$headers .= 'From: '.$fromName.'<'.$from.'>' . "\r\n"; 
$headers .= 'Cc: welcome@example.com' . "\r\n"; 
$headers .= 'Bcc: welcome2@example.com' . "\r\n"; 
 
// Send email 
if(mail($to, $subject, $htmlContent, $headers)){ 
    echo 'Email has sent successfully.'; 
}else{ 
   echo 'Email sending failed.'; 
}
}

function schedule_call($cn, $a){

$sql = "INSERT INTO schedule_call(full_name, email, guest_emails, company, phone, call_date) VALUES (:full_name, :email, :guest_emails, :company, :phone, :call_date)";
$stmt = $cn->prepare($sql);
$stmt->bindParam(':full_name', $a["full_name"]);
$stmt->bindParam(':email', $a["email"]);
$stmt->bindParam(':guest_emails', $a["guest_emails"]);
$stmt->bindParam(':company', $a["company"]);
$stmt->bindParam(':phone', $a["phone"]);
$stmt->bindParam(':call_date', $a["call_date"]);
if($stmt->execute()){
    $response = ['status' => 1, 'message' => 'Record created successfully.'];
} else {
    $response = ['status' => 0, 'message' => 'Failed to create record.'];
}
echo json_encode($response);
}
?>