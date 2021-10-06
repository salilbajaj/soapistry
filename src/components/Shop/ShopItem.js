import React, { useState } from 'react'
import { BsStarFill } from 'react-icons/bs';
import { BiRupee } from 'react-icons/bi';
import {   
    
    useParams
  } from "react-router-dom";

const ShopItem = ({item}) => {
    const isPdp = useState(false);    
    const openPdp=()=>{
        
    }
    return (
        <div onClick={openPdp} className='item-container'>  
            <div className='item-img'><img src={item?.image} alt={item.title} /></div>
            <div className="item-title"><h4>{item?.title}</h4></div>
            <div className="item-info">
                <div className='price-rate-cont'>
                    <h5><BiRupee /> {item?.price} </h5>
                    <h5>{item?.rating?.rate} <BsStarFill /></h5>
                </div>
            </div>
        </div>
    )
}

export default React.memo(ShopItem);
