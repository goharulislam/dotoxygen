import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';

function Footer1(){
const [show, setShow] = useState('block');
const navigate = useNavigate();

useEffect(()=>{
    if(window.location.href.indexOf("/landingpage") > -1) {
        setShow('none');
    } else {
        setShow('block');
    }
})

function f1(){
let fadeTarget = document.getElementById("c1");
let fadeEffect = setInterval(function(){
    if (!fadeTarget.style.opacity){
        fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity > 0) {
        fadeTarget.style.opacity -= 0.3;
    } else {
        clearInterval(fadeEffect);
        fadeTarget.style.display = 'none';
    }
}, 200);
}

return(
<footer style={{display:show}}>
<div className="container">
<div className="row">
<div className="col-md-6 careers">

    <ul>
        <li><span onClick={() => navigate('/blog')}>Blog</span></li>
        <li><span onClick={() => navigate('/careers')}>Careers</span></li>
        <li><span onClick={() => navigate('/sitemap')}>Site Map</span></li>
        <li><span onClick={() => navigate('/privacy')}>Privacy Policy</span></li>
    </ul>
    {/*<p>DotOxygen is an award-winning, UI/UX designs and branding agency based in Irvine, Orange County and San Francisco.</p>*/}
    <p className="mb30">4 Bell Parade Bell Road, Hounslow,<span className="clearfix"></span>Middlesex, TW3 3NU, UK</p>
    <p>&copy; {new Date().getFullYear()} DotOxygen - All rights reserved.</p>

</div>{/*col*/}
<div className="col-md-6">

    <div className="follow">
        <ul>
            <li>FOLLOW US</li>
            <li></li>
            <li><a href="https://twitter.com/dotoxygen" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter"></i></a></li>
            <li><a href="https://www.facebook.com/dotoxygen" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook"></i></a></li>
            <li><a href="https://www.linkedin.com/company/dotoxygen/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin"></i></a></li>
        </ul>
        <a href="mailto:hey@dotoxygen.com" rel="noopener noreferrer" target="_blank">hey@dotoxygen.com</a>
    </div>

</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}

{/*cookie popup*/}
<div className="cookie1" id="c1">
    <p>By browsing this site you consent with our <span onClick={() => navigate('/cookies')}> cookie policy.</span><button onClick={() => f1()}>ACCEPT</button></p>
</div>
{/*END-cookie popup*/}

</footer>
);}
export default Footer1;