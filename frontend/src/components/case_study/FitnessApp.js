import React from 'react';
import Upnext from '../Upnext';
import man2 from '../../images/man2.jpg';
import mobile2 from '../../images/mobile2.jpg';
import mobile3 from '../../images/mobile3.jpg';
import mobile4 from '../../images/mobile4.jpg';
import mobile5 from '../../images/mobile5.jpg';
import mobile6 from '../../images/mobile6.jpg';
import smoothie1 from '../../images/smoothie1.jpg';

function FitnessApp(){
const data = [
  {
    text: 'Black H2o',
    link: '/blackh2o'
  }
]
return(
<div className='casestudy'>
<section>
<div className="container">
<div className="row">
<div className="col-md-12">
<p className='large'>Fitness App</p>
<h4>Encouraging everyone to be fit</h4>
</div>{/*col*/}
<div className="col-md-2">
<h5 className="bold">Client</h5>
<p>Fitness App</p>
</div>{/*col*/}
<div className="col-md-2">
<h5 className="bold">Year</h5>
<p>2022</p>
</div>{/*col*/}
<div className="col-md-8">
<h5 className="bold">Services</h5>
<p className="mb70">App Design, App Development, User Interface, User Experience, Cross-platform & hybrid app</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<div className="container-fluid">
<div className="row">
<div className="col-md-12 no_pad">
    <img src={man2} alt="man" className="img-fluid" />
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}

<section>
<div className="container">
<div className="row">
<div className="col-md-6 order-md-2">
    <img src={mobile2} alt="mobile" />
</div>{/*col*/}
<div className="col-md-6 order-md-1">
    <h4>Project Goal</h4>
    <p>More and more companies are emphasizing the importance of employee health and fitness. The success of every business depends heavily on how well its employees are treated, and our client is a contemporary leader who understands this. The physical, mental, and emotional well-being of employees affect how effectively and efficiently business operations are conducted in general, regardless of the sector or market in which a firm operates.</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section>
<div className="container">
<div className="row">
<div className="col-md-6">
    <img src={mobile3} alt="mobile" />
</div>{/*col*/}
<div className="col-md-6">
    <h4>The Problem</h4>
    <p>Employees in modern workplaces are expected to be nimble and on their toes during working hours. Employees may feel hurried as a result of deadlines, objectives, work pressure, or the nature of certain occupations. Furthermore, regardless of how wide or packed the office is, it may physically tire employees.</p><p>While some individuals can make deliberate attempts to improve their physical health, others may get stressed and overwhelmed by the end of the day. This exhaustion can have a direct influence on their physical well-being and, as a result, their job productivity.
</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section>
<div className="container">
<div className="row">
<div className="col-md-6 order-md-2">
    <img src={mobile4} alt='mobile' />
</div>{/*col*/}
<div className="col-md-6 order-md-1">
    <h4>The App Idea</h4>
    <p>The client had requested an app that reflected her vision. The app concept was basic but comprehensive, well-designed, and feasible. Nonetheless, we knew we had to create a high-quality application since our target customers were intelligent professionals who valued value and relevance above all else.</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section>
<div className="container">
<div className="row">
<div className="col-md-6">
    <img src={smoothie1} alt='smoothie' />
</div>{/*col*/}
<div className="col-md-6">
    <h4>Client's Expectations</h4>
    <p>For corporate employees who already had hectic occupations, the app needed to feature a user experience that was both welcoming and distracting. It has to be feature-rich, with a focus on encouraging wellness behaviors such as drinking enough water, exercising, taking breaks from screens, working out, and eating nutritious breakfasts, lunches, and dinners.</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section>
<div className="container">
<div className="row">
<div className="col-md-6 order-md-2">
    <img src={mobile5} alt='mobile' />
</div>{/*col*/}
<div className="col-md-6 order-md-1">
    <h4>Solution by DotOxygen</h4>
    <p>The client had requested an app that reflected her vision. The app concept was basic but comprehensive, well-designed, and feasible. Nonetheless, we knew we had to create a high-quality application since our target customers were intelligent professionals who valued value and relevance above all else.</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section>
<div className="container">
<div className="row">
<div className="col-md-6">
    <h4>The result</h4>
    <p>We've designed a simple, user-centric app with the support of our incredible staff that can benefit anybody and everyone. Fitness App is the latest, must-have app on your smartphone for maintaining a healthy lifestyle.</p>
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
    <img src={mobile6} alt="mobile" className="full" />
    <Upnext data={data} />
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>
</div>
);
}
export default FitnessApp;