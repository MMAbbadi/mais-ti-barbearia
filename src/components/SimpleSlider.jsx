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
        src="https://cdn.pixabay.com/photo/2020/05/24/02/00/barber-shop-5212059_1280.jpg"
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