/*React component to upload multiple file. Sending form values using formData because we are using PHP API in the backend.*/
import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import axios from '../../axios/index';
import * as Yup from "yup";

function Admin2(){
const [isLogin, setIsLogin] = useState(false);

const initialValues={
  file1: '',
}

function handleSubmit(values){
    console.log('values: ', values);
    Check(values);
}

async function Check(values){
  let formData = new FormData();
  formData.append('function', 'upload_multiple_files');

  for(let i=0; i < values.file1.length; i++){
    formData.append("f1[]", values.file1[i]);
  }
  console.log('formData: ', formData);

  try{
    let response = await axios.post('index2.php', formData);
    console.log('Response:', response.data);
    if(response.data === 'valid'){
      setIsLogin(true);
    }
  }catch(err){
    console.log(err);
  }
}

const ValidationSchema = Yup.object({
    //file1: Yup.mixed().nullable().required().test('FILE_SIZE', 'Size is too big', (value)=> !value || (value && value.size <= 1024 * 1024)).test('FILE_FORMAT', 'Unsupported format', (value)=> !value || (value && SUPPORTED_FORMATS.includes(value.type))),
});
  return(
    <Formik initialValues={initialValues} validationSchema={ValidationSchema} onSubmit={handleSubmit} enctype="multipart/form-data">
      {(formik) => {
        return (
          <div>
            <section>
            <Form>
              <p>{isLogin}</p>
              <input id="file1" name="file1" type="file" multiple="multiple"
                onChange={(event) => { let files = event.target.files; let myFiles = Array.from(files); formik.setFieldValue("file1", myFiles); }} />
              <ErrorMessage name="file1"/>
              <button type="submit" disabled={!formik.isValid}>Submit</button>
            </Form>
            </section>
          </div>
        );
      }}
    </Formik>
  );
}

export default Admin2;