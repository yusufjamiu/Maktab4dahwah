import React, { useState, useEffect } from 'react';
import image1 from '../assets/maktab4dahwah.jpg';
import image2 from '../assets/distribution1.jpg';
import image3 from '../assets/distribution2.jpg';
import image4 from '../assets/medical1.jpg';
import image5 from '../assets/distribution3.jpg';

const ImageSlider = () => {
  const images = [image1, image2, image3, image4, image5];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = 3000; // Change this value to adjust the interval between slides

  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  useEffect(() => {
    const slideTimer = setInterval(nextSlide, slideInterval);
    return () => clearInterval(slideTimer);
  }, [currentSlide, nextSlide, slideInterval]);

  return (
    <div className="relative mt-32">
      <div className="flex overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`w-full transition-all duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r-full"
          onClick={prevSlide}
        >
          &#8249;
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l-full"
          onClick={nextSlide}
        >
          &#8250;
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentSlide ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;