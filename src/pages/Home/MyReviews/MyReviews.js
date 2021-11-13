import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import useAuth from '../../../hooks/useAuth';

import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

const MyReviews = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('http://localhost:5000/addOrders')
            .then(res => res.json())
            .then(data => setMyOrders(data));
    }, []);


    return (
        <div>
            <h3>All Reviews</h3>
            <Container>
                <Row xs={1} lg={3} className="g-3">
                    {
                        myOrders.map(order => <div><Col >
                            <Card className='hover-card h-100 '>
                                <div className='container rounded'>
                                    <div>
                                        <Card.Img className='p-5 my-4 img-fluid' variant="top" src={order.carDetails.img} />
                                    </div>

                                    <div>
                                        <Card.Body>
                                            <p>Buyer: <strong>{order.userDetails.name}</strong> </p>
                                            <Card.Title className='text-center'>
                                                <h3 className='fs-5 fw-bold'>{order.carDetails.model}</h3>
                                                <small className='text-muted'>Color: {order.carDetails.color}</small>
                                            </Card.Title>

                                            <Card.Text className='text-center'>
                                                <Rating initialRating={order.rating}
                                                    emptySymbol={<BsStar />}
                                                    fullSymbol={<BsStarFill />}
                                                    readonly />
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        </div>)
                    }

                </Row>
            </Container>

        </div>
    );
};

export default MyReviews;