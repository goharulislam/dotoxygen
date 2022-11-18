import React from "react";
import {useNavigate, useLocation} from 'react-router-dom';
import woman2 from '../images/woman2.jpg';
import hand1 from '../images/hand1.jpg';

function ScheduleCall3(){
const navigate = useNavigate();
const params = useLocation();

function get_location(){
  //vsnysiojd82rnslv
	fetch('https://api.ipregistry.co/?key=vsnysiojd82rnslv')
    /*.then(function (response) {
        return response.json();
    })*/
    .then(function (payload) {
        console.log(payload.location.country.name + ', ' + payload.location.city);
        return(payload.location.country.name + ', ' + payload.location.city);
    });
}

return(
<div style={{paddingBottom:'170px'}}>
<section className="schedule1">
<div className="container">
<div className="row">
<div className="col-md-12 text-center">
  <div className="pull-right"><i className='fa fa-times' onClick={()=>navigate('/')}></i></div>
  <div className='frame'><img src={woman2} alt="woman" className="img-fluid" /></div>
  <h5>Stephanie Liverani from DotOxygen</h5>
  <h3><span className="frame"><img src={hand1} alt="hand" /></span> Get-to-know-each-other call</h3>
</div>{/*col*/}
<div className="col-md-6">
  <p><i className='fa fa-clock-o'></i> 30 min</p>
  <p><i className='fa fa-video-camera'></i> Web conferencing details provided upon confirmation.</p>
</div>{/*col*/}
<div className="col-md-6">
  <p><i className='fa fa-calendar'></i> {params.state.i}</p>
  <p>{/*<i className='fa fa-globe'></i> {get_location()} (12:08am)*/}</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>
</div>
);
}
export default ScheduleCall3;