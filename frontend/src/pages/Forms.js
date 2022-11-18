import React from "react";
import {useNavigate} from 'react-router-dom';

function Forms(){
const navigate = useNavigate();

return(
<div>
<section className="forms1">
<div className="container">
<div className="row">
<div className="col-md-12">
<button className="btn1" onClick={() => navigate('form1')}>Registration Form</button>




</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>
</div>
);}
export default Forms;