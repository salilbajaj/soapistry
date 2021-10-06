import React,{useContext} from 'react';
import './style.css';
import {MENU} from '../../utils/constant';
import {Link} from 'react-router-dom';
import {AppContext} from '../../context/AppContext';
import { BiCart } from 'react-icons/bi';
const Navbar = () => {    
    const [cartState, setCartState] = useContext(AppContext);
    console.log('cart state in navbar is ',cartState);
    return (
        <div className='header'>
            <div className='nav-logo'>
                <img src="https://www.fnp.com/assets/images/new-fnplogo.png" alt="Soapistry & Beyond"/>
            </div>            
            <ul className='nav-menu'>
                {MENU.map((item,ind)=>{
                    return <Link key={ind} to={`/${item.toLowerCase()==='home'?'':item.toLowerCase()}`}><li >{item}</li></Link>
                })}
                <Link key={MENU.length} to={'/cart'}><BiCart />{cartState?.productsInCart.length}</Link>
            </ul>            
        </div>
    )
}

export default React.memo(Navbar);
