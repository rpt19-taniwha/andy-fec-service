import React from 'react';
import axios from 'axios';
import Product from './Product';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsData: ''
    };
  }

  componentDidMount() {
    const productNum = document.location.pathname.split('/')[2];

    axios.get(`http://ec2-54-183-253-155.us-west-1.compute.amazonaws.com:8081/products/${productNum}`).then(
      (serverData) => {
        this.setState({
          productsData: serverData.data
        });
      }
    );
  }

  getProduct(idx) {
    return this.state.productsData.recProducts === undefined
      ? ''
      : this.state.productsData.recProducts[idx];
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
            <Product data={this.getProduct(0)}></Product>
            <Product data={this.getProduct(1)}></Product>
            <Product data={this.getProduct(2)}></Product>
            <Product data={this.getProduct(3)}></Product>
            <Product data={this.getProduct(4)}></Product>
            <Product data={this.getProduct(5)}></Product>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
