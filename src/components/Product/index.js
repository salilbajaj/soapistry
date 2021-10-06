import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../custom-hooks/useFetch";
import { BASEURL as baseUrl } from "../../utils/constant";
import "./style.css";
import { BsStarFill } from "react-icons/bs";
import { BiRupee, BiPlus, BiMinus } from "react-icons/bi";
import { AppContext } from "../../context/AppContext";
import Produce from "immer";
import Notification from "../Notification";
const Product = () => {
  let { productID } = useParams();
  const [qty, setQty] = useState(0);
  const [notify, setNotify] = useState({});
  const { data: productDetail, isLoading, error } = useFetch(
    `${baseUrl}/products/${productID}`
  );
  const [cartState, setCartState] = useContext(AppContext);
  const handleCart = () => {
    let newProduct = {
      product: productDetail,
      qty: qty,
    };
    const newCartState = Produce(cartState, (draftState) => {
      if (cartState?.productsInCart?.length) {
        cartState.productsInCart.forEach((item, index) => {
          if (item.product.id === productDetail.id) {
            draftState.productsInCart[index].qty = newProduct.qty;
          }
          if (
            item.product.id !== productDetail.id &&
            index === cartState.productsInCart.length - 1
          ) {
            draftState.productsInCart.push(newProduct);
          }
        });
      } else {
        draftState.productsInCart.push(newProduct);
      }
      setNotify(
        Produce(notify, (draftState) => {
          console.log("kjbdsk");
          draftState[productID] = true;
        })
      );
    });
    setCartState(newCartState);
  };
  const closeNotification = (id) => {
    setNotify(
      Produce(notify, (draftState) => {
        draftState[productID] = false;
      })
    );
  };
  useEffect(() => {
    console.log(notify);
  });

  return (
    <>
      {console.log(notify[productID])}
      {productDetail && (
        <div className="product-detail-container">
          {notify[productID] && (
            <Notification id={productID} onClose={closeNotification}>
              {productDetail?.title} has been added!
            </Notification>
          )}
          <div className="product-img-container">
            <img src={productDetail?.image} alt={productDetail?.title} />
          </div>
          <div className="prdouct-info-container">
            <h2 className="title primary-text-color">{productDetail?.title}</h2>
            <h5 className="description">{productDetail?.description}</h5>
            <div className="price-rating">
              <h4>
                Price: <BiRupee />
                {productDetail?.price}
              </h4>
              <h4>
                {" "}
                {productDetail?.rating?.rate} <BsStarFill /> (
                {productDetail?.rating?.count})
              </h4>
            </div>
            <div className="qty-cart-cont">
              <div className="product-qty">
                <div
                  onClick={() =>
                    setQty((prevQty) => (prevQty <= 0 ? 0 : prevQty - 1))
                  }
                >
                  <BiMinus />
                </div>
                <div>{qty}</div>
                <div onClick={() => setQty((prevQty) => prevQty + 1)}>
                  {" "}
                  <BiPlus />
                </div>
              </div>
              <div className="add-btn">
                <button
                  className="btn"
                  disabled={qty <= 0 ? true : false}
                  onClick={handleCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {error && <div>error</div>}
    </>
  );
};

export default Product;
