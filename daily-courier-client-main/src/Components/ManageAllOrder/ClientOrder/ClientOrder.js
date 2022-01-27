import React, { useEffect, useState } from 'react';
import './ClientOrder.css';




const ClientOrder = (props) => {

    const {approveEvent, deleteEvent, cancelEvent} = props
    console.log(props);

    const {addressFrom, addressTo, name, email, phoneNumber, status, _id, deliveryProductName} =props.value;


    const cancel = ()=>{

        fetch(`http://localhost:5000/client/delivery/delevery-info-delete/${_id}`,{
            method:"PUT"
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>{
            console.log(err);
        })




    }

    const ok = ()=>{

        fetch(`http://localhost:5000/client/delivery/delevery-info-approve/${_id}`,{
            method:"PUT"
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>{
            console.log(err);
        })

    }

   const [okBtn,setOkBtn] =useState()





    const confirmBtn = ()=>{

        const r = window.confirm("Are you sure? Do you want to delete it?")
        if (r==true) {
            deleteEvent(_id)
        }
        else{

        }
        console.log(r);

    }

    



    return (
        <tr className='manage-order-client-row'>
            
           <td title={name}>{name?.length>18?name.substring(0,12):name}</td>
           <td title={deliveryProductName}>{deliveryProductName}</td>
           {status=='Pending'?<td className='pending'> <p>{status}</p></td>:null}
           {status=='Aproved'?<td className='aproved'> <p>{status}</p></td>:null}
           {status=='Canceled'?<td className='cancel-status'> <p>{status}</p></td>:null}
          
           
           <td title={email}>{email}</td>
           <td title={phoneNumber} className='phone-number-td'>{phoneNumber}</td>
           <td title={addressTo}>{addressTo}</td>
           <td ><div className='cancel-td'><button onClick={()=>cancelEvent(_id)} >Cancel</button> {status=='Canceled'?null:<button className='ok' onClick={()=>approveEvent(_id)}>Approve</button>}  </div></td>

           {/* <td><div className='delete-order-item-td'><button onClick={()=>deleteEvent(_id)} >Delete</button></div></td> */}
           <td><div className='delete-order-item-td'><button onClick={()=>confirmBtn()} >Delete</button></div></td>









        </tr>
    );
};

export default ClientOrder;