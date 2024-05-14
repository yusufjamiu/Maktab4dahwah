import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images
import image1 from '../assets/maktab4dahwah.jpg';
import image2 from '../assets/distribution1.jpg';
import image3 from '../assets/distribution2.jpg';
import image4 from '../assets/medical1.jpg';
import image5 from '../assets/distribution3.jpg';

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [image1, image2, image3, image4, image5];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <div>Current slide: {currentSlide + 1}</div>
    </div>
  );
};

export default ImageCarousel;