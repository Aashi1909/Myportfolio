import React from "react";
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiGithub,
  SiBitbucket
} from 'react-icons/si';

function Toolstack() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,            // Enables auto-slide
    autoplaySpeed: 3000,       // Adjust the slide interval time
    prevArrow: null,           // Removes the previous button
    nextArrow: null,           // Removes the next button
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="toolstack-container">
      <Slider {...settings}>
        <div className="client-item">
          <SiMacos className="client-icon" />
        </div>
        <div className="client-item">
          <SiVisualstudiocode className="client-icon" />
        </div>
        <div className="client-item">
          <SiPostman className="client-icon" />
        </div>
        <div className="client-item">
          <SiSlack className="client-icon" />
        </div>
        <div className="client-item">
          <SiVercel className="client-icon" />
        </div>
        <div className="client-item">
          <SiGithub className="client-icon" />
        </div>
        <div className="client-item">
          <SiBitbucket className="client-icon" />
        </div>
      </Slider>
    </div>
  );
}

export default Toolstack;