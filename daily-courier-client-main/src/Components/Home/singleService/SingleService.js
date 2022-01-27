import React from 'react';
import { useHistory } from 'react-router';
import './SingleService.css';

const SingleService = ({value}) => {

    const {description, _id, serviceName,imgUrl, price} = value;
    const history = useHistory();


    const select = (id)=>{

        history.push(`/placeorder/${_id}`)




    }
  





    return (
        <div>
            <div className="card-container">

               <div className="card-box">
               <div className="card-image-container">
                    <img src={imgUrl} alt="" />
                </div>
                <div className="card-allinfo-container">
                    <h3>{serviceName}</h3>
                    <p className='card-price'>${price}</p>
                    <p className='card-description'>{description}</p>
                </div>

                <div className="card-select-btn">
                    <button onClick={()=>select(_id)}>Select</button>
                </div>
               </div>


            </div>
            
        </div>
    );
};

export default SingleService;