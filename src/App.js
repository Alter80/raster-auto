import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Notfound from './pages/NotFound/Notfound';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import AllCars from './pages/AllCars/AllCars';
import CarDetails from './pages/CarDetails/CarDetails';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import DashBoard from './pages/DashBoard/DashBoard/DashBoard';
import AllOrders from './pages/DashBoard/AllOrders/AllOrders';
import MakeAdmin from './pages/DashBoard/MakeAdmin/MakeAdmin';
import OrderConfirm from './pages/OrderConfirm/OrderConfirm';
import MyOrder from './pages/MyOrder/MyOrder';
import DashboardDefault from './pages/DashBoard/DashBoard/DashboardDefault';
import PrivateRoute from './PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route exact path='/home'>
              <Home></Home>
            </Route>

            <Route exact path='/allcars'>
              <AllCars></AllCars>
            </Route>

            <PrivateRoute exact path='/allcars/:id'>
              <CarDetails></CarDetails>
            </PrivateRoute>

            <PrivateRoute exact path='/orderconfirm/:id'>
              <OrderConfirm></OrderConfirm>
            </PrivateRoute>

            {/* dashboard part start */}
            <PrivateRoute exact path='/dashboard'>
              <DashBoard></DashBoard>
            </PrivateRoute>

            <PrivateRoute exact path='/makeadmin'>
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>

            {/* <PrivateRoute exact path='/allorders'>
              <AllOrders></AllOrders>
            </PrivateRoute> */}

            <PrivateRoute exact path='/myorders'>
              <MyOrder></MyOrder>
            </PrivateRoute>

            <PrivateRoute exact path='/dashboard/dashboardhome'>
              <DashboardDefault></DashboardDefault>
            </PrivateRoute>

            <PrivateRoute exact path='/dashboard/makeadmin'>
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>

            <PrivateRoute exact path='/dashboard/allorders'>
              <AllOrders></AllOrders>
            </PrivateRoute>
            {/* dashboard part end */}

            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>

            <Route path='*'>
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
