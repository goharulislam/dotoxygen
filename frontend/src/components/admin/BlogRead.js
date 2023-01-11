import React, { useState, useEffect } from "react";
import { Link, useNavigate} from 'react-router-dom';
import axios from '../../axios/index';

function BlogRead(){
const [users, setUsers] = useState([]);
const navigate = useNavigate();
const formData = new FormData();

useEffect(()=>{
  getUsers();
}, []);

async function getUsers(){
  try{
    formData.append('function', 'get_all');
    let response = await axios.post('index2.php', formData);
    //console.log('Response:', response.data);
    setUsers(prevUsers => prevUsers = response.data);
    //console.log('Users:', users);
  }catch(err){
    console.log(err);
  }
}

return(
<div>
<section>
<div className="container">
<div className="row">
<div className="col-md-12">
<button onClick={()=>navigate('/blog')} className="btn btn-secondary float-end">Back</button>
<table>
  <thead>
  <tr>
    <th>ID</th>
    <th>HEADING</th>
    <th>OPERATIONS</th>
  </tr>
  </thead>
<tbody>
  {users.map((i)=>
    <tr key={i.id}>
      <td>{i.id}</td>
      <td>{i.heading}</td>
      <td>
        <Link to={`user/${i.id}/edit`}><i className="fa fa-pencil"></i></Link>
        <button className="btn btn-danger"><i className="fa fa-trash"></i></button>
      </td>
    </tr>
  )}
  
</tbody>
</table>

</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>
</div>
);
}
export default BlogRead;