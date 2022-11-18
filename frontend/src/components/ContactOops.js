import React from "react";
import ContactSidebar2 from '../components/ContactSidebar2';
import Address from '../components/Address';

function ContactOops(){
return(
<div>
<section className="contact1">
<div className="container">
<div className="row">
<div className="col-md-8">

    <h1>Oops! something went wrong,<div className='clearfix'></div>please try again.</h1>

  </div>{/*col*/}
  <div className="col-md-3 offset-md-1">
    
    <ContactSidebar2 />

  </div>{/*col*/}
  </div>{/*row*/}
  </div>{/*con*/}
  </section>

  <Address />

  </div>
);
}

export default ContactOops;