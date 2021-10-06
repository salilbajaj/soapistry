import React, {useState,useEffect, useRef} from 'react';
import useFetch from '../../custom-hooks/useFetch';
import './style.css';
import {BASEURL as baseUrl} from '../../utils/constant';
import { FixedSizeGrid as Grid} from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";
import ShopItem from './ShopItem';
import {   
    Link,
    useRouteMatch
  } from "react-router-dom";

const ShopList = () => {
    const totalColumns = 3;
    let {path,url} = useRouteMatch();
    const {data: shopList, isLoading, error} = useFetch(`${baseUrl}/products`);
    const Cell = React.useCallback(({ columnIndex, rowIndex, style}) => {
        const currentIndex = totalColumns*rowIndex+columnIndex;          
        return (             
        <>
        {currentIndex<=shopList.length-1 &&
            <div style={style} className='product-container'>
                <Link to={`${url}/${shopList[currentIndex].id}`} > <ShopItem item={shopList[currentIndex]} row={rowIndex} column={columnIndex} /></Link>
            </div>      
        }
        </>              
      )
    },[shopList,error]);
   
        
    return (                                        
    <div className="shop-container">
    { isLoading && <div> Loading...</div> }
    { error && <div>{ error }</div> }
    {shopList && shopList.length>0 &&
        <AutoSizer>
            {({ height, width }) => (
                <Grid
                columnCount={totalColumns}
                columnWidth={width/3}
                height={height}
                rowCount={Math.ceil(shopList.length/3)}
                rowHeight={350}
                width={width}
                >
                    {Cell}
                </Grid> 
            )}
         </AutoSizer>                
        }
        
    </div>
    )
}

export default ShopList
