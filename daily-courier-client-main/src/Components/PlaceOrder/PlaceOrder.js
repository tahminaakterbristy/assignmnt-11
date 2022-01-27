import React, { useEffect, useRef, useState } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './PlaceOrder.css';
import useAuthContext from '../AuthContext/UseAuthContext';





const PlaceOrder = () => {
    const [service, setService] = useState([]);
    const history = useHistory();
    const {user}= useAuthContext();
  

    const {serviceName, price, description} = service;
    // console.log(service);
    const [servicename, setServicename] = useState();
    const [servicePrice, setservicePrice]= useState();
    const [weight, setWeight]= useState(0);
       
        

    

    const {id} = useParams();

    useEffect(()=>{
        fetch(`https://scary-grave-51351.herokuapp.com/services/single-service/${id}`)
        .then(res=>res.json())
        .then(data=>setService(data[0]))
        .catch(err=>{
            console.log(err);
        })
     
       

      



    },[])



    // service price load and service name load

    useEffect(()=>{
        setServicename(serviceName);
        setservicePrice(price);
   },[service])



//    get weight and set service price 

   const getWeight = (e)=>{
       const weight = e.target.value;
       if (weight==0) {
           setservicePrice(price)
       }
       setWeight(weight);
       if (weight>1) {

        const serviceCurrentPrice = price + weight*2;
 
        setservicePrice(serviceCurrentPrice);
        
    }
    //    console.log(weight);

   }




    const getServiceName = (e)=>{
        console.log(e.target.value);
        setServicename(e.target.value)
        
    }
    // console.log(servicename);

    const name = useRef();
    const email = useRef();
    const phoneNumber = useRef();
    const serviceType = useRef();
    const deliveryProductName = useRef();
    const deliveryProductWeight = useRef();
    const deliveryCost = useRef();
    const addressFrom = useRef();
    const addressTo = useRef();
    const city = useRef();
    const state = useRef();
    const zipCode = useRef();




    const [msg, setmsg]=useState(0);
   







    const submitInfo = (e)=>{
      e.preventDefault();
      console.log(city.current.value);

      const deliveryInfo = {
          name:name.current.value,
          email:email.current.value,
          phoneNumber:phoneNumber.current.value,
          serviceType:serviceType.current.value,
          deliveryProductName:deliveryProductName.current.value,
          deliveryProductWeight: deliveryProductWeight.current.value,
          deliveryCost:deliveryCost.current.value,
          addressFrom:addressFrom.current.value,
          addressTo:addressTo.current.value,
          city:city.current.value,
          state:state.current.value,
          zipCode:zipCode.current.value,
      }

      fetch('https://scary-grave-51351.herokuapp.com/client/delivery/delivery-info',{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify(deliveryInfo)
          
      })
      .then(res=>{
          if (res.status===200) {
              setmsg(1);
              history.push('/your-orders')
          }
          if (res.status===400) {
              setmsg(2);
          }
          return res.json()
      })
      .then(data=>console.log(data))
      .catch(err=>{
          console.log(err);
      })














      console.log(deliveryInfo);
    }
  
    






    return (
        <div>
          <div className="placeorder-container">

              <div className="placeorder-header">
                    <h3 className='your-service'>Your Service: <span>{serviceName}</span></h3>
                    <p className='placeorder-price'>Cost: <span>${servicePrice}</span></p>



              </div>

              <div className="placeholder-headline">
                    <h2 className='placeholder-title'> Enter Your Information</h2>
              </div>


              <div className="serverMsg">
                  {msg===1? <p className='successMsg'> <img src="https://i.ibb.co/gw5DHXP/success-icon-modified.png" alt="" width='27px'/> <span>Your Order Successfully Submitted</span></p>:null}
                  {msg===2? <p className='errorMsg'>  <img src="https://i.ibb.co/2n2YnqB/wrong-icon-modified.png" alt="" width='27px'/> <span>Please Fill up the Full Form</span> </p>:null}
              </div>
              <div className="placeorder-box">






              <Form onSubmit={submitInfo}>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Your Name</Form.Label>
      <Form.Control ref={name}  type="text" placeholder="Enter Your Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Email</Form.Label>
      <Form.Control ref={email} type="email" placeholder="Enter Your Email" value={user?.email} readOnly/>
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control ref={phoneNumber} type="number" placeholder="Enter Your Phone Number" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Service Name</Form.Label>
      <Form.Control ref={serviceType} onChange={getServiceName} type="text" value={servicename}/>
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Product Name</Form.Label>
      <Form.Control ref={deliveryProductName} type="text" placeholder="Product Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Product Weight (kg)</Form.Label>
      <Form.Control ref={deliveryProductWeight} onChange={getWeight}  type="number" placeholder='Product Weight (kg)' />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Service Cost $</Form.Label>
    <Form.Control ref={deliveryCost} placeholder="Price" value={servicePrice} readOnly/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address From</Form.Label>
    <Form.Control ref={addressFrom} placeholder="Your Address" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address To</Form.Label>
    <Form.Control ref
    ={addressTo} placeholder="Where will you send?" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group  as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control ref={city}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select ref={state} defaultValue="Choose...">
        <option>Dhaka</option>
        <option>Rajshahi</option>
        <option>Chittagaon</option>
        <option>Barishal</option>
        <option>Rangpur</option>
        <option>Mymensing</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip Code</Form.Label>
      <Form.Control  ref={zipCode}/>
    </Form.Group>
  </Row>

 
<div className="your-info-submit-button">
    
  <Button style={{
      width:'300px',
      backgroundColor:'tomato',
      outline:'none',
      border:'none'
  }}  type="submit">
    Submit
  </Button>
</div>
</Form>
{/* variant="primary" */}
                  



















              </div>


          </div>
            
        </div>
    );
};

export default PlaceOrder;