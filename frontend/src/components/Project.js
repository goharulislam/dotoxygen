import React from 'react';
import {useNavigate} from 'react-router-dom';
function Project(){
const navigate = useNavigate();
return(
<section className="project">
<div className="container">
<div className="row">
<div className="col-md-6">

  <h2>Planning a project?</h2>
  <h6>Bring it on!</h6>

</div>{/*col*/}
<div className="col-md-6">

<div className="b1">
    <button className="btn2" onClick={() => navigate('/contact')}>Contact us</button>
    <button className="btn3" onClick={() => navigate('/contact')}>Schedule a Call</button>
</div>

</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>
);
}
export default Project;