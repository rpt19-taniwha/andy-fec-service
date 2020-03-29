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
    axios(`http://localhost:8080/youmayalsolike/549504785`).then(
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
      <div>
        <Product data={this.getProduct(0)}></Product>
        <Product data={this.getProduct(1)}></Product>
        <Product data={this.getProduct(2)}></Product>
        <Product data={this.getProduct(3)}></Product>
        <Product data={this.getProduct(4)}></Product>
      </div>
    );
  }
}

export default App;
