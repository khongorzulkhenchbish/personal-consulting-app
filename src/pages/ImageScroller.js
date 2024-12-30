import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { ref, onValue } from 'firebase/database';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import db from "../firebase-config.js";
import Card from 'react-bootstrap/Card';

const ImageScroller = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
      const aboutpageRef = ref(db, 'aboutpage');
      onValue(aboutpageRef, (snapshot) => {
        setImages(snapshot.val()['images']);
      });
    }, []);

    const settings = {
      dots: true,               // Show navigation dots
      infinite: true,           // Infinite scrolling
      speed: 300,               // Transition speed
      slidesToShow: 1,          // Number of slides visible at once
      slidesToScroll: 1,        // Number of slides to scroll at once
      autoplay: true,           // Enable autoplay
      autoplaySpeed: 3000,      // Time between transitions (ms)
      adaptiveHeight: true,     // Adjust height based on image
    };
  
    return (
      <Slider {...settings}>
        {images && Object.keys(images).map((imgKey) => (
            <Card.Img key={imgKey}
                variant="top"
                className="carousel-image"
                src={images[imgKey]}
                alt={`Slide ${imgKey}`}
                style={{ width: '100%', height: 'auto' }}
            />
        ))}
      </Slider>
    );
  };
  
  export default ImageScroller;
  
