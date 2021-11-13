import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useData from '../../hooks/useData';
import SingleCars from '../SingleCars/SingleCars';


const AllCars = () => {
    const { cars } = useData();


    return (
        <div>

            <Row xs={1} md={3} className="container mx-auto my-5 g-4">
                {
                    cars.length == 0 ? <Spinner className='mx-auto' animation="border" /> : cars.map(car => <SingleCars key={car._id}
                        car={car}></SingleCars>)

                }
            </Row>

        </div>
    );
};

export default AllCars;