import React, { useState } from 'react';
import {useHistory } from 'react-router-dom';
import './NotFound.css';









const NotFound = () => {
    const history = useHistory();


    const gotoHome = ()=>{

        history.push('/home')

    }






    return (
        <div>

            <div className="not-found-container">

                <div className="not-found-image-container">

                    <img src="https://i.ibb.co/MBbx1Vw/opps-404.jpg" alt="" />

                </div>


                <div className="goto-home-btn">

                    <button onClick={gotoHome}>Go To Home</button>
                </div>


















            </div>



          
            
        </div>
    );
};

export default NotFound;