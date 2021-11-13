import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Register.css';


const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const history = useHistory();

    const { user, isLoading, authError, registerUser, loginUser, logout } = useAuth();

    const onSubmit = (data, e) => {
        e.target.reset();
        console.log(data);

        const { name, email, password, rePassword } = data;

        if (password !== rePassword) {
            // console.log('not matched')
            alert('Your password did not match');

        }
        else {
            console.log('matched');
            registerUser(name, email, password, history);
        }


    };
    console.log(errors);

    console.log(user);

    return (
        <div className="container">

            <div className="row">

                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Sign In</h5>

                            <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-label-group">
                                    <input type="text" className="text-center form-control p-2" placeholder="Name" {...register("name", { required: true, maxLength: 80 })} />
                                </div>

                                <div className="form-label-group">
                                    <input type="text" className="text-center form-control p-2" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                                </div>

                                <div className="form-label-group">
                                    <input type='password' className="text-center form-control p-2" placeholder="Password" {...register("password", { required: true, maxLength: 6 })} />
                                </div>

                                <div className="form-label-group">
                                    <input type='password' className="text-center form-control p-2" placeholder="Retype_Password" {...register("rePassword", { required: true, maxLength: 6 })} />
                                </div>


                                <Button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" >Sign in</Button>


                                <hr className="my-4" />
                                <p>Already a User? <Link to='/login'>Login Here</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;

