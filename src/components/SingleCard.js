import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { withRouter, Link } from 'react-router-dom';

const SingleCard = (props) => {
  const handleClick = () => {
    console.log(props);
    console.log(props.item.imdbID);
    props.history.push(`/details/${props.item.imdbID}`);
  };

  return (
    <>
      <Col>
        <Card onClick={handleClick} className='my-3' style={{ width: '8rem' }}>
          <Card.Img variant='top' src={props.item.Poster} />
        </Card>
      </Col>
    </>
  );
};

export default withRouter(SingleCard);
