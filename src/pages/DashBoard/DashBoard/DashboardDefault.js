import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';


const DashboardDefault = () => {
    const { user, admin } = useAuth()
    const [allOrders, setAllOrders] = useState([]);
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    useEffect(() => {
        fetch('https://infinite-fjord-65420.herokuapp.com/addOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data));

    },
        []);


    let pendingCount = 0;
    let confirmCount = 0;
    allOrders.map(orders => {

        if (orders.status == 'pending') {
            pendingCount = pendingCount + 1;
        }
        else if (orders.status == 'approved') {
            confirmCount = confirmCount + 1;
        }
    })


    const isAdmin = () => {
        if (admin == true) {
            return <div><h3>Total Sold Cars Count: {allOrders.length}</h3>
                <h3>Orders Pending Count: {pendingCount}</h3>
                <h3>Orders Confirm Count: {confirmCount}</h3></div>
        }
        else {
            return <Alert variant="success">
                <p>Please Check Out Our New Cars at "All Cars Section"</p>
            </Alert>

        }
    }

    console.log(pendingCount);


    return (
        <div>
            <h1>Today <br /> {date}</h1>
            <h1>Welcome to Dashboard, {user.displayName}</h1>
            {
                isAdmin()
            }

        </div>
    );
};

export default DashboardDefault;