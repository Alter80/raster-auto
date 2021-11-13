import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardDefault = () => {
    const { user } = useAuth()
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data));

    },
        [allOrders]);

    return (
        <div>
            <h1>Welcome to Dashboard, {user.displayName}</h1>
            <h3>Total Sold Cars Count: {allOrders.length}</h3>
        </div>
    );
};

export default DashboardDefault;