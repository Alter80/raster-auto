import React from 'react';
import Cars from '../Cars/Cars';
import MyOrder from '../MyOrder/MyOrder';
import Banner from './Banner/Banner';
import Featured from './Featured/Featured';
import MyReviews from './MyReviews/MyReviews';



const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <h2>Check Our Most Selling Cars Right now!!!</h2>
            <Cars></Cars>
            <MyReviews></MyReviews>
        </div>
    );
};

export default Home;