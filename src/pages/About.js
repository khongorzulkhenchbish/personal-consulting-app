import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { ref, onValue } from "firebase/database";
import db from "../firebase-config.js";
import { Container } from 'react-bootstrap';
import ImageScroller from './ImageScroller.js';
import '../App.css';


const About = () => {
  const [aboutme, setAboutme] = useState([]);
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const aboutpageRef = ref(db, 'aboutpage');
    const linksRef = ref(db, 'links');
    
    onValue(aboutpageRef, (snapshot) => {
      setTitle(snapshot.val()['jobtitle'])
      setName(snapshot.val()['name'])
      setAboutme(snapshot.val()['aboutme']);
    });

    onValue(linksRef, (snapshot) => {
      setLinks(snapshot.val());
    });
  }, []);

  const redirectToWebsite = (websiteUrl) => {
    window.location.href = websiteUrl;
  }

  return (
    <Container>
      <Card id="card">
        <ImageScroller></ImageScroller>
        <Card.Title id="cardTitle">
          {name}
        </Card.Title>
        <Card.Title id="position">
          <i>{title}</i>
        </Card.Title>
        <Card.Body id="cardBody">
          {Object.keys(aboutme).map((key) =>(
            <Card.Text>{aboutme[key]}</Card.Text>
          ))}
        </Card.Body>
        {Object.keys(links).map((link) =>(
          <Button variant="light" className="servicebutton" onClick={() => redirectToWebsite(links[link]['href'])}>
            <Container className="buttonCont">
              <Image className="imgIcon" src={links[link]['img']} rounded/>
              <Card.Text className="buttonitem">
                {links[link]['name']}
              </Card.Text>
            </Container>
          </Button>
        ))}
      </Card>
    </Container>
  )
}

export default About