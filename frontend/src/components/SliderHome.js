import React from "react";
import Slider from "react-slick";
import commas from '../images/commas.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderHome(){
let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
};
return(
<section className="slider_home">
<div className="container">

    <Slider {...settings}>
      <div>
        <div className="row">
        <div className="col-md-2">
          <img src={commas} alt='commas' />
        </div>
        <div className="col-md-8">
          <p className='large'>DotOxygen is the perfect solution provider and created a top-notch website for our brand Gohayech which turned out to be SEO friendly.</p>
          <p className='large bold'>Haider Muhammad</p>
          <p>CEO GoHayech</p>
        </div>{/*col*/}
        </div>{/*row*/}
      </div>
      <div>
        <div className="row">
        <div className="col-md-2">
          <img src={commas} alt='commas' />
        </div>
        <div className="col-md-8">
          <p className='large'>After searching for UX/UI design agencies we find out that DotOxygen is the best design provider of their kind, and created an amazing design for our Fitness App</p>
          <p className='large bold'>Leon Darbi</p>
          <p>Founder Fitness App</p>
        </div>{/*col*/}
        </div>{/*row*/}
      </div>
      <div>
        <div className="row">
        <div className="col-md-2">
          <img src={commas} alt='commas' />
        </div>
        <div className="col-md-8">
          <p className='large'>Working with Oxygen was a great experience. They are always there whenever needed. Excellent customer support. Design well-thought-of and implemented. Happy to have used their service</p>
          <h6 className='large bold'>Zahra Bilal</h6>
          <p>Ambsan Tech</p>
        </div>{/*col*/}
        </div>{/*row*/}
      </div>
    </Slider>

</div>{/*con*/}
</section>
);}
export default SliderHome;