import { useEffect, useState } from 'react';

const useData = () => {
    const [cars, setCars] = useState([]);

    const dataLocation = 'http://localhost:5000/cars';

    useEffect(() => {
        fetch(dataLocation)
            .then(res => res.json())
            .then(data => setCars(data));

    }, [])


    return { cars };
};

export default useData;