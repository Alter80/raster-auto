import { useEffect, useState } from "react"


const useMyOrders = () => {
    const [orderdItems, setOrderedItems] = useState({});

    const orderURL = `https://infinite-fjord-65420.herokuapp.com/addOrders`;

    useEffect(() => {
        fetch(orderURL)
            .then(res => res.json())
            .then(data => setOrderedItems(data));
    }, []);

    return { orderdItems };
}

export default useMyOrders;