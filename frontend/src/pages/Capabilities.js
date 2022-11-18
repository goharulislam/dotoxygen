import React from "react";
import Upnext from '../components/Upnext.js';
import triangle from '../images/triangle.jpg';
import brackets from '../images/brackets.jpg';
import pen from '../images/pen.jpg';

function Capabilities(){
const data = [
  {
    text: 'Contact',
    link: '/contact'
  }
]
return(
<div>
<section className="capabilities1">
<div className="container">
<div className="row">
<div className="col-md-6 order-md-2">
    <div className="frame"><img src={triangle} alt='triangle' /></div>
</div>{/*col*/}
<div className="col-md-6 order-md-1">
  <div className="b1">
    <h6>OUR CAPABILITIES</h6>
    <h3>DESIGN</h3>
    <p>Design is not just the visual aspect of any product; it speaks for itself. It's a formal medium of communication to the users that explains the complete journey and answers all the strategic questions raised.</p>
    <p>The design of a product determines how the user will engage with it for the first time. We work hard to produce designs that leave a lasting impression. An impression that communicates with them. Creating a first-rate design for clients from the skills of professionals having vast experience.
We are aiming to amuse you and make you speechless while giving the options of either YES or NO.</p>
<div className="row">
    <div className="col-md-6">
      <ul>
          <li>UI/UX Design</li>
          <li>Web and mobile apps Design</li>
          <li>Motion Design</li>
      </ul>
    </div>
    <div className="col-md-6">
      <ul>
          <li>Graphic Design</li>
          <li>Visual content creation</li>
          <li>Advertising design</li>
      </ul>
    </div>
    </div>{/*row*/}
  </div>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section className="capabilities1">
<div className="container">
<div className="row">
<div className="col-md-6">
    <div className="frame"><img src={brackets} alt='brackets' /></div>
</div>{/*col*/}
<div className="col-md-6">
  <div className="b1">
    <h3>DEVELOPMENT</h3>
    <p>The digital product is not just an ordinary product; it is a living visual development that narrates the identity. The development of a product decides what it will do and where it will stand.</p>
    <p>When working with a qualified and experienced developer, you can anticipate a predictable, satisfying outcome. To make sure that your time and effort are used to their fullest at each stage of growth, we take a proactive stance and adhere to a tried-and-true process.</p>
    <p>When you deal with us, you'll get a responsive product that exceeds your expectations and is customized to your needs.</p>
    <p>We offer full-cycle development services, which cover demand-based scaling, business analysis, the integration of the new product into your infrastructure, and the design of the product from scratch.</p>
    <div className="row">
    <div className="col-md-6">
      <ul>
        <li>Websites with 3D</li>
        <li>Complex animations</li>
        <li>eCommerce solutions</li>
      </ul>
    </div>
    <div className="col-md-6">
      <ul>
        <li>SaaS development</li>
        <li>Cross-platform & hybrid apps</li>
        <li>Mobile apps</li>
      </ul>
    </div>
    </div>{/*row*/}
  </div>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section className="capabilities1">
<div className="container">
<div className="row">
<div className="col-md-6 order-md-2">
  <div className="frame"><img src={pen} alt='pen' /></div>
</div>{/*col*/}
<div className="col-md-6 order-md-1">
  <div className="b1">
    <h3>BRANDING</h3>
    <p>Branding is the procedure of establishing a strong, memorable concept of an organization, and its products, or services in the interest of the audience by blending features such as design, mission statement, and a recurring theme throughout all marketing materials. Effective branding enables businesses to stand out from the competition and develop a devoted consumer market.</p>
    <p>A distinguished brand can significantly affect your bottom line by offering you a competitive edge over your competitors and assisting you in gaining and sustaining clients. An established brand can be a vital asset in drawing clients and establishing a unique appearance, where new businesses (and hence, new competitors) are popping up every day. We've shown ourselves over the years by keeping steadfast in this industry and providing our clients with the branding, they need and require to give their enterprises a distinct appearance!</p>
    <div className="row">
    <div className="col-md-6">
      <ul>
        <li>Brand Identity</li>
        <li>Brand Guidelines</li>
        <li>Logo Design</li>
      </ul>
    </div>
    <div className="col-md-6">
      <ul>
        <li>Iconography</li>
        <li>Illustration</li>
        <li>Animation</li>
      </ul>
    </div>
    </div>{/*row*/}
  </div>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<Upnext data={data} />

</div>
);}
export default Capabilities;