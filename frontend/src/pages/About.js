import React from "react";
import Upnext from '../components/Upnext.js';
import About1 from '../images/about1.jpg';
import CEO from '../images/ceo.jpg';
import Home2 from "../components/Home2.js";
import SecBlog from "../components/SecBlog.js";

function About(){
const data = [
  {
    text: 'Our Work',
    link: '/work'
  }
]
return(
<div>
<section className="about1">
<div className="container">
<div className="row">
<div className="col-md-12">
  <p className='large'>ABOUT US</p>
  <h3>Creative innovations are driven by open communication</h3>
  <div className="frame"><img src={About1} alt="meeting" className="img-fluid" /></div>
  <h6>INSPIRATION</h6>
  <p>Without a doubt, digitization is the cornerstone of practically all intelligent environmental support solutions. However, digitization frequently makes a sizable contribution to a rapidly growing carbon footprint.</p><p>To be clear, digitalization does not emit any harmful radiation or consume energy. The issue is with how technology is developed for use and then used. It is here that DotOxygen sets itself apart from other competing firms. We adopt an entirely green approach.</p><p>We now only use paper when it is necessary, cutting our usage by 75%. Solar power is the primary source of energy. The best part of all is that we commute between 11:00 am and 7:30 pm, which reduces pollution from our side. Therefore, rather than oxygenating digital experiences, we assist mother nature in continuing to oxygenate people.</p>
  <p>DotOxygen is a digital native with a ground-breaking strategy for enterprise development. We have been oxidizing the digital experience since 2021, situated in The United Kingdom & Pakistan, yet the same team has been working under several identities for almost two decades. We provide comprehensive digital products with innovative digital solutions to empower people, start-ups, companies, and enterprises. We've worked with various customers around the globe, launched several products, and 
incarnated multiple projects for our clients. Whether you are in Karachi or anywhere on the Earth, we are aware of all your company's needs and know how to amuse you with our top-notch digital creation and bespoke services. We support you in all areas, including customized user experience, website design and development, e-commerce, mobile applications, branding, and digital marketing services, which are among the services we provide.</p>
  <p className='large'>OUR VALUES</p>
  <h3>When all of the components return to baseline, incredible things can happen</h3>
  <p>Intelligent programming and creative design aren't enough for us to create world-class digital products. It necessitates actual collaboration between innovators and those who come up with the ideas. Transparency, communication, competent project management, and meticulous attention to detail are the foundations of our cooperation.</p>
  <p className='large'>HOW WE WORK</p>
  <h3>It's no coincidence that our clients refer to us as "process nerds."</h3>
  <p>For us, a project is more than simply a job; it is a responsibility to provide the finest possible solution and meet all of the client's desires. and we'll walk you through a step-by-step process to get there.</p><p>The process has its own five fundamental pillars, from which an idea passes to get its visual identity and become an OXIDIZED product.</p>

<div className="tabs1">
  <nav>
  <div className="nav nav-tabs" id="nav-tab" role="tablist">
    <a className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Brainstorm</a>
    <a className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Define</a>
    <a className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Design</a>
    <a className="nav-link" id="nav-four-tab" data-bs-toggle="tab" href="#nav-four" role="tab" aria-controls="nav-four" aria-selected="false">Test</a>
    <a className="nav-link" id="nav-five-tab" data-bs-toggle="tab" href="#nav-five" role="tab" aria-controls="nav-five" aria-selected="false">Launch</a>
  </div>
</nav>
<div className="tab-content" id="nav-tabContent">
  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
    <p>By one or more people musing over ideas in an attempt to define or find a solution to a problem, via brief engagement with the customer about their needs.</p>
  </div>
  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
    <p>Every product has its own identity, and the main goal is to bring in all of the necessary queries to meet the objective and fulfill all of the criteria.</p>
  </div>
  <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
    <p>We build a solution that answers the unmet needs of our customers/users when we have a thorough grasp of their wants.</p>
  </div>
  <div className="tab-pane fade" id="nav-four" role="tabpanel" aria-labelledby="nav-four-tab">
    <p>We do a variety of tests on the product to ensure that it is up to the standard and free of revisions until the very last moment.</p>
  </div>
  <div className="tab-pane fade" id="nav-five" role="tabpanel" aria-labelledby="nav-five-tab">
    <p>What we develop is our trademark, and we launch it in a way that nobody else can.</p>
  </div>
</div>
</div>{/*tabs1*/}

</div>{/*col*/}
<div className="col-md-12">
  <p className='large'>BY THE NUMBER</p>
  <h4>We employ over 49 professionals, having been founded in 2021. Our staff is composed of around 60% engineers, which is composed of 46% of females.</h4>

  <p className='large'>THE MESSAGE</p>
  <h4>The ideal concept is something that should be executed.</h4>

</div>{/*col*/}
<div className="col-md-3 offset-md-1">
  <div className="frame"><img src={CEO} alt="CEO" /></div>
</div>
<div className="col-md-7 offset-md-1">
  <p>Muhammad Ashraf Khan, Founder, and CEO of DotOxygen. An Entrepreneur having experience in the IT industry for more than two decades. Started the journey as a UX writer back in 2002, with the ultimate goal of achieving more, and what I have today.</p>
  <p>The journey was not easy as it seems to the majority, sacrifices are the keynote, with multiple ups and downs and crucial moments but one must go on towards the desired achievement, under my ideology of try, try again considering failures to be the essential part of the development, in the end founding DotOxygen with the goal of providing support to initiatives, start-ups, small and midsize businesses, and enterprises in digital development.</p>
  <p>With the concept of an eco-friendly and less no toxic work atmosphere to enhance the growth of the company and the personnel connected to the adventure of giving and taking it to the desired spot in the sector of Information Technology.</p>

</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<SecBlog />
<Home2 />
<Upnext data={data} />

</div>
);}
export default About;