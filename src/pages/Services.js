import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { ref, onValue } from "firebase/database";
import db from "../firebase-config.js";
import Image from 'react-bootstrap/Image';
import '../App.css';
import { Card, Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const Services = () => {
  // const [servicename, setServicename] = useState("");
  // const [websiteurl, setWebsiteurl] = useState("");
  // const [imageurl, setImageurl] = useState("");
  const [services, setServices] = useState([]);
  const [processes, setProcesses] = useState([]);
  
  useEffect(() => {
    const servicesRef = ref(db, 'services');
    const processRef = ref(db, 'process');
    onValue(servicesRef, (snapshot) => {
      setServices(snapshot.val());
    });

    onValue(processRef, (snapshot) => {
      setProcesses(snapshot.val());
      // console.log(snapshot.val());
    });
  }, []);

  const redirectToWebsite = (websiteUrl) => {
    window.location.href = websiteUrl;
  }

  return (
    <>
      <Card.Title id="servicetitle">
        HOW IS THE CONSULTATION GOING
      </Card.Title>
      <ListGroup>
        {Object.keys(processes).map((key) =>(
          <>
            <ListGroup.Item className='listitem'>
              <Card.Title style={{marginBottom:'8px'}}>
                {key}
              </Card.Title>
              {processes[key]}
            </ListGroup.Item>
          </>
        ))}
      </ListGroup>
      {Object.keys(services).map((key) =>(
        <Button variant="primary" className="servicebutton" onClick={() => redirectToWebsite(services[key]['website_url'])}>
          <Container className="buttonCont">
            <Image className="imgIcon" src={services[key]['image_url']} rounded/>
            <Card.Text className="buttonitem">
              {services[key]['service_name']}
            </Card.Text>
          </Container>
          </Button>
      ))}
    </>
  )
}

export default Services