import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';


const ManageAllCars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setCars(data));

    }, [cars]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete')

        if (proceed) {
            const url = `http://localhost:5000/cars/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainingData = cars.filter(car => car._id !== id)
                        setCars(remainingData);
                    }
                })
        }
    }

    // console.log(cars)

    return (
        <div>
            <Row xs={1} md={3} className="container mx-auto my-5 g-4">
                {
                    cars.length == 0 ? <Spinner className='mx-auto' animation="border" /> : cars.map(car => <Col className='p-3 ' >

                        <Card className='h-100 hover-card card-border'>
                            <Card.Img className='p-3 img-fluid' variant="top" src={car.img} />

                            <Card.Body>
                                <p className='text-muted'>{car.year}</p>
                                <Card.Title>{car.model}</Card.Title>
                                <Card.Text>
                                    <p className='text-muted'>{car.Category}</p>
                                    <p className='text-muted'>{car.color}</p>
                                </Card.Text>
                                <Card.Text>
                                    <p>{car.description.substring(0, 160)}...</p>
                                </Card.Text>

                                <Button onClick={() => handleDelete(car._id)} variant="outline-dark" className='mx-auto my-3 p-1'>Delete This from Listing</Button>


                            </Card.Body>
                        </Card>
                    </Col>)

                }
            </Row>

        </div>
    );
};

export default ManageAllCars;