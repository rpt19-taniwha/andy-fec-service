import React from 'react';

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
    <div>
      <ul>
        <li>Name: {productName}</li>
        <li>Price: {price}</li>
        <li>Picture: {picture}</li>
        <li>Seller Name: {sellerName}</li>
        <li>Shipping: {shipping}</li>
        <li>Catagory: {catagory}</li>
      </ul>
    </div>
  );
};

export default Product;
