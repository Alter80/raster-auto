
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddCar = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data, e) => {
        e.preventDefault();
        e.target.reset();
        console.log(data);

        fetch(`https://infinite-fjord-65420.herokuapp.com/cars/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(confirmData => {
                console.log(confirmData);
                if (confirmData.insertedId) {
                    alert('New Model Added!')
                }
                else {
                    alert('item add failed')
                }
            })

    };

    return (
        <div className="container">

            <div className="row">

                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Add New Car Details</h5>


                            <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-label-group">
                                    <input type="text" className="text-center form-control p-2" placeholder="model" {...register("model", { maxLength: 80 })} />
                                </div>

                                <div className="form-label-group">
                                    <input type="url" className="text-center form-control p-2" placeholder="img" {...register("img", {})} />
                                </div>

                                <div className="form-label-group">
                                    <input type="text" className="text-center form-control p-2" placeholder="Category" {...register("Category", {})} />
                                </div>

                                <div className="form-label-group">
                                    <input type="text" className="text-center form-control p-2" placeholder="color" {...register("color", {})} />
                                </div>

                                <div className="form-label-group">
                                    <input type="number" className="text-center form-control p-2" placeholder="year" {...register("year", { maxLength: 5 })} />
                                </div>

                                <div className="form-label-group">
                                    <input type="text" className="text-center form-control p-2" placeholder="price" {...register("price", { maxLength: 20 })} />
                                </div>
                                <div className="form-label-group">
                                    <input type="text" className="text-center form-control p-2" placeholder="description" {...register("description", {})} />
                                </div>

                                <div className="form-label-group">
                                    <input type="url" className="text-center form-control p-2" placeholder="featImg1" {...register("featImg1", {})} />
                                </div>

                                <div className="form-label-group">
                                    <input type="url" className="text-center form-control p-2" placeholder="featImg2" {...register("featImg2", {})} />
                                </div>

                                <Button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" >Submit</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCar;