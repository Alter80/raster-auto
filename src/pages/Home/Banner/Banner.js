import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <Carousel fade >
            <Carousel.Item>
                <img
                    id='banner-img'
                    className="d-block w-100 rounded"
                    src="https://i.ibb.co/N6sDq6m/20141118-01-kv-w1920.jpg"
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    id='banner-img'
                    className="d-block w-100 rounded"
                    src="https://i.ibb.co/zF2QhLV/20191011-01-kw-w1920.jpg"
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item >
                <img
                    id='banner-img'
                    className="d-block w-100 rounded"
                    src="https://i.ibb.co/HzSDQJR/20191105-02-kv-w1920.jpg"
                    alt="Third slide"
                />


            </Carousel.Item>

        </Carousel>
    );
};

export default Banner;




/*

https://i.ibb.co/N6sDq6m/20141118-01-kv-w1920.jpg
https://i.ibb.co/zF2QhLV/20191011-01-kw-w1920.jpg
https://i.ibb.co/HzSDQJR/20191105-02-kv-w1920.jpg */