import React from 'react';
import Upnext from '../Upnext';
import m1 from '../../images/m1.png';
import m2 from '../../images/m2.png';
import m3 from '../../images/m3.png';
import m4 from '../../images/m4.png';
import m5 from '../../images/m5.png';
import m6 from '../../images/m6.png';

function Matcha(){
const data = [
  {
    text: 'Gohaych',
    link: '/gohaych'
  }
]
return(
<div className='casestudy'>
<section>
<div className="container">
<div className="row">
<div className="col-md-12">
<h6>Premium Organic Matcha</h6>
<h4>The tea's spirit is one that combines serenity, warmth, and elegance.</h4>
</div>{/*col*/}
<div className="col-md-2">
<h5 className="bold">Client</h5>
<p>Premium Organic Matcha</p>
</div>{/*col*/}
<div className="col-md-2">
<h5 className="bold">Year</h5>
<p>2021</p>
</div>{/*col*/}
<div className="col-md-8">
<h5 className="bold">Services</h5>
<p className="mb70">Website Design, Website Development, User Interface</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>
<div className='clearfix'></div>

<div className="container-fluid">
<div className="row">
<div className="col-md-12 no_pad">
    <img src={m1} alt="tea garden" className="img-fluid" />
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}

<section>
<div className="container">
<div className="row">
<div className="col-md-6 order-md-2">
    <img src={m2} alt="mobile" />
</div>{/*col*/}
<div className="col-md-6 order-md-1">
    <h4>Project Goal</h4>
    <p>The value of organic goods is being emphasized by several businesses. As global managers, our client understands that employee happiness is a key component of any company's success. Regardless of the industry or market in which a company operates, organic and high-quality products that improve an individual's health are critical, and they have an impact on the overall efficiency and effectiveness of activities.</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section>
<div className="container">
<div className="row">
<div className="col-md-6">
    <img src={m3} alt="mobile" />
</div>{/*col*/}
<div className="col-md-6">
    <h4>The Problem</h4>
    <p>It's indeed challenging to find high-quality items near you, and in this day and age of work and hectic schedules, it is nearly impossible
While some people can make conscious efforts to increase their consumption of the products, others may get stressed and overwhelmed by the end of the day. This weariness can have an immediate impact on their physical health and, as a result, their working efficiency.</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section>
<div className="container">
<div className="row">
<div className="col-md-6 order-md-2">
    <img src={m4} alt='mobile' />
</div>{/*col*/}
<div className="col-md-6 order-md-1">
    <h4>The Web Idea</h4>
    <p>The goal was to design a website that represented the client's concept. The website concept was straightforward, yet it was extensive, well-designed, and beneficial. Nonetheless, we knew we needed a high-quality website because our target audience was comprised of knowledgeable people who appreciated value and relevance.</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section>
<div className="container">
<div className="row">
<div className="col-md-6">
    <img src={m5} alt='smoothie' />
</div>{/*col*/}
<div className="col-md-6">
    <h4>Client's Expectations</h4>
    <p>The website has to provide a pleasing consumer experience. It must be feature-rich, with an emphasis on promoting healthy lifestyles and the consumption of organic tea.</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section>
<div className="container">
<div className="row">
<div className="col-md-6 order-md-2">
    <img src={m6} alt='mobile' />
</div>{/*col*/}
<div className="col-md-6 order-md-1">
    <h4>Solution by DotOxygen</h4>
    <p>The customer was glad about our creation of a full website for organic tea that may be purchased first as they were acquiring out of a nearby store.</p>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>

<section>
<div className="container">
<div className="row">
<div className="col-md-6">
    <h4>The results</h4>
    <p>With the help of our outstanding staff, we created a simple, consumer platform that can assist anybody and everyone. Premium Organic Matcha is a website where you can get all of the organic tea that is just a click away.</p>
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
    {/*<img src={m7} alt="mobile" className="full" />*/}
    <Upnext data={data} />
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>
</div>
);
}
export default Matcha;