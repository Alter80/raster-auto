import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const location = useLocation();
    const history = useHistory();

    const { user, admin, isLoading, authError, loginUser, logout } = useAuth();

    const onSubmit = (data, e) => {
        e.target.reset();
        console.log(data);

        const { email, password } = data;

        loginUser(email, password, location, history);

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
                                    <input type="text" className="text-center form-control p-2" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                                </div>

                                <div className="form-label-group">
                                    <input type='password' className="text-center form-control p-2" placeholder="Password" {...register("password", { required: true, maxLength: 6 })} />
                                </div>


                                <Button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" >Sign in</Button>



                                <hr className="my-4" />
                                <p>Don't have an account? <Link to='/register'>Register Here</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;

/*
<h3>Login Page</h3>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} /> <br />
                    <input type='password' placeholder="Password" {...register("password", { required: true, maxLength: 6 })} /> <br />


                    <input type="submit" />
                </form>
            </div>
*/