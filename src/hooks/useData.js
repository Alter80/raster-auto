import { useEffect, useState } from 'react';

const useData = () => {
    const [cars, setCars] = useState([]);

    const dataLocation = 'https://infinite-fjord-65420.herokuapp.com/cars';

    useEffect(() => {
        fetch(dataLocation)
            .then(res => res.json())
            .then(data => setCars(data));

    }, [])


    return { cars };
};

export default useData;