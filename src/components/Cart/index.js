import React, {useContext} from 'react'
import {AppContext} from '../../context/AppContext';
const Cart = () => {
    const [cartState, setCartState] = useContext(AppContext);
    return (
        <div style={{display:'flex',justifyContent:"center"}}>
           <pre> {JSON.stringify(cartState, null, '\t')}</pre>
        </div>
    )
}

export default Cart
