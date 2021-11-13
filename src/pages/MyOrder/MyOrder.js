import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useMyOrders from '../../hooks/useMyOrders';
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { useForm } from 'react-hook-form';

const MyOrder = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();
    const [selectedId, setSelectedId] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/addOrders')
            .then(res => res.json())
            .then(data => setMyOrders(data));
    }, [myOrders]);

    function selectedRating(id) {
        setSelectedId(id);
    }

    const onSubmit = (data, e) => {
        e.target.reset();
        console.log(data.rating);
        const { rating } = data


        console.log(selectedId)

        const givenRating = { rating, selectedId }
        fetch('http://localhost:5000/addOrders', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(givenRating)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    alert('Rating Given Successfully!');
                }
                else {
                    alert(`Cant Rate it`)
                }
            })
    };

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete')

        if (proceed) {
            const url = `http://localhost:5000/addOrders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainingData = myOrders.filter(order => order._id !== id)
                        setMyOrders(remainingData);
                    }
                })
        }
    }

    // for rating or approval show
    const showRating = (status, id) => {
        if (status != 'approved') {
            return <h3 className='fs-4 fw-bold'>Order Status: {status}</h3>
        }
        else {
            return <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>

                <div className="form-label-group">
                    <p>Give Your Personal Rating</p>
                    <select className="text-center rounded-pill form-control p-2" onClick={() => selectedRating(id)} {...register("rating", { required: true })}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                </div>

                <Button variant="outline-dark" className="my-2" type="submit" >Rate this Car</Button>
            </form>
        }
    }


    // console.log(typeof orderdItems);
    // console.log(myOrders);


    return (
        <div>
            <h2>My Orders and Ratings</h2>
            <Container>
                <h2 className='py-3 text-white'>Available Cars</h2>
                <Row xs={1} lg={3} className="g-3">
                    {
                        myOrders.map(order => user.email == order.userDetails?.email && <div><Col >
                            <Card className='hover-card h-100 '>
                                <div className='container rounded'>
                                    <div>
                                        <Card.Img className='p-5 my-4 img-fluid' variant="top" src={order.carDetails.img} />
                                    </div>

                                    <div>
                                        <Card.Body>
                                            <p>Customer name: <strong>{order.userDetails.name}</strong> </p>
                                            <p>{user.email}</p>
                                            <Card.Title className='text-center'>
                                                <h3 className='fs-4 fw-bold'>{order.carDetails.model}</h3>
                                            </Card.Title>
                                            {
                                                showRating(order.status, order._id)
                                            }


                                            <Card.Text className='text-center'>

                                                <Rating initialRating={order.rating}
                                                    emptySymbol={<BsStar />}
                                                    fullSymbol={<BsStarFill />}
                                                    readonly /> <br />
                                                <small>My Rating is {order.rating} stars</small>
                                            </Card.Text>

                                            <Card.Text>
                                                <h4 className='text-center'>Price: ${order.carDetails.price}</h4>

                                                <Button onClick={() => handleDelete(order._id)} variant="outline-dark" className='mx-auto rounded-pill px-3 my-3 p-1'>Delete This from Listing</Button>

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

export default MyOrder;