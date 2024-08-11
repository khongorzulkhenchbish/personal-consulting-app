import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css';
import { Container } from 'react-bootstrap';
import db from '../firebase-config';
import { ref, set, push } from "firebase/database";

class SendFeedback extends Component{
  constructor() {
    super(); // You need to call super() in the constructor of a class that extends React.Component
    this.state = {
      fullname: '',
      job: '',
      feedback: ''
    };
  }

  handleInputChange = (key, value) => {
    this.setState(state => ({ 
      ...state,
      [key]: value // <-- Put square brackets
    }));
  }

  validateAndSendFeedback = () => {
    const { fullname, job, feedback } = this.state;

    if (!fullname || !job || !feedback) {
      alert('Please fill in all fields before sending feedback.');
      return; // Stop further execution if validation fails
    } else {
      // Continue with your logic for sending feedback
      const postListRef = ref(db, 'feedbacks');
      const newPostRef = push(postListRef);
      set(newPostRef, {
        fullname: this.state.fullname,
        position: this.state.job,
        feedback: this.state.feedback
      }).then(() => {
        window.alert('Feedback sent successfully!');
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error writing to Firebase:', error);
      });
    }
  }

  render () {
    return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Full Name / Nickname</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={e => this.handleInputChange('fullname', e.target.value)}
            placeholder="your name ..."/>
          </Form.Group>
        <Form.Group>
          <Form.Label>Job / Occupation</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={e => this.handleInputChange('job', e.target.value)}
            placeholder="Student, Software Intern ..."/>
          </Form.Group>
        <Form.Group>
          <Form.Label>Feedback</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={e => this.handleInputChange('feedback', e.target.value)}
            style={{height:'15rem'}}
            placeholder="Sample: I received consultation on preparing for the Google STEP internship, and it was very helpful; I managed to pass the technical stage! I'd recommend her service!"/>
        </Form.Group>
        <Button variant="light" className="servicebutton" onClick={() => this.validateAndSendFeedback()}>Send Feedback</Button>
      </Form>
    </Container>
    );
  }
}

export default SendFeedback;