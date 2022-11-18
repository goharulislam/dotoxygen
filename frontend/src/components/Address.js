import React from "react";
import building from '../images/building.jpg';

function Address(){
return(
<section className="contact2">
<div className="container">
<div className="row">
<div className="col-md-6">

  <h6>United Kingdom</h6>
  <p>4 Bell Parade Bell Road, Hounslow,<span className="clearfix"></span>Middlesex, TW3 3NU, UK</p>
  <h6 style={{marginTop:'45px'}}>Pakistan</h6>
  <p>D-6, Railway Society, Isphani Road,<span className="clearfix"></span>Gulshan-e-Iqbal, Karachi</p>
        
</div>{/*col*/}
<div className="col-md-6">
      <div className="frame"><img src={building} alt='building' className="float-end" /></div>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>
);
}
export default Address;