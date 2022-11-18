import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pic1 from '../images/laptopAndPhone.png'
import TrustPilot from '../images/trustpilot.png'

function Landing_Slider(){
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
<section className="landing_slider">
<div className="container">

<Slider {...settings}>
<div>
<div className="row">
<div className="col-md-6">
  <img src={Pic1} alt='commas' />
</div>
<div className="col-md-6">
  <img src={TrustPilot} alt=''/>
  <p className='large'>When we do use GoHaych, it's perfect for us. It's nice knowing there's no stopping along the way and that resonated with our executive team</p>
  <b>Haider Muhammad</b>
  <p>CEO GoHayech</p>
</div>{/*col*/}
</div>{/*row*/}
</div>

<div>
<div className="row">
<div className="col-md-6">
  <img src={Pic1} alt='commas' />
</div>
<div className="col-md-6">
  <img src={TrustPilot} alt=''/>
  <p className='large'>When we do use GoHaych, it's perfect for us. It's nice knowing there's no stopping along the way and that resonated with our executive team</p>
  <b>Haider Muhammad</b>
  <p>CEO GoHayech</p>
</div>{/*col*/}
</div>{/*row*/}
</div>

        <div>
          <div className="row">
          <div className="col-md-6">
            <img src={Pic1} alt='commas' />
          </div>
          <div className="col-md-6">
            <img src={TrustPilot} alt=''/>
            <p className='large'>When we do use GoHaych, it's perfect for us. It's nice knowing there's no stopping along the way and that resonated with our executive team</p>
            <b>Haider Muhammad</b>
            <p>CEO GoHayech</p>
          </div>{/*col*/}
          </div>{/*row*/}
        </div>

        <div>
          <div className="row">
          <div className="col-md-6">
            <img src={Pic1} alt='commas' />
          </div>
          <div className="col-md-6">
            <img src={TrustPilot} alt=''/>
            <p className='large'>When we do use GoHaych, it's perfect for us. It's nice knowing there's no stopping along the way and that resonated with our executive team</p>
            <b>Haider Muhammad</b>
            <p>CEO GoHayech</p>
          </div>{/*col*/}
          </div>{/*row*/}
        </div>

        <div>
          <div className="row">
          <div className="col-md-6">
            <img src={Pic1} alt='commas' />
          </div>
          <div className="col-md-6">
            <img src={TrustPilot} alt=''/>
            <p className='large'>When we do use GoHaych, it's perfect for us. It's nice knowing there's no stopping along the way and that resonated with our executive team</p>
            <b>Haider Muhammad</b>
            <p>CEO GoHayech</p>
          </div>{/*col*/}
          </div>{/*row*/}
        </div>
        
       
      </Slider>
  
  </div>{/*con*/}
  </section>
  );}
export default Landing_Slider;