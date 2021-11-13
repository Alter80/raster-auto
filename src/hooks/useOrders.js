import { useState } from "react";
import useAuth from "./useAuth";


const useOrders = () => {
    const { user } = useAuth();
    const [selectedId, setSelectedId] = useState('');

    // mycart
    function myCart(id, userDetails, carDetails, userMail) {
        console.log('clicked', id);

        const status = 'pending';

        const orderData = { userDetails, carDetails, status, userMail };

        console.log(orderData);

        fetch(`http://localhost:5000/addOrders/`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('added to cart')
                }
                else {
                    alert('item add failed')
                }
            })
    }

    return { myCart };
}

export default useOrders;

