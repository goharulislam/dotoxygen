import React from "react";
import Slider from "react-slick";
import member1 from '../images/member1.jpg';
import member2 from '../images/member2.jpg';
import member3 from '../images/member3.jpg';
import member4 from '../images/member4.jpg';
import member5 from '../images/member5.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderTeam(){
let settings = {
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  padding: 0,
  arrows: false,
  variableWidth: true,
};
return(
<div className="slider_team">

  <Slider {...settings}>
    <div className="frame"><img src={member1} alt="member" /><h5>Andrei Craciun</h5><p>CEO and co-founder</p></div>
    <div className="frame"><img src={member2} alt="member" /><h5>Marcela Lay</h5><p>Head of Client Strategy</p></div>
    <div className="frame"><img src={member3} alt="member" /><h5>Stephen Clements</h5><p>Group Creative Director</p></div>
    <div className="frame"><img src={member4} alt="member" /><h5>Stephany Wiseman</h5><p>VP, Growth and Brand</p></div>
    <div className="frame"><img src={member5} alt="member" /><h5>Shannon Waltor</h5><p>Head of People and Culture</p></div>
  </Slider>

</div>
);}
export default SliderTeam;