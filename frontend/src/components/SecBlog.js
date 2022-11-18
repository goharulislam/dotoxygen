import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from "../axios/index";

function SecBlog(){
const [posts, setPosts] = useState([]);
const formData = new FormData();
const navigate = useNavigate();

useEffect(() => {
    getData();
}, []);

async function getData(){
  try{
    formData.append('function', 'get_six');
    let response = await axios.post('index2.php', formData);
    //console.log('Response:', response.data);
    setPosts(prevPosts => prevPosts = response.data);
    //console.log('Users:', users);
  }catch(err){
    console.log(err);
  }
}

function removeTags(str){
  if ((str===null) || (str===''))
      return false;
  else
      str = str.toString();
        
  // Regular expression to identify HTML tags in 
  // the input string. Replacing the identified 
  // HTML tag with a null string.
  return str.replace( /(<([^>]+)>)/ig, '');
}

function Post_detail(i){
  navigate('/post-detail', {
    state: {
      i,
    }
  });
}

return(
<section className='blog2'>
<div className="container">
<div className="row">
<div className="col-md-12">
  <h6 className='pull-left effect1' onClick={()=>navigate('/blog')}>BLOG</h6>
  <div className='clearfix'></div>
  <h3>Grow Your Digital Knowledge With DotOxygen</h3>
</div>
{
  posts && posts.length > 0 && posts.map((i) => (
    <div className="col-md-6" key={i.id} onClick={()=>Post_detail(i)}>
      <p className='large'>{i.author} <span></span></p>
      <h4>{i.heading}</h4>
      <div className='arrow1'><p className='large effect1'>{removeTags(i.text)}</p><i className='fa fa-arrow-right'></i></div>
    </div>
  ))
}
</div>
</div>
</section>
);
}
export default SecBlog;