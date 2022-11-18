import React from "react";
import {useNavigate} from 'react-router-dom';
import Upnext from '../components/Upnext.js';
import about1 from '../images/about1.jpg';
import Home2 from "../components/Home2.js";

function Careers(){
const navigate = useNavigate();
const data = [
  {
    text: 'Our Work',
    link: '/work'
  }
]
return(
<div>
<section className="careers1">
<div className="container">
<div className="row">
<div className="col-md-12">
  <h3 className="mb70">Hiring</h3>
  <div className="frame"><img src={about1} alt="meeting" className="img-fluid" /></div>

  <h4>FULL STACK</h4>
  <p>DotOxygen currently looking for a full-stack developer to boost our growth and clients to reach their satisfactory marks. As a full-stack developer, you will have the opportunity to make each task better and show the set of your logic and creativity for the frontend with the backend.</p>
  <h6>Requirements</h6>
  <ul>
    <li>University graduate</li>
    <li>Fluency in English</li>
    <li>Solid command on Java, react.js, flutter</li>
    <li>Full-time availability</li>
    <li>Knowledge of architecture or design patterns </li>
  </ul>
  <h6>Perks of working with DotOxygen</h6>
  <ul>
    <li>Fuel</li>
    <li>Medical help</li>
    <li>We believe in working in flexible timings</li>
    <li>Healthy and friendly environment</li>
  </ul>
  <h4>UI developer</h4>
  <p>DotOxygen believes in working with flexibility, speed, and efficiency. We are searching for a UI developer to give wings to our growth, and efficiency and is up to clients mark, with minimum qualification of graduation.</p>
  <h6>Requirements</h6>
  <ul>
  <li>Fluency in English</li>
  <li>Solid command on Adobe XD</li>
  <li>Should know about react.js, flutter</li>
</ul>
<h6>Perks of working with DotOxygen</h6>
  <ul>
    <li>Fuel</li>
    <li>Medical help</li>
    <li>We believe in working in flexible timings</li>
    <li>Healthy and friendly environment</li>
  </ul>

<h4>UX designer</h4>
<p>Dotoxygen is looking for a UX designer to join our team which works towards making an impact in the world of technology by applying their best practices. We are looking for technology experts who strive toward progress, and make teamwork fun.</p>
<h6>Key requirements</h6>
<ul>
<li>Fluency in English</li>
<li>Solid command on Adobe XD, Figma</li>
<li>Should know how to work on React.js, Flutter</li>
</ul>
<h6>Perks of working with DotOxygen</h6>
  <ul>
    <li>Fuel</li>
    <li>Medical help</li>
    <li>We believe in working in flexible timings</li>
    <li>Healthy and friendly environment</li>
  </ul>

  <h4>ART DIRECTOR</h4>
<p>We are DotOxygen searching for a candidate who is equitable for the post of Art Director. You will join a highly motivated, extremely passionate, and enthusiastic team on a full-time basis to get modern solutions for our clients.</p>
<p>You can apply with a min qualification: university graduate.</p>
<h6>Key requirements</h6>
<ul>
  <li>Fluency in English</li>
  <li>Solid command on Adobe family and Figma</li>
</ul>
<h6>Perks of working with DotOxygen</h6>
  <ul>
    <li>Fuel</li>
    <li>Medical help</li>
    <li>We believe in working in flexible timings</li>
    <li>Healthy and friendly environment</li>
  </ul>

</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section className="home4" style={{display:'none'}}>
<div className="container">
<div className="row">
<div className="col-md-4 no_pad">
    <div className="post">
        <h4>GoHaych</h4>
        <p>We helped the world’s largest company create ResearchKit, and worked with healthcare institutions to build the first five apps on the platform.</p>
        <button className="btn1" onClick={() => navigate('form1')}>Read More</button>
    </div>
</div>{/*col*/}
<div className="col-md-4 no_pad">
    <div className="post">
        <h4>Black H2O</h4>
        <p>We helped the world’s largest company create ResearchKit, and worked with healthcare institutions to build the first five apps on the platform.</p>
        <button className="btn1" onClick={() => navigate('form1')}>Read More</button>
    </div>
</div>{/*col*/}
<div className="col-md-4 no_pad">
    <div className="post">
        <h4>Mehman.pk</h4>
        <p>We helped the world’s largest company create ResearchKit, and worked with healthcare institutions to build the first five apps on the platform.</p>
        <button className="btn1" onClick={() => navigate('form1')}>Read More</button>
    </div>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section className="about1">
<div className="container">
<div className="row">
<div className="col-md-12">
  <h6 className="mb15">BY THE NUMBER</h6>
  <h3 className="mb30">We employ over 49 professionals, having been founded in 2021.<span className='clearfix'></span>Our staff is composed of around 60% engineers, which is composed of 46% of females.</h3>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<Home2 />
<Upnext data={data} />

</div>
);}
export default Careers;