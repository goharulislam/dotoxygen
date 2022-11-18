import React from "react";
import {useNavigate} from 'react-router-dom';
import SliderHome from '../components/SliderHome';
import SecBlog from '../components/SecBlog';
import Faq from '../components/Faq';
import Project from '../components/Project';
import Upnext from '../components/Upnext';
import Home2 from '../components/Home2';
import man1 from '../images/man1.jpg';
import woman1 from '../images/woman1.jpg';

function Home(){
const navigate = useNavigate();
const data = [
  {
    text: 'About Us',
    link: '/about'
  }
];

/*cookie*/
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}
/*end-cookie*/

return(
<div>
<section className="home1">
<div className="container">
<div className="row">
<div className="col-md-10">

<h1 className="mb30">Oxygenate<span className="clearfix"></span>Your Digital<span className="clearfix"></span>Experience</h1>
<p className="large mb60">We assist enterprises, start-ups, and organizations in developing innovative concepts<span className="clearfix"></span> and developing websites, digital products, applications, and branding</p>
<p className="large">DESIGN, DEVELOPMENT & BRANDING AGENCY</p>
<h3>Trusted Design, Development and Branding<span className="clearfix"></span>Agency in The United Kingdom & Pakistan.</h3>
<p className="large">We partnered with some of the world's most well-known brands and cutting-edge startups to improve millions of consumers' digital experiences.</p>

</div>{/*col*/}
<div className="col-md-2">
<ul>
    <li>FOLLOW US</li>
    <li></li>
    <li><a href="https://twitter.com/dotoxygen" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter"></i></a></li>
    <li><a href="https://www.facebook.com/dotoxygen" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook"></i></a></li>
    <li><a href="https://www.linkedin.com/company/dotoxygen/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin"></i></a></li>
</ul>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<Home2 />

<section className="home3" style={{display:'none'}}>
<div className="container">
<div className="row">
<div className="col-md-12">
<h6>OUR WORK we <i className="fa fa-heart-o"></i></h6>
</div>{/*col*/}
<div className="col-md-4">
    <img src={woman1} alt='woman' />
</div>{/*col*/}
<div className="col-md-4">
<p>GOHAYCH</p>
<h4>Building beautiful<span className='clearfix'></span>technology for<span className='clearfix'></span>innovators</h4>
<p>Branding, Website Design, User Interface, User Experience</p>
<button className="btn1" onClick={() => navigate('Gohaych')}>Case Study</button>
</div>{/*col*/}
<div className="col-md-4">
    <img src={man1} alt='man' />
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<SliderHome />
<SecBlog />
<Faq />
<Project />
<Upnext data={data} />

</div>
);}
export default Home;