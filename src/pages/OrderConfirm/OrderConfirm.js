import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Carousel, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useOrders from '../../hooks/useOrders';


const OrderConfirm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [car, setCar] = useState({})
    const { id } = useParams();
    const { user } = useAuth();
    const { myCart } = useOrders();

    const history = useHistory();

    // data fetch
    useEffect(() => {
        const url = `https://infinite-fjord-65420.herokuapp.com/cars/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCar(data));
    }, [])

    const { _id, model, img, Category, color, year, price, description, featImg1, featImg2 } = car;

    const onSubmit = (data, e) => {
        e.target.reset();
        console.log(data);

        if (user.displayName) {
            myCart(_id, data, car, user.email);
            history.push('/myorders')
        }
        else {
            history.push('/login');
        }

    };


    return (
        <div className='container border-0'>
            <h2>Check & Confirm Your Order </h2>
            <hr className='w-25 mx-auto' />
            <Card className="text-center h-100 mt-4 m-5">
                <Card.Body className='d-md-flex justify-content-center align-items-center'>
                    <div>
                        <Card.Img id='carimg' className='p-5 img-fluid' variant="top" src={img} width='100px' />
                    </div>


                    <Card.Text className=''>
                        <Card.Title className="mb-2"><h3><strong>{model} order form</strong></h3></Card.Title>

                        <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-label-group">
                                <input type="text" defaultValue={user.displayName} className="text-center form-control p-2" placeholder="Name" {...register("name", { required: true, maxLength: 80 })} />
                            </div>

                            <div className="form-label-group">
                                <input type="text" defaultValue={user.email} className="text-center form-control p-2" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                            </div>

                            <div className="form-label-group">
                                <input type="text" className="text-center form-control p-2" placeholder="Address" {...register("address", { required: true, maxLength: 200 })} />
                            </div>

                            <Button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" >Confirm Order</Button>

                        </form>

                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default OrderConfirm;