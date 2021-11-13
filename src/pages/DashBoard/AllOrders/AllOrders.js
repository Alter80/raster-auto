import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('https://infinite-fjord-65420.herokuapp.com/addOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data));

    },
        [allOrders]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete')

        if (proceed) {
            const url = `https://infinite-fjord-65420.herokuapp.com/addOrders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainingData = allOrders.filter(order => order._id !== id)
                        setAllOrders(remainingData);
                    }
                })
        }
    }

    const handleUpdate = id => {
        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed) {
            const url = `https://infinite-fjord-65420.herokuapp.com/addOrders/${id}`
            fetch(url, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        alert('Updated');
                    } else {
                        alert('Can not update or its already updated')
                    }
                })
        }
    }


    return (
        <div>
            <h2>All Orders</h2>
            <Container>
                <h2 className='py-3 text-white'>Available Cars</h2>
                <Row xs={1} lg={3} className="g-3">
                    {
                        allOrders.map(order => <div><Col >
                            <Card className='hover-card h-100'>
                                <div className='container rounded'>
                                    <div>
                                        <Card.Img className='p-5 my-4 img-fluid' variant="top" src={order.carDetails.img} />
                                    </div>

                                    <div>
                                        <Card.Body>
                                            <p>Customer name: <strong>{order.userDetails.name}</strong> </p>
                                            <p>customer email: {user.email}</p>
                                            <Card.Title className='text-center'>
                                                <p className='fs-5 fw-bold'>{order.carDetails.model}</p>
                                            </Card.Title>

                                            <Card.Text className='text-center'>
                                                <p>Status: {order.status}</p>
                                                <Rating initialRating={order.rating}
                                                    emptySymbol={<BsStar />}
                                                    fullSymbol={<BsStarFill />}
                                                    readonly />
                                            </Card.Text>

                                            <Card.Text>
                                                <h6 className='text-center'>Price: ${order.carDetails.price}</h6>
                                                <h6 className='text-center'>order Id: {order._id}</h6>
                                            </Card.Text>
                                        </Card.Body>


                                        <div className='d-flex'>
                                            <Button onClick={() => handleUpdate(order._id)} variant="outline-dark" className='mx-auto my-3 p-1'>Update Status</Button>

                                            <Button onClick={() => handleDelete(order._id)} variant="outline-dark" className='mx-auto my-3 p-1'>Delete this order</Button>
                                        </div>
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

export default AllOrders;