import React from 'react';
import Slider from 'react-slick';
import { Card } from 'react-bootstrap';

const FeedbackScroller = ({ feedbacks }) => {
    const settings = {
      dots: true,               // Show navigation dots
      infinite: true,           // Infinite scrolling
      speed: 300,               // Transition speed
      slidesToShow: 1,          // Number of slides visible at once
      slidesToScroll: 1,        // Number of slides to scroll at once
      autoplay: true,           // Enable autoplay
      autoplaySpeed: 6000,      // Time between transitions (ms)
      adaptiveHeight: true,     // Adjust height based on content
    };
  
    return (
      <Slider {...settings}>
        {Object.keys(feedbacks).map((key) => {
          const feedback = feedbacks[key];
          return (
            <Card key={key} style={{ border: 'none' }} className='feedbackcard'>
              <Card.Body>
                <Card.Text className="textcenter">{feedback.feedback}</Card.Text>
                <Card.Title className="textcenter">{feedback.fullname}</Card.Title>
                <Card.Text className="textcenter">
                  <i>{feedback.position}</i>
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </Slider>
    );
  };
  
export default FeedbackScroller;
  