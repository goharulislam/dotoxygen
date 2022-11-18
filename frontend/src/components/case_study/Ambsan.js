import React from 'react';
import Upnext from '../Upnext';
import ambsan1 from '../../images/ambsan1.jpg';
import ambsan2 from '../../images/ambsan2.jpg';
import ambsan3 from '../../images/ambsan3.jpg';
import ambsan4 from '../../images/ambsan4.jpg';
import ambsan5 from '../../images/ambsan5.jpg';
import ambsan6 from '../../images/ambsan6.jpg';
import ambsan7 from '../../images/ambsan7.jpg';

function Ambsan(){
const data = [
  {
    text: 'Fitness App',
    link: '/fitnessapp'
  }
]
return(
<div className='casestudy'>
<section>
<div className="container">
<div className="row">
<div className="col-md-12">
    <h6>AMBSANTECH</h6>
    <h4>Empowering businesses globally with innovative solutions for a better tomorrow!</h4>
</div>{/*col*/}
<div className="col-md-2">
    <h5 className="bold">Client</h5>
    <p>Zehra Bilal</p>
</div>{/*col*/}
<div className="col-md-2">
    <h5 className="bold">Year</h5>
    <p>2022</p>
</div>{/*col*/}
<div className="col-md-2">
    <h5 className="bold">Industry</h5>
    <p className="mambsan70">Information Technology</p>
</div>{/*col*/}
<div className="col-md-6">
    <h5 className="bold">Technologies</h5>
    <p className="mambsan70">Custom WordPress</p>
</div>{/*col*/}
<div className="col-md-12">
    <h5 className="bold">Scope</h5>
    <p className="mambsan70">Brand Guidelines, Website Design, Website Development, WordPress</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<div className="container-fluid">
<div className="row">
<div className="col-md-12 no_pad">
    <img src={ambsan1} alt="banner" className="img-fluid" />
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}

<section>
<div className="container">
<div className="row">
<div className="col-md-6 order-md-2">
    <img src={ambsan2} alt="mobile" />
</div>{/*col*/}
<div className="col-md-6 order-md-1">
    <h4>Project Goal</h4>
    <p>To create a bespoke, customized website for a company that provides web development services, mobile app development, UX/UI design, e-security, and business consultancy.</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section>
<div className="container">
<div className="row">
<div className="col-md-6">
    <img src={ambsan3} alt="mobile" />
</div>{/*col*/}
<div className="col-md-6">
    <h4>The Problem</h4>
    <p>Numerous people are employed in the design, development, and e-security sectors. Creating a brand identity for a business in order to differentiate it from the competition, build its reputation, and attract new clients. Which was required to be delivered within a couple of weeks with a very strict deadline and which must be simple to maintain.</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section>
<div className="container">
<div className="row">
<div className="col-md-6 order-md-2">
    <img src={ambsan4} alt='mobile' />
</div>{/*col*/}
<div className="col-md-6 order-md-1">
    <h4>The Web Idea</h4>
    <p>A website had to be made in order to convey the client's vision. To facilitate the modification, it was produced using WordPress. Despite having a simple concept, the website was thorough, well-designed, and helpful. However, we were aware that a top-notch website was required because our ideal client was eager to launch their platform with a bang.</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section>
<div className="container">
<div className="row">
<div className="col-md-6">
    <img src={ambsan5} alt='smoothie' />
</div>{/*col*/}
<div className="col-md-6">
    <h4>Client's Expectations</h4>
    <p>A satisfying user experience was required from the website. Within a set time limit, without any restrictions or flaws, and with ease of modification The design, and development must have a variety of features and meet all requirements in order to be delivered in a well-managed way</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section>
<div className="container">
<div className="row">
<div className="col-md-6 order-md-2">
    <img src={ambsan6} alt='mobile' />
</div>{/*col*/}
<div className="col-md-6 order-md-1">
    <h4>Solution by DotOxygen</h4>
    <p>The customer was ecstatic with what we delivered: a custom bespoke WordPress website for a digital agency that is user-friendly and has allowed them to significantly grow their business.</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section>
<div className="container">
<div className="row">
<div className="col-md-6">
    <h4>The result</h4>
    <p>With the assistance of our top-notch team, we have created a straightforward, user-friendly CMS-based website that is useful to everyone. You can find all of your digital solutions on the website of AmbsanTech.</p>
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
    <img src={ambsan7} alt="banner" className="img-fluid  mx-auto d-block" />
    <Upnext data={data} />
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>
</div>
);
}
export default Ambsan;