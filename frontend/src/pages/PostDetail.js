import React from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import SecBlog from '../components/SecBlog';

function PostDetail(){
const params = useLocation();
const navigate = useNavigate();

function text1(){
  let result2 = params.state.i.text;
  //result2 = result2.replace(/\r\n\r\n/g, '</p><p>').replace(/\n\n/g, '</p><p>');
  //result2 = result2.replace(/\r\n/g, '<br />').replace(/\n/g, '<br />');
  return <div className='text1' dangerouslySetInnerHTML={{ __html: result2 }}></div>;
}

return(
<div>
<section className='post1'>
<div className='container'>
<div className='row'>
<div className='col-md-12'>

<button className='btn7 effect1' onClick={() => navigate(-1)}>Back</button>
<p>{params.state.i.date}</p>
<h3>{params.state.i.heading}</h3>
<div className='frame'><img src={`./dotoxygen_images/`+params.state.i.image1} alt='living thing' className='img-fluid' /></div>
{text1()}

</div>{/*con*/}
</div>{/*row*/}
</div>{/*con*/}
</section>
<SecBlog />
{window.scrollTo(0, 0)}
</div>
);
}
export default PostDetail;