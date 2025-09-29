import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { ref, onValue } from "firebase/database";
import db from "../firebase-config.js";
import Image from 'react-bootstrap/Image';
import '../App.css';
import { Card, Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import FeedbackScroller from './FeedbackScroller';

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
    });
    
    onValue(feedbacksRef, (snapshot) => {
      setFeedbacks(snapshot.val());
    });
  }, []);

  const redirectToWebsite = (websiteUrl) => {
    window.location.href = websiteUrl;
  }

  return (
    <Container>
      {feedbacks ? (
        <>
        <Card.Title id="servicetitle">
          CONSULTATION FEEDBACKS
        </Card.Title>
        <FeedbackScroller feedbacks={feedbacks}>
        </FeedbackScroller>
        </>
        ) : (
          <></>
      )}
      <Card.Title id="servicetitle">
        HOW THE CONSULTATION GOES
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
      <Card.Title id="servicetitle">
        CHOOSE FROM BELOW OPTIONS TO BOOK TIME
        <br></br>
        <i >(only after step 2)</i>
      </Card.Title>
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
    </Container>
  )
}

export default Services