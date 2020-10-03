import React, { Component } from 'react';
import ProductDetail from './ProductDetail'

class ProductList extends Component {

  render() {
    return (
      <div>
        <h3>Hello from product list</h3>
        <ProductDetail/>
      </div>
    );
  }

}

export default ProductList;
