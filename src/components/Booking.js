import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Booking = () => {
  return (
    <>
      <Form>
        <Form.Label><b>Name</b> </Form.Label>
        <Form.Control type="email" placeholder="John Doe" />
      <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
        <Form.Label><b>Email address</b> </Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><b> Password</b></Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Label><b>Date Of Travel</b> </Form.Label>
      <Form.Control className="mb-3" type="date" name='date'/>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" /*label="Check me out"*/  />
        <Form.Label>Check me out </Form.Label>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <br />
    </>
  )
}

export default Booking
