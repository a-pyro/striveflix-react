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
      name: {
        value: '',
        isValid: false,
      },
      surname: {
        value: '',
        isValid: false,
      },
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
      birthday: {
        value: '',
        isValid: false,
      },
      street: {
        value: '',
        isValid: false,
      },
      city: {
        value: '',
        isValid: false,
      },
      postalCode: {
        value: '',
        isValid: false,
      },
      careditCard: {
        value: '',
        isValid: false,
      },
    },
  };

  handleChange = (e) => {
    const propToUpdatate = e.target.name;
    const valueToUpdate = this.state.fields[propToUpdatate];
    console.log(propToUpdatate);
    console.log(valueToUpdate);
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
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={this.state.fields.name.value}
                  onChange={this.handleChange}
                  type='text'
                  placeholder='Enter Name'
                  name='name'
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  value={this.state.fields.surname.value}
                  onChange={this.handleChange}
                  type='text'
                  name='surname'
                  placeholder='Enter Surname'
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  value={this.state.fields.email.value}
                  onChange={this.handleChange}
                  type='email'
                  name='email'
                  placeholder='Enter email'
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={this.state.fields.password.value}
                  onChange={this.handleChange}
                  type='password'
                  name='password'
                  placeholder='Password'
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Birthday</Form.Label>
                <Form.Control
                  value={this.state.fields.birthday.value}
                  onChange={this.handleChange}
                  name='birthday'
                  type='date'
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Street address</Form.Label>
                <Form.Control
                  value={this.state.fields.street.value}
                  onChange={this.handleChange}
                  type='text'
                  name='street'
                  placeholder='Enter Street Address'
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control
                  value={this.state.fields.city.value}
                  onChange={this.handleChange}
                  type='text'
                  name='city'
                  placeholder='Enter City'
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                  value={this.state.fields.postalCode.value}
                  onChange={this.handleChange}
                  type='number'
                  name='postalCode'
                  placeholder='Enter Postal Code'
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Credit Card</Form.Label>
                <Form.Control
                  value={this.state.fields.careditCard.value}
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
