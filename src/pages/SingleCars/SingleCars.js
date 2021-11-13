import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleCars.css'

const SingleCars = (props) => {
    const { _id, model, img, Category, color, year, price, description, featImg1, featImg2 } = props.car;

    // console.log(props.car);

    return (
        <Col className='p-3 ' >
            <Link to={`/allcars/${_id}`} className='text-decoration-none text-black'>
                <Card className='h-100 hover-card card-border'>
                    <Card.Img className='p-3 img-fluid' variant="top" src={img} />

                    <Card.Body>
                        <p className='text-muted'>{year}</p>
                        <Card.Title>{model}</Card.Title>
                        <Card.Text>
                            <p className='text-muted'>{Category}</p>
                            <p className='text-muted'>{color}</p>
                        </Card.Text>
                        <Card.Text>
                            <p>{description.substring(0, 160)}...</p>
                        </Card.Text>

                        <Button variant="outline-light" className='text-muted'>Details</Button>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
};

export default SingleCars;

