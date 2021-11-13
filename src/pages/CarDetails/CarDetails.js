import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Carousel, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './CarDetails.css'

const CarDetails = () => {
    const [car, setCar] = useState({})
    const { id } = useParams();

    // data fetch
    useEffect(() => {
        const url = `http://localhost:5000/cars/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCar(data));
    }, [])

    const { _id, model, img, Category, color, year, price, description, featImg1, featImg2 } = car;

    console.log(car)

    return (
        <div>
            <Card className="text-center h-100 mt-4 m-5">
                <Card.Body className='d-md-flex justify-content-around align-items-center'>
                    <Card.Img id='carimg' className='p-5 img-fluid' variant="top" src={img} />


                    <Card.Text className=''>
                        <p>{Category}</p>
                        <Card.Title className="mb-2"><h3><strong>{model}</strong></h3></Card.Title>

                        <p><small className='text-muted'>Year</small> <br /> {year}</p>
                        <p><small className='text-muted'>Color</small> <br /> {color}</p>

                        <p className='text-start'> <strong className='text-muted'>Details: </strong>{description}</p>

                        <h3>Price: <strong>${price}</strong></h3>
                    </Card.Text>
                </Card.Body>

                <Card.Body className=''>
                    <div className="containerTwo">
                        <div className="boxTwo img-fluid">
                            <img src={featImg1} />
                        </div>
                        <div className="boxTwo img-fluid">
                            <img src={featImg2} />
                        </div>
                    </div>
                </Card.Body>


                <div className='my-3 mx-auto d-flex'>
                    <Link to='/' className='text-decoration-none'><Button className='py-2 px-4 ms-3 rounded-pill' variant="outline-secondary">Go Home</Button> </Link>

                    <Link to={`/orderconfirm/${_id}`} className='text-decoration-none'><Button className='py-2 px-4 ms-3 rounded-pill' variant="outline-secondary">Buy Now</Button> </Link>



                    {/*  <Button onClick={() => {
                            if (user.displayName) {
                                myCart(_id, itemDetails, user.email);
                            }
                            else {
                                history.push('/login');
                            }
                        }} className='py-2 px-4 ms-3 rounded-pill text-white' variant="btn btn-warning">Buy Now</Button> */}
                </div>

            </Card>
        </div>
    );
};

export default CarDetails;