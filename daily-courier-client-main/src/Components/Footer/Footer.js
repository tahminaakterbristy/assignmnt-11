import React from 'react';
import './Footer.css';
import {NavLink} from 'react-router-dom';


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">


                <div className="footer-part-1">
                    <div className="logo-image-footer"><img className='logoimage' src="https://i.ibb.co/0QZBjzP/dailycourier-logo.png" alt="" width='90px'/> <span>DailyCourier</span>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores natus ipsum voluptatum doloribus sunt in et possimus quasi. Dignissimos, saepe sint. Veniam magni commodi, voluptatem sunt sequi vel quaerat amet.</p>
                </div>

                <div className="footer-part-2">
                    <h3>Important Link</h3>
                    <div className="footer-list">
                        <ul>
                            <li><NavLink to='/home'>Home</NavLink></li>
                            <li><NavLink to='/manage-all-orders'>Manage Orders</NavLink></li>
                            <li><NavLink to='/your-orders'>Your Orders</NavLink></li>
                            <li><NavLink to='/upload-service'>Add Service</NavLink></li>
                          
                        </ul>
                    </div>
                </div>
                <div className="footer-part-2">
                    <h3>Our Client</h3>
                    <div className="footer-list">
                        <ul>
                            <li>Doctoroma</li>
                            <li>Path</li>
                            <li>Face</li>
                            <li>GiveAway</li>
                            <li>Phonetic</li>
                            <li>Android Dill</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-part-2">
                    <h3>Address</h3>
                    <div className="footer-list">
                      <p>New York, NY, United States</p>
                    </div>
                </div>








            </div>



        <div className="footer-copyright">
        All rights reserved by © DailyCourier 2021
        </div>
          
        </div>
    );
};

export default Footer;