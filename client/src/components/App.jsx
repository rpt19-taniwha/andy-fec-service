import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsData: []
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

  render() {
    return <div>{this.state.productsData.productName}</div>;
  }
}

export default App;
