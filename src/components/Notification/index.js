import React from 'react';
import ReactDom from 'react-dom';
const NOTIFACTION_CONTAINER={
    position:'fixed',
    top:'10vh',
    left:'50%',
    transform:'translate(-50%,50%)',
    zIndex:1000,
    width:'350px',
    heigth:'50px',
    background:'teal',
    color:'#fff',
    fontSize:'15px',
    border:'thin solid grey',
    borderRadius:'2px',
    boxShadow:'0 0.4rem  1.4rem 0 teal',
    padding:'5px'
}
const Notification = ({id,onClose,children}) => {
    console.log(id)
    return ReactDom.createPortal(
        <div style={NOTIFACTION_CONTAINER}>
            {children}
            <button  onClick={()=>onClose(id)}>
                X
            </button>
        </div>, 
    document.getElementById('notification-portal'))
            
}

export default Notification;
