import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from '../../axios/index';

function BlogCreate(){
const [inputs, setInputs] = useState({});
const [file, setFile] = useState(null);
const navigate = useNavigate();
const formData = new FormData();

const handleChangeFile = (event) => {
  setFile(event.target.files[0]);
}

function RemoveBr(){
  let a = inputs.text;
  a = a.replace('<br>', '');
  inputs.text = a;
}

const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  setInputs((values) => ({ ...values, [name]: value }));
}

const handleSubmit = async(event) => {
  event.preventDefault();
  RemoveBr();
  formData.append('file1', file);
  formData.append('function', 'create_post');

  for(var name in inputs){
    formData.append(name, inputs[name]);
  }
  
  return await axios.post('index2.php', formData);
}

return(
<div>
<section className='blog1'>
<form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
<div className="container">
<div className="row">
  <h5 className="float-start">Create Post</h5>
  <button onClick={()=>navigate(-1)} className="btn btn-secondary float-end">Create new</button>
  <div className="col-md-4">
    <label>Post ID</label>
    <input type="text" name="post_id" onChange={handleChange} className="form-control" />
  </div>
  <div className="col-md-4">
    <label>Author</label>
    <input type="text" name="author" onChange={handleChange} className="form-control" />
  </div>
  <div className="col-md-4">
    <label>Date</label>
    <input type="text" name="date" onChange={handleChange} className="form-control" placeholder="31.12.2022" />
  </div>
  <div className="col-md-4">
    <label>Heading</label>
    <input type="text" name="heading" onChange={handleChange} className="form-control" />
  </div>
  <div className="col-md-12">
    <label>Text</label>
    <textarea name="text" onChange={handleChange} className="form-control"></textarea>
  </div>
  <div className="col-md-4">
    <label>Tags</label>
    <input type="text" name="tags" onChange={handleChange} className="form-control" />
  </div>
  <div className="col-md-4">
    <label>Updated</label>
    <input type="text" name="updated" onChange={handleChange} className="form-control" placeholder="31.12.2022" />
  </div>
  <div className="col-md-4">
    <label>Created</label>
    <input type="text" name="created" onChange={handleChange} className="form-control" placeholder="31.12.2022" />
  </div>
  <div className="col-md-12">
    <div className="form-group">
      <label>Choose image to upload</label>
      <input type="file" name="file1" className="form-control" onChange={handleChangeFile} placeholder='image name: small letters, without spaces, use underscore' />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</div>{/*row*/}
</div>{/*con*/}
</form>
</section>
</div>
);
}
export default BlogCreate;