import React, { Component } from 'react';
import ProductDetail from './ProductDetail';
import Title from './Title'
// import {storeProducts} from '../bookdata';
//importing BookConsumer, since its the variable i created in our context.js
import {BookConsumer} from '../context';

class ProductList extends Component {
  /* state={
  //   product: storeProducts
   }
   */
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name='Freedom Path' title='Books'/>

            <div className="row">
              <BookConsumer>
                {value => {
                  return value.products.map(product =>{
                    return <ProductDetail key={product.id} product={product}/>
                  })
                }}
              </BookConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

}

export default ProductList;
