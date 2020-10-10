import React, { Component } from 'react';
import ProductDetail from './ProductDetail';
import Title from './Title'

class ProductList extends Component {
  state={
    product: []
  }

  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <div className="row">
              <Title name='Freedom Path' title='Books'/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

}

export default ProductList;
