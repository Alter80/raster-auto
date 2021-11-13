import { Row, Spinner } from 'react-bootstrap';
import useData from '../../hooks/useData';
import SingleCars from '../SingleCars/SingleCars';

const Cars = () => {
    const { cars } = useData();

    const featuredCars = cars.sort((first, second) => 0.5 - Math.random());


    // console.log(cars)

    return (
        <div>
            <Row xs={1} md={3} className="container mx-auto my-5 g-4">
                {
                    featuredCars.length == 0 ? <Spinner className='mx-auto' animation="border" /> : featuredCars.slice(0, 6).map(car => <SingleCars key={car._id}
                        car={car}></SingleCars>)

                }
            </Row>
        </div>
    );
};

export default Cars;