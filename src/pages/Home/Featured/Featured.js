import React from 'react';
import './Featured.css'

const Featured = () => {
    return (
        <div className="containerOne">
            <div className="boxOne">
                <img src="https://i.ibb.co/k30qnbR/20210719-04-kv-w1920.jpg" />
                <span>Commute</span>
            </div>
            <div className="boxOne">
                <img src="https://i.ibb.co/b5VhFYT/20210802-01-kv-w1920.jpg" />
                <span>Offroad</span>
            </div>
            <div className="boxOne">
                <img src="https://i.ibb.co/XkY9X8r/20211028-01-kv-w1920.jpg" />
                <span>Racing</span>
            </div>
            <div className="boxOne">
                <img src="https://i.ibb.co/936P74K/20180626-01-kv-w1920.jpg" />
                <span>Luxery</span>
            </div>
        </div>
    );
};

export default Featured;