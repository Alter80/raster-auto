import { useEffect, useState } from "react"


const useMyOrders = () => {
    const [orderdItems, setOrderedItems] = useState({});

    const orderURL = `http://localhost:5000/addOrders`;

    useEffect(() => {
        fetch(orderURL)
            .then(res => res.json())
            .then(data => setOrderedItems(data));
    }, []);

    return { orderdItems };
}

export default useMyOrders;