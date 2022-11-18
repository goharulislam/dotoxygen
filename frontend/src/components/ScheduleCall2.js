import React from "react";
import Form2 from './forms/Form2.js';
import woman2 from '../images/woman2.jpg';
import hand1 from '../images/hand1.jpg';

function ScheduleCall2(){
return(
<div>
<section className="schedule1">
<div className='container'>
<div className='row'>
<div className="col-md-6">
  <div className='b1 frame'><img src={woman2} alt="woman" className="img-fluid" /></div>
  <div className='b2'>
    <h5>Stephanie Liverani from DotOxygen</h5>
    <h3><span className="frame"><img src={hand1} alt="hand" /></span> Get-to-know-each-other call</h3>
  </div>
  <ul>
    <li><i className='fa fa-clock-o'></i> 30 min</li>
    <li><i className='fa fa-video-camera'></i> Web conferencing details provided upon confirmation.</li>
    <li><i className='fa fa-calendar'></i> 4:00pm - 4:30pm, Tuesday, April 5, 2022</li>
    <li><i className='fa fa-globe'></i> Pakistan, Maldives Time (12:08am)</li>
  </ul>
</div>{/*col*/}
<div className="col-md-6">
  <Form2 />
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>
</div>
);
}
export default ScheduleCall2;