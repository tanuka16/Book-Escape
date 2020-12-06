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
    products: [],
    detailProduct: detailProduct,
    cart: [],
    //model properties are for the product popup
    modelOpen: false,
    modalProduct: detailProduct
  }

  componentDidMount(){
    this.setProducts();
  }


  setProducts = () =>{
    let tempProducts= [];
    storeProducts.forEach(item =>{
      const singleItem = {...item};
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts};
    })
  }

  //utility method that gets the id
  getItem = (id) => {
    const product = this.state.products.find(item => item.id === id)
    return product;
  }

  handleDetail = (id) => {
    const product = this.getItem(id)
    this.setState(() => {
      return {detailProduct:product}
    })
  }
  addToCart = (id) => {
      let tempProducts = [...this.state.products]
      const index = tempProducts.indexOf(this.getItem(id));
      const product = tempProducts[index];
      product.inCart = true;
      product.count = 1;
      const price = product.price;
      product.total = price;
    this.setState(() => {
      return {products: tempProducts, cart:[...this.state.cart,
      product]}
      }, () => {console.log(this.state);
    });
  };
  //call the openModel everytime we click on the icon
  // then we'll pass the specific product with specific id into a modalProduct
  openModal = id =>{
    const product = this.getItem(id);
    this.setState(() => {
      return {modalProduct:product, modalOpen:true}
    })
  }
  closeModal = () =>{
    this.setState(() => {
      return {modalOpen:false}
    })
  }
  render() {
    return (
      <BookContext.Provider
      value={{
        ...this.state,
        handleDetail:this.handleDetail,
        addToCart:this.addToCart,
        openModal:this.openModal,
        closeModal:this.closeModal
      }}>
        {this.props.children}
      </BookContext.Provider>
    );
  }

}

const BookConsumer = BookContext.Consumer;

export {BookProvider, BookConsumer};
