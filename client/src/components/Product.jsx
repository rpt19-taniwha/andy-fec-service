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


  // Temp helper func to make sure if lorem picsum link is broken we still get a image to render
  // Need to eventually get image url from image service
  const imageExists = (url) => {
    let newUrl = `https://i.picsum.photos/id/${Math.floor(Math.random() * 300 + 200)}/220/165.jpg`
    let image = new Image();
    image.src = url;
    if (!image.complete) {
      return newUrl;
    }
    else if (image.height === 0) {
      return newUrl;
    }
    return url;
  }
  const image = imageExists(picture);

  return (
    <div className="card">
      <img src={image} alt="picture"></img>
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
