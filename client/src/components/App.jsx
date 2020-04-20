import React from 'react';
import axios from 'axios';
import Product from './Product';
import "@babel/polyfill";

const productUrl = `http://ec2-54-67-66-218.us-west-1.compute.amazonaws.com:8081/products/`;
const localProductUrl = `http://localhost:8081/products/`;
const imageUrl = `http://ec2-50-18-28-6.us-west-1.compute.amazonaws.com:8000/product/`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsData: [],
      images: []
    };
  }

  componentDidMount = async () => {
    const productNum = document.location.pathname.split('/')[2];
    let data = await this.getProductData(productNum);

    this.setState({
      productsData: [],
      images: []
    }, () => {
      this.setState({
        productsData: data[0].data,
        images: data[1]
      })
    })
  }

  getProductData = async (productNum) => {
    const product = await axios.get(localProductUrl + productNum);
    console.log(product, 'line 36')
    const productNums = product.data.recProducts.map((product => product.productNumber));

    const image1 = await axios.get(imageUrl + productNums[0]);
    const image2 = await axios.get(imageUrl + productNums[1]);
    const image3 = await axios.get(imageUrl + productNums[2]);
    const image4 = await axios.get(imageUrl + productNums[3]);
    const image5 = await axios.get(imageUrl + productNums[4]);
    const image6 = await axios.get(imageUrl + productNums[5]);

    let imageUrls = [
      image1.data.imageUrls[0],
      image2.data.imageUrls[0],
      image3.data.imageUrls[0],
      image4.data.imageUrls[0],
      image5.data.imageUrls[0],
      image6.data.imageUrls[0]
    ];

    return [product, imageUrls]
  }

  getProduct = (idx) => {
    return this.state.productsData.recProducts === undefined
      ? ""
      : this.state.productsData.recProducts[idx];
  }

  getImage = (idx) => {
    return this.state.images[idx] === undefined
      ? "https://media.giphy.com/media/swhRkVYLJDrCE/giphy.gif"
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
