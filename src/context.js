import React, { Component } from 'react';
import {storeProducts, detailProduct} from './bookdata';

// context api
// create a new context obj, because the api comes from react; context obj comes with 2 components (1)provider, provide all the info for all the application
// & (2)comsumer
const BookContext = React.createContext();
//Provider
//Consumer


class BookProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct
  }
  handleDetail = () => {
    console.log('hello from detail');
  }
  addToCart = () => {
    console.log('hello from cart');
  }
  render() {
    return (
      <BookContext.Provider value={{
        ...this.state,
        handleDetail:this.handleDetail,
        addToCart:this.addToCart
      }}>
        {this.props.children}
      </BookContext.Provider>
    );
  }

}

const BookConsumer = BookContext.Consumer;

export {BookProvider, BookConsumer};
