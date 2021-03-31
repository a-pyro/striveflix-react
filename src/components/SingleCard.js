import React, { useState } from 'react';
import { Card, Col, Modal, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const SingleCard = ({ item }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Col onClick={handleShow} key={uuidv4()}>
        <Card className='my-3' style={{ width: '8rem' }}>
          <Card.Img variant='top' src={item.Poster} />
        </Card>
      </Col>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{item.imdbID}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Didn't have time to finish comment section but we're almost there 😁
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SingleCard;
