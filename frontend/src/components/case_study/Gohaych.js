import React from 'react';
import Upnext from '../Upnext';
import g1 from '../../images/g1.jpg';
import g2 from '../../images/g2.png';
import g3 from '../../images/g3.png';
import g4 from '../../images/g4.png';
import g5 from '../../images/g5.png';
import g6 from '../../images/g6.png';
import g7 from '../../images/g7.png';

function Gohaych(){
const data = [
  {
    text: 'Capabilities',
    link: '/capabilities'
  }
]
return(
<div className='casestudy'>
<section>
<div className="container">
<div className="row">
<div className="col-md-12">
<h6>GOHAYCH</h6>
<h4>Building beautiful technology for innovators</h4>
</div>{/*col*/}
<div className="col-md-2">
<h5 className="bold">Client</h5>
<p>GoHaych</p>
</div>{/*col*/}
<div className="col-md-2">
<h5 className="bold">Year</h5>
<p>2020</p>
</div>{/*col*/}
<div className="col-md-8">
<h5 className="bold">Services</h5>
<p className="mb70">Website Design, Website Development, User Interface, User Experience</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>
<div className='clearfix'></div>

<div className="container-fluid">
<div className="row">
<div className="col-md-12 no_pad">
    <img src={g1} alt="woman" className="img-fluid" />
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}

<section>
<div className="container">
<div className="row">
<div className="col-md-6 order-md-2">
    <img src={g2} alt="mobile" />
</div>{/*col*/}
<div className="col-md-6 order-md-1">
    <h4>Project Goal</h4>
    <p>To build a website for media professionals, graphic designers, and web development organizations.</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section>
<div className="container">
<div className="row">
<div className="col-md-6">
    <img src={g3} alt="mobile" />
</div>{/*col*/}
<div className="col-md-6">
    <h4>The Problem</h4>
    <p>Many people work in the design, development, and marketing fields. Creating a brand identity for a company that distinguishes it from the competition in order to improve the company's reputation and attract new business.</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section>
<div className="container">
<div className="row">
<div className="col-md-6 order-md-2">
    <img src={g4} alt='mobile' />
</div>{/*col*/}
<div className="col-md-6 order-md-1">
    <h4>The Web Idea</h4>
    <p>It was intended to create a website that reflected the client's vision. The website concept was basic, yet it was comprehensive, well-designed, and practical. Nonetheless, we knew we required a high-quality website because our target clientele were intelligent professionals who valued value and relevancy.</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section>
<div className="container">
<div className="row">
<div className="col-md-6">
    <img src={g5} alt='smoothie' />
</div>{/*col*/}
<div className="col-md-6">
    <h4>Client's Expectations</h4>
    <p>The website had to offer a pleasant user experience. It must have a lot of features and meet all of the basic requirements for delivering the design, development, and marketing value in a well-managed style.</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section>
<div className="container">
<div className="row">
<div className="col-md-6 order-md-2">
    <img src={g6} alt='mobile' />
</div>{/*col*/}
<div className="col-md-6 order-md-1">
    <h4>Solution by DotOxygen</h4>
    <p>The customer was thrilled with what we provided: a complete website for a digital agency that is user-friendly and has enabled them greatly develop their business.</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section>
<div className="container">
<div className="row">
<div className="col-md-6">
    <h4>The result</h4>
    <p>We've designed a simple, user-friendly website with the support of our excellent staff that can benefit anybody and everyone. GOHAYCH is the website of a digital agency where you may discover all of your digital solutions.</p>
</div>{/*col*/}
<div className="col-md-6">
    <div className="row">
    <div className="col-md-6">
        <h2>96%</h2><p>CUSTOMER SATISFACTION</p>
    </div>
    <div className="col-md-6">
        <h2>20+</h2><p>5 STAR REVIEWS</p>
    </div>
    <div className="col-md-12">
        <h2>30+</h2><p>RECOMMENDATIONS</p>
    </div>
    </div>
</div>{/*col*/}
<div className="col-md-12">
    <img src={g7} alt="mobile" className="full" />
    <Upnext data={data} />
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>
</div>
);
}
export default Gohaych;