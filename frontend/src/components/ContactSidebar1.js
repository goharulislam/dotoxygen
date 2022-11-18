import React from "react";
import { useNavigate } from "react-router-dom";

function ContactSidebar1(){
const navigate = useNavigate();
return (
  <div>
    <h4>Online Pre-estimation</h4>
    <p>Calculate an approximate cost of your project</p>
    <button className="btn3">START</button>
    <div className="clearfix"></div>

    <ul className="line1">
      <li><hr /></li>
      <li>OR</li>
      <li><hr /></li>
    </ul>

    <h4>Schedule a Call</h4>
    <p>Get-to-know-each-other call</p>
    <button className="btn3" onClick={()=>navigate('/schedulecall1')}>SCHEDULE</button>
  </div>
);
}
export default ContactSidebar1;


