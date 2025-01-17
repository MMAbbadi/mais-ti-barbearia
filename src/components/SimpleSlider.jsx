import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// https://react-slick.neostack.com/docs/api

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <Slider {...settings} >
      <div>
      <img
        src="https://via.placeholder.com/600x200"
        alt="Carrossel 1"
        className="carousel-image"
        />
      </div>
      <div>
        <h3>2</h3>
      </div>
      
    </Slider>
  );
}