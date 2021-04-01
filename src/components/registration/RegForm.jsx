import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const validator = require('email-validator');

// validator.validate("test@email.com");

export default class RegForm extends Component {
  state = {
    isValidated: false,
    fields: {
      name: '',
      surname: '',
      email: '',
      password: '',
      birthday: '',
      street: '',
      city: '',
      postalCode: null,
      careditCard: null,
    },
  };

  handleChange = (e) => {
    this.setState({
      fields: { ...this.state.fields, [e.target.name]: e.target.value },
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <Container className='text-white'>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <Form.Group controlId='formBasicText'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={this.state.fields.name}
                  onChange={this.handleChange}
                  type='text'
                  placeholder='Enter Name'
                  name='name'
                />
              </Form.Group>

              <Form.Group controlId='formBasicText'>
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  value={this.state.fields.surname}
                  onChange={this.handleChange}
                  type='text'
                  name='surname'
                  placeholder='Enter Surname'
                />
              </Form.Group>

              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  value={this.state.fields.email}
                  onChange={this.handleChange}
                  type='email'
                  name='email'
                  placeholder='Enter email'
                />
              </Form.Group>

              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={this.state.fields.password}
                  onChange={this.handleChange}
                  type='password'
                  name='password'
                  placeholder='Password'
                />
              </Form.Group>

              <Form.Group controlId='formBasicCheckbox'>
                <Form.Label>Birthday</Form.Label>
                <Form.Control
                  value={this.state.fields.birthday}
                  onChange={this.handleChange}
                  name='birthday'
                  type='date'
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='formBasicText'>
                <Form.Label>Street address</Form.Label>
                <Form.Control
                  value={this.state.fields.street}
                  onChange={this.handleChange}
                  type='text'
                  name='street'
                  placeholder='Enter Street Address'
                />
              </Form.Group>

              <Form.Group controlId='formBasicText'>
                <Form.Label>City</Form.Label>
                <Form.Control
                  value={this.state.fields.city}
                  onChange={this.handleChange}
                  type='text'
                  name='city'
                  placeholder='Enter City'
                />
              </Form.Group>

              <Form.Group controlId='formBasicNumber'>
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                  value={this.state.fields.postalCode}
                  onChange={this.handleChange}
                  type='number'
                  name='postalCode'
                  placeholder='Enter Postal Code'
                />
              </Form.Group>

              <Form.Group controlId='formBasicNumber'>
                <Form.Label>Credit Card</Form.Label>
                <Form.Control
                  value={this.state.fields.careditCard}
                  onChange={this.handleChange}
                  type='number'
                  name='careditCard'
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
