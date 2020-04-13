import React from 'react';
import axios from 'axios';
import Product from './Product';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsData: [],
      images: []
    };
  }

  componentDidMount = () => {
    const productNum = document.location.pathname.split('/')[2];

    this.getProductData(productNum)
      .then(product => {
        this.setState({
          productsData: product.data
        })

        const productNums = product.data.recProducts.map((product => product.productNumber));
        return productNums
      })
      .then(productNums => {
        return this.getImageData(productNums)
      })
      .then(imageUrls => {
        this.setState({
          images: imageUrls
        })
      })
      .catch(err => {
        console.log('error', err)
      })
  }

  getProductData = (productNum) => {
    return axios.get(`http://ec2-18-144-87-34.us-west-1.compute.amazonaws.com:8081/products/${productNum}`)
  }

  getImageData = (productNums) => {
    const imageUrls = [];

    for (let num of productNums) {
      axios.get(`http://ec2-50-18-28-6.us-west-1.compute.amazonaws.com:8000/product/${num}`)
        .then(images => {
          imageUrls.push(images.data.imageUrls[0]);
        })
    }

    return imageUrls;
  }

  getProduct = (idx) => {
    return this.state.productsData.recProducts === undefined
      ? ""
      : this.state.productsData.recProducts[idx];
  }

  getImage = (idx) => {
    return this.state.images[idx] === undefined
      ? ""
      : this.state.images[idx];
  }

  render() {
    return (
      <div className="wrapper">
        <div className="inner-wrapper">
          <div className="title">
            <div className="title-text">You may also like</div>
            <div className="shop-more">Shop more similar items<div className="arrow">&#8680;</div></div>
          </div>
          <div className="products">
            <Product data={this.getProduct(0)} image={this.getImage(0)}></Product>
            <Product data={this.getProduct(1)} image={this.getImage(1)}></Product>
            <Product data={this.getProduct(2)} image={this.getImage(2)}></Product>
            <Product data={this.getProduct(3)} image={this.getImage(3)}></Product>
            <Product data={this.getProduct(4)} image={this.getImage(4)}></Product>
            <Product data={this.getProduct(5)} image={this.getImage(5)}></Product>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
