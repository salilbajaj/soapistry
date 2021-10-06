import React from 'react';
import './style.css';
import Product from '../Product';
import ShopList from './ShopList';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";

const Shop = () => {
    let {path} = useRouteMatch();

    return ( 
        <div>
        <Switch>
            <Route exact path={path}>
                <ShopList />
            </Route>
            <Route path={`${path}/:productID`}>
                <Product />
            </Route>
        </Switch>
        </div>                                                       
    )
}

export default Shop;
