"use client";

import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface CarouselProps {
  images: string[];
  autoCycle?: boolean;
  cycleInterval?: number; 
}

const Carousel: React.FC<CarouselProps> = ({ images, autoCycle = true, cycleInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null); 

  const startAutoCycle = () => {
    if (autoCycle) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, cycleInterval);
    }
  };

  const stopAutoCycle = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleUserInteraction = (action: () => void) => {
    stopAutoCycle();
    action();
    startAutoCycle();
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  
  useEffect(() => {
    startAutoCycle();
    return () => stopAutoCycle(); 
  }, [autoCycle, cycleInterval, images.length]);

  return (
    <div className="relative w-full h-full max-w-lg mx-auto overflow-hidden">
      <div className="relative overflow-hidden rounded-sm">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      <button
        onClick={() => handleUserInteraction(prevSlide)}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
      >
        <FaArrowLeft className="text-black" />
      </button>
      <button
        onClick={() => handleUserInteraction(nextSlide)}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
      >
        <FaArrowRight className="text-black" /> 
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-400'
            }`}
            onClick={() => handleUserInteraction(() => setCurrentIndex(index))}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
