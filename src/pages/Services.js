import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { ref, onValue } from "firebase/database";
import db from "../firebase-config.js";
import Image from 'react-bootstrap/Image';
import '../App.css';
import { Card, Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const Services = () => {
  const [services, setServices] = useState([]);
  const [processes, setProcesses] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  
  useEffect(() => {
    const servicesRef = ref(db, 'services');
    const processRef = ref(db, 'process');
    const feedbacksRef = ref(db, 'feedbacks');

    onValue(servicesRef, (snapshot) => {
      setServices(snapshot.val());
    });
    
    onValue(processRef, (snapshot) => {
      setProcesses(snapshot.val());
      // console.log(snapshot.val());
    });
    
    onValue(feedbacksRef, (snapshot) => {
      setFeedbacks(snapshot.val());
      // console.log(snapshot.val());
    });
  }, []);

  const redirectToWebsite = (websiteUrl) => {
    window.location.href = websiteUrl;
  }

  return (
    <Container>
      <Card.Title id="servicetitle">
        HOW IS THE CONSULTATION GOING
      </Card.Title>
      <ListGroup>
        {Object.keys(processes).map((process) =>(
          <>
            <ListGroup.Item className='listitem'>
              <Card.Title style={{marginBottom:'8px'}}>
                {process}
              </Card.Title>
              {processes[process]}
            </ListGroup.Item>
          </>
        ))}
      </ListGroup>
      {Object.keys(services).map((service) =>(
        <Button variant="light" className="servicebutton" onClick={() => redirectToWebsite(services[service]['website_url'])}>
          <Container className="buttonCont">
            <Image className="imgIcon" src={services[service]['image_url']} rounded/>
            <Card.Text className="buttonitem">
              {services[service]['service_name']}
            </Card.Text>
          </Container>
        </Button>
      ))}
      {feedbacks ? (
        <>
        <Card.Title id="servicetitle" style={{marginTop:'1rem', marginBottom:'1rem'}}>
          WHAT THE USERS ARE SAYING
        </Card.Title>
        <ListGroup horizontal id="horizontalScrollList">
          {Object.keys(feedbacks).map((feedback) =>(
            <>
              <ListGroup.Item className='feedbackitem'>
                <Card style={{border:'none'}} className='feedbackcard'>
                  <Card.Body>
                    <Card.Text className="textcenter">{feedbacks[feedback]['feedback']}</Card.Text>
                    <Card.Title className="textcenter">{feedbacks[feedback]['fullname']}</Card.Title>
                    <Card.Text className="textcenter"><i>{feedbacks[feedback]['position']}</i></Card.Text>
                  </Card.Body>
                </Card>
              </ListGroup.Item>
            </>
          ))}
        </ListGroup>
        </>
        ) : (
          <></>
        )}
    </Container>
  )
}

export default Services