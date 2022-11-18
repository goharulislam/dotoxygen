import React from "react";
import ContactSidebar2 from '../components/ContactSidebar2';
import Address from '../components/Address';

function ContactThanks(){
return (
  <div>
  <section className="contact1">
  <div className="container">
  <div className="row">
  <div className="col-md-8">

    <h1>Thanks.<div className='clearfix'></div>We'll get in touch soon.</h1>

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

export default ContactThanks;