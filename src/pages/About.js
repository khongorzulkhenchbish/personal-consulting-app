import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { ref, onValue } from "firebase/database";
import db from "../firebase-config.js";
import { Container } from 'react-bootstrap';


const About = () => {
  const [aboutme, setAboutme] = useState([]);
  const [title, setTitle] = useState("");
  const [profilePic, setProfilePic] = useState("");
  
  useEffect(() => {
    const aboutpageRef = ref(db, 'aboutpage');
    onValue(aboutpageRef, (snapshot) => {
      setTitle(snapshot.val()['jobtitle'])
      setAboutme(snapshot.val()['aboutme']);
      setProfilePic(snapshot.val()['imgUrl']);
    });
    
  }, []);
  console.log(typeof aboutme);
  return (
    <Container>
    <Card id="card">
      <Row>
        <Col sm={5}>
          <Card.Img variant="top" src={profilePic} id="profileImg"/>
          <Card.Title id="cardTitle">
            {title}
          </Card.Title>
        </Col>
        <Col sm={7}>
        <Card.Body id="cardBody">
          {Object.keys(aboutme).map((key) =>(
            <Card.Text>{aboutme[key]}</Card.Text>
          ))}
          <a href="https://www.linkedin.com/in/zulaconnect/" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Linkedin</a>
          &#160;|&#160;
          <a href="https://github.com/hongorzulnemo/" class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Github</a>
        </Card.Body>
        </Col>
      </Row>
    </Card>
  </Container>
  )
}

export default About