import React from 'react';
import Upnext from '../Upnext';
import b1 from '../../images/b1.jpg';
import b2 from '../../images/b2.png';
import b3 from '../../images/b3.png';
import b4 from '../../images/b4.png';
import b5 from '../../images/b5.png';
import b6 from '../../images/b6.png';
import b7 from '../../images/b7.png';

function BlackH2o(){
const data = [
  {
    text: 'Matcha',
    link: '/matcha'
  }
]
return(
<div className='casestudy'>
<section>
<div className="container">
<div className="row">
<div className="col-md-12">
<h6>Black H2O</h6>
<h4>Mother earth's superfood</h4>
</div>{/*col*/}
<div className="col-md-2">
<h5 className="bold">Client</h5>
<p>Black H2O</p>
</div>{/*col*/}
<div className="col-md-2">
<h5 className="bold">Year</h5>
<p>2021</p>
</div>{/*col*/}
<div className="col-md-8">
<h5 className="bold">Services</h5>
<p className="mb70">Branding, Website Design, User Interface, User Experience</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<div className="container-fluid">
<div className="row">
<div className="col-md-12 no_pad">
    <img src={b1} alt="woman" className="img-fluid" />
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}

<section>
<div className="container">
<div className="row">
<div className="col-md-6 order-md-2">
    <img src={b2} alt="mobile" />
</div>{/*col*/}
<div className="col-md-6 order-md-1">
    <h4>Project Goal</h4>
    <p>Many firms are highlighting the importance of organic products. Our client, as a modern leader, recognizes that employee wellbeing is a critical component of any company's success. Regardless of the industry or market in which a company works, organic and quality product that enhances an individual's health is very essential and has an impact on the overall efficiency and effectiveness of operations.</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section>
<div className="container">
<div className="row">
<div className="col-md-6">
    <img src={b3} alt="mobile" />
</div>{/*col*/}
<div className="col-md-6">
    <h4>The Problem</h4>
    <p>Its is difficult to find quality products easily near you and in this era of work and tuff schedules its almost tough Employees may feel hurried as a result of deadlines, objectives, work pressure, or the nature of certain occupations. Furthermore, regardless of how wide or packed the office is, it may physically tire employees and reduces a person's health. While some individuals can make deliberate attempts to improve their intake of the products, others may get stressed and overwhelmed by the end of the day. This exhaustion can have a direct influence on their physical well-being and, as a result, their job productivity.</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section>
<div className="container">
<div className="row">
<div className="col-md-6 order-md-2">
    <img src={b4} alt='mobile' />
</div>{/*col*/}
<div className="col-md-6 order-md-1">
    <h4>The Web Idea</h4>
    <p>The client had requested a website that reflected her vision. The website concept was basic but comprehensive, well-designed, and feasible. Nonetheless, we knew we had to create a high-quality website since our target customers were intelligent professionals who valued value and relevance above all else.</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section>
<div className="container">
<div className="row">
<div className="col-md-6">
    <img src={b5} alt='smoothie' />
</div>{/*col*/}
<div className="col-md-6">
    <h4>Client's Expectations</h4>
    <p>For corporate employees who already had hectic occupations, the website needed to feature a user experience that was welcoming. It has to be feature-rich, with a focus on encouraging wellness behaviors and the usage of the organic product.</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section>
<div className="container">
<div className="row">
<div className="col-md-6 order-md-2">
    <img src={b6} alt='mobile' />
</div>{/*col*/}
<div className="col-md-6 order-md-1">
    <h4>Solution by DotOxygen</h4>
    <p>The client was satisfied by what we created a complete website for the organic products that can be brought from as if they were purchasing from a store near.</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section>
<div className="container">
<div className="row">
<div className="col-md-6">
    <h4>The result</h4>
    <p>We've designed a simple, user-centric website with the support of our incredible staff that can benefit anybody and everyone. Black H20 is a website from which you can buy all the organic products which are just a click away.</p>
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
    <img src={b7} alt="mobile" className="full" />
    <Upnext data={data} />
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>
</div>
);
}
export default BlackH2o;