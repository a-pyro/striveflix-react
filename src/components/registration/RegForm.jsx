import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class RegForm extends Component {
  state = {
    isValidated: false,
  };
  render() {
    return (
      <Container className='text-white'>
        <Form>
          <Row>
            <Col>
              <Form.Group controlId='formBasicText'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder='Enter Name' />
              </Form.Group>

              <Form.Group controlId='formBasicText'>
                <Form.Label>Surname</Form.Label>
                <Form.Control type='text' placeholder='Enter Surname' />
              </Form.Group>

              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>

              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group>

              <Form.Group controlId='formBasicCheckbox'>
                <Form.Label>Birthday</Form.Label>
                <Form.Control type='date' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='formBasicText'>
                <Form.Label>Street address</Form.Label>
                <Form.Control type='text' placeholder='Enter Street Address' />
              </Form.Group>

              <Form.Group controlId='formBasicText'>
                <Form.Label>City</Form.Label>
                <Form.Control type='text' placeholder='Enter City' />
              </Form.Group>

              <Form.Group controlId='formBasicNumber'>
                <Form.Label>Postal Code</Form.Label>
                <Form.Control type='number' placeholder='Enter Postal Code' />
              </Form.Group>

              <Form.Group controlId='formBasicNumber'>
                <Form.Label>Credit Card</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Enter Credit Card Number'
                />
              </Form.Group>
            </Col>

            {this.state.isValidated && (
              <Col>
                <Button variant='primary' type='submit'>
                  Submit
                </Button>
              </Col>
            )}
            {!this.state.isValidated && (
              <Col md={12}>
                <Button variant='primary' type='submit' disabled>
                  Submit
                </Button>
              </Col>
            )}
          </Row>
        </Form>
      </Container>
    );
  }
}
