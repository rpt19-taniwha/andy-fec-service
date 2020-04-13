import React from 'react';

const Product = (props) => {

  const {
    productName,
    price,
    picture,
    sellerName,
    shipping
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
