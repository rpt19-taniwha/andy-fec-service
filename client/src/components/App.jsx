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
    const productNum = window.location.pathname.split('/')[2] || 549504785;

    axios(`http://localhost:8080/products/${productNum}`).then(
      (serverData) => {
        console.log(serverData)
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
            <div className="shop-more">Shop more similar items <i className='fas fa-arrow-right arrow'></i></div>
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
