import React from "react";
import {useNavigate} from 'react-router-dom';
import Project from '../components/Project';
import Upnext from '../components/Upnext.js';
import girl1 from '../images/girl1.jpg';
import mobile1 from '../images/mobile1.jpg';
import girl2 from '../images/girl2.jpg';
import matcha from '../images/workmatcha.png';
import ambsan11 from '../images/ambsan11.jpg';

function Work(){
const navigate = useNavigate();
const data = [
  {
    text: 'Capabilities',
    link: '/capabilities'
  }
]
return(
<div>
<section className="work1">
<div className="container">
<div className="row">
<div className="col-md-12">
  <p className='large'>OUR WORK WE <i className="fa fa-heart-o"></i></p>
  <h3>Amazing products generated<div className="clearfix"></div>by transparent collaborations</h3>
  </div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section className="work1" style={{padding:'0'}}>
<div className="container-fluid">
<div className="row">
<div className="col-md-6 no_pad">
  <div className="frame"><img src={ambsan11} alt='ambsan' /></div>
</div>{/*col*/}
<div className="col-md-6">
  <div className="b1">
    <p>AMBSANTECH</p>
    <h4>Empowering businesses<div className="clearfix"></div>globally with innovative solutions for a better tomorrow!</h4>
    <p>Brand Guidelines, Website Design, Website Development, WordPress</p>
    <button className="btn1" onClick={()=> navigate('/ambsan')}>Case Study</button>
  </div>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section className="work1" style={{padding:'0'}}>
<div className="container-fluid">
<div className="row">
<div className="col-md-6 no_pad order-md-2">
  <div className="frame"><img src={mobile1} alt='mobile' /></div>
</div>{/*col*/}
<div className="col-md-6 order-md-1">
  <div className="b1">
    <p>FITNESS APP</p>
    <h4>Encouraging everyone to be fit</h4>
    <p>App Design, App Development, User Interface, User Experience, Cross-platform & hybrid app</p>
    <button className="btn1" onClick={()=> navigate('/fitnessapp')}>Case Study</button>
  </div>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section className="work1" style={{padding:'0'}}>
<div className="container-fluid">
<div className="row">
<div className="col-md-6 no_pad">
  <div className="frame"><img src={girl2} alt='girl' /></div>
</div>{/*col*/}
<div className="col-md-6">
  <div className="b1">
    <p>BLACK H20</p>
    <h4>Mother earth's superfood</h4>
    <p>Branding, Website Design, User Interface, User Experience</p>
    <button className="btn1" onClick={()=> navigate('/blackh2o')}>Case Study</button>
  </div>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section className="work1" style={{padding:'0'}}>
<div className="container-fluid">
<div className="row">
<div className="col-md-6 no_pad order-md-2">
  <div className="frame"><img src={matcha} alt='tea field' /></div>
</div>{/*col*/}
<div className="col-md-6 order-md-1">
  <div className="b1">
    <p>PREMIUM ORGANIC MATCHA</p>
    <h4>The tea's spirit is one that combines serenity, warmth, and elegance.</h4>
    <p>Website Design, Website Development, User Interface</p>
    <button className="btn1" onClick={()=> navigate('/matcha')}>Case Study</button>
  </div>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section className="work1" style={{padding:'0'}}>
<div className="container-fluid">
<div className="row">
<div className="col-md-6 no_pad">
  <div className="frame"><img src={girl1} alt='girl' /></div>
</div>{/*col*/}
<div className="col-md-6">
  <div className="b1">
    <p>GOHAYCH</p>
    <h4>Building beautiful technology for innovators</h4>
    <p>Website Design, Website Development, User Interface, User Experience</p>
    <button className="btn1" onClick={()=> navigate('/gohaych')}>Case Study</button>
  </div>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<Project />
<Upnext data={data} />

</div>
);}
export default Work;