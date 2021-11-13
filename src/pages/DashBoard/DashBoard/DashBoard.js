import React from 'react';
import { useHistory } from "react-router-dom";
import { Col, Nav, Row, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import MyOrder from '../../MyOrder/MyOrder';
import AddCar from '../AddCar/AddCar';
import AllOrders from '../AllOrders/AllOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllCars from '../ManageAllCars/ManageAllCars';
import Payment from '../Payment/Payment';
import './DashBoard.css';
import DashboardDefault from './DashboardDefault';

const DashBoard = () => {
    const { user, admin, logout } = useAuth();
    const history = useHistory();


    const logOutButton = () => {
        logout();
        history.push('/login')

    }


    const isAdmin = () => {
        if (admin === true) {
            return <div>
                <NavLink
                    className='navitem my-2 text-decoration-none text-black'
                    exact to="/dashboard/makeadmin"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "black"
                    }}
                >
                    Make admin
                </NavLink> <br />

                <NavLink
                    className='navitem my-2 text-decoration-none text-black'
                    exact to="/dashboard/allorders"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "black"
                    }}
                >
                    Manage All orders
                </NavLink> <br />

                <NavLink
                    className='navitem my-2 text-decoration-none text-black'
                    exact to="/dashboard/allCars"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "black"
                    }}
                >
                    Manage All Cars
                </NavLink> <br />

                <NavLink
                    className='navitem my-2 text-decoration-none text-black'
                    exact to="/dashboard/addcar"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "black"
                    }}
                >
                    Add Car
                </NavLink> <br />



            </div>
        }
        else {
            return <div>

                <NavLink
                    className='navitem my-2 text-decoration-none text-black'
                    exact to="/dashboard/myorders"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "black"
                    }}
                >
                    My Orders & Ratings
                </NavLink> <br />




                <NavLink
                    className='navitem my-2 text-decoration-none text-black'
                    exact to="/dashboard/payment"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "black"
                    }}
                >
                    Payments
                </NavLink> <br />


            </div>
        }
    }


    return (
        <div className="container mt-4">
            <h2>Dashboard</h2>
            <hr />
            <Row>
                <Router>
                    <Col sm={3} >
                        <div className='d-flex flex-column'>
                            <NavLink
                                className='navitem my-2 text-decoration-none text-black'
                                exact to="/dashboard/dashboardhome"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "black"
                                }}
                            >
                                Dashboard Home
                            </NavLink>

                            {isAdmin()}

                            <Button variant='outline-dark' onClick={logOutButton}>Logout</Button>
                        </div>
                    </Col>

                    <Col sm={9}>
                        <Switch>
                            <Route exact path='/dashboard/dashboardhome'>
                                <DashboardDefault></DashboardDefault>
                            </Route>

                            <Route exact path='/dashboard'>
                                <DashboardDefault></DashboardDefault>
                            </Route>

                            <Route exact path='/dashboard/makeadmin'>
                                <MakeAdmin></MakeAdmin>
                            </Route>

                            <Route exact path='/dashboard/myorders'>
                                <MyOrder></MyOrder>
                            </Route>

                            <Route exact path='/dashboard/allorders'>
                                <AllOrders></AllOrders>
                            </Route>

                            <Route exact path='/dashboard/allCars'>
                                <ManageAllCars></ManageAllCars>
                            </Route>

                            <Route exact path='/dashboard/payment'>
                                <Payment></Payment>
                            </Route>

                            <Route exact path='/dashboard/addcar'>
                                <AddCar></AddCar>
                            </Route>

                        </Switch>
                    </Col>
                </Router>
            </Row>

        </div>
    );
};

export default DashBoard;