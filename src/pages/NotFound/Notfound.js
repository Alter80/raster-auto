import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            <h2>Page not found</h2>
            <Link to='/home'> <Button variant='outline-dark'>Go Back To Home</Button></Link>

            <img className='img-fluid' src="https://i.ibb.co/vq5502Y/huang-hf-1.gif" alt="" srcset="" />
        </div>
    );
};

export default Notfound;