import React, { useEffect, useState } from 'react';
import Logo from '../images/logo.png';
import { NavLink } from "react-router-dom";

const Navbar = props => {
const [isNavCollapsed, setIsNavCollapsed] = useState(true);
const [var1, setVar1] = useState();

const handleNavCollapse = () => {
  //console.log('win width', window.innerWidth);
  if(window.innerWidth < 991){
    setIsNavCollapsed(!isNavCollapsed);
  }
}

useEffect(() => {
  window.location.href.indexOf("blog") < -1 ? setVar1(false) : setVar1(true);
},[]);

/* navbar*/
let b = document.getElementById('navbarsExample09');
document.addEventListener("click", () => {
  if(!b.classList.contains("collapse")) {
    b.classList.add("collapse");
  }
  
}, true);
/*END-navbar*/

return(
<nav className="navbar navbar-expand-lg nav1 fixed-top">
<div className="container">

<div className="col-6">
  <NavLink to="/"><img src={Logo} className="logo" alt="logo" /></NavLink>
</div>
<div className="col-6" style={{display: var1 ? 'block' : 'none'}}>
  <button className="custom-toggler navbar-toggler float-end" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}><span className="navbar-toggler-icon"></span></button>
  <div className='clearfix'></div>
  <div className={`nav2 ${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
    <NavLink to="/about" onClick={handleNavCollapse}>About Us</NavLink>
    <NavLink to="/work" onClick={handleNavCollapse}>Work</NavLink>
    <NavLink to="/capabilities" onClick={handleNavCollapse}>Capabilities</NavLink>
    <NavLink to="/contact" onClick={handleNavCollapse}>Contact</NavLink>
  </div>
</div>

{/*<div className="col-md-9 col-xs-9" style={{display: var1 ? 'none' : 'block'}}>
  <NavLink to="/"><i className="float-end fa fa-times"></i></NavLink>
</div>*/}

</div>{/*con*/}
</nav>
);
}
export default Navbar;