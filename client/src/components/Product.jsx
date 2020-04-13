import React from 'react';
import axios from 'axios';

const Product = (props) => {
  const {
    productName,
    price,
    picture,
    sellerName,
    shipping,
    catagory
  } = props.data;

  return (
    <div className="cards">
      <img className="rec-product-pic" src={picture} alt="picture"></img>
      <div className="content">
        <p>{productName}</p>
        <p className="seller-name">{sellerName}</p>
        <p className="price">{price}</p>
        <p className="shipping">{shipping ? 'Free shipping eligble' : ''}</p>
      </div>
    </div>
  );
};

export default Product;
