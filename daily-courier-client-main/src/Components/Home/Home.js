import React, { useEffect, useState } from 'react';
import './Home.css';
import { Accordion } from 'react-bootstrap';
import SingleService from './singleService/SingleService';
import useAuthContext from '../AuthContext/UseAuthContext';







const Home = () => {

    const images = ['https://i.ibb.co/pfLk34d/delivery-truck-1.jpg','https://i.ibb.co/BPjQwGK/delivery-slide-2.jpg','https://i.ibb.co/5G61sF5/slide-3.jpg']

    const {authStateChange, user} = useAuthContext();


    const [src, setSrc] = useState(images[0]);
    const [services, setServices]= useState([]);


      useEffect(()=>{

        authStateChange()





      },[user])


















    let i = 0;
    useEffect(()=>{

       
      
        setInterval(()=>{
           
            if (i>2) {

                return i=0;
                
            }
            setSrc(images[i])
            i++;


          
        

        },2000)

    },[])







    useEffect(()=>{


        fetch('https://scary-grave-51351.herokuapp.com/services/all-services')
        .then(res=>res.json())
        .then(data=>setServices(data.allServices))
        .catch(err=>{
            console.log(err);
        })

    },[])











    
    return (
        <div className='home'>
            <div className="home-container">

                <div className="home-slider">

                    <img src={src} alt="" />



                    <div className="more-button">
                        <h2>DAILY COURIER</h2>
                        <button>More Info</button>
                    </div>







                </div>



                <div className="service-container">
                    <h2 className='our-services'><span>\\</span> OUR SERVICES <span>\\</span></h2> 

                    <div className="service-card-container">
                    {services?.map(service=> <SingleService key={service._id} value={service}></SingleService>)}
                    </div>

                </div>



                <div className="contact-form-container">

                    <div className="contact-form-image-form">
                    
                        <div className="contact-side-image">
                            <img src="https://i.ibb.co/M8rr4zT/delivery-truck.jpg" alt="" />
                        </div>

                        <div className="contact-form-box">
                        <h2 className='our-contact'><span>\\</span> CONTACT US <span>\\</span></h2>

                            <div className="contact-form">
                                <input type="text" placeholder='Your name here'/> <input type="text" placeholder='Your email'/><br /><input type="text" placeholder='Subject'/> <input type="text" placeholder='Phone'/><br />
                                <div className="text-area"><textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea></div>
                                <div className="contatc-us-btn">
                                <button>Send</button>
                                 </div>
                            </div>



                        </div>





                    </div>






                </div>




                    <div className="accordion-part">
                    <h2 className='our-contact-title-part'><span>\\</span> Our History<span>\\</span></h2>
                  

                <div className="Accordion-container">
                
                    <div className="Accordion-box">

                    <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header style={{
        width:'300px'
    }}>GROUND CARGO</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Regular Service</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Next Day</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Week Service</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>SEA FREIGHT</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>










                    </div>


                    {/* <div className="accordion-image-container">
                        <img src="https://i.ibb.co/xLqzk2J/acordion.jpg" alt="" />
                    </div> */}




                </div>
              
                </div>

               









































            </div>
            
        </div>
    );
};

export default Home;