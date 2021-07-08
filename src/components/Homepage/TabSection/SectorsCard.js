import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Col } from 'react-bootstrap';
import cardimg from '../../../Assets/images/xlf.jpeg';

const SectorsCard = ({
  src,
  title,
  text,
  linkpath = '/toplist',
  buttonText,
}) => {
  return (
    <Col lg={3} className='mb-4'>
      <Link
        to={{ pathname: `${linkpath}` }}
        style={{
          cursor: 'pointer',
          textDecoration: 'none',
          color: '#212529',
        }}
      >
        <Card>
          <Card.Img variant='top' src={cardimg} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Button
              variant='outline-primary'
              style={{ textTransform: 'uppercase' }}
            >
              {buttonText}
            </Button>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default SectorsCard;
