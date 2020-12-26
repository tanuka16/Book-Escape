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
    modalProduct: detailProduct,
    // in cart properties, initailized to 0
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
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
      },
      () => {
        this.addTotals()                          //loop through all item in the cart by calling the addTotals() function
      }
    );
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

  // methods for in cart components
  //this is increment method
  increment = (id) => {
    let tempCart = [...this.state.cart]
    const selectedProduct = tempCart.find(item => item.id === id)

    const index = tempCart.indexOf(selectedProduct)
    const product = tempCart[index]           //access to the specific product

    product.count = product.count + 1
    product.total = product.count * product.price

    // looking for the call back function
    this.setState(() => {
      return {
        cart: [...tempCart]}                 //change the product total
      }, () => {
        this.addTotals()                     //its important to run this as a call back function, so the total will be counted exactly when they're changed
      })

  }
  // this is increment method
  decrement = (id) => {
    let tempCart = [...this.state.cart]
    const selectedProduct = tempCart.find(item => item.id === id)

    const index = tempCart.indexOf(selectedProduct)
    const product = tempCart[index]

    product.count = product.count - 1

    if(product.count === 0){
      this.removeItem(id)
    }else {
      product.total = product.count * product.price

      this.setState(() => {
        return {
          cart: [...tempCart]}                 //change the product total
        }, () => {
          this.addTotals()                     //its important to run this as a call back function, so the total will be counted exactly when they're changed
        })
    }
  }
  // remove method; need the id so we can work with the value
  removeItem = (id) => {
    let tempProducts = [...this.state.products]
    let tempCart = [...this.state.cart]

    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removeProduct = tempProducts[index]
    removeProduct.inCart = false;
    removeProduct.count = 0;
    removeProduct.total = 0;

    this.setState(
      ()=> {
        return{
          cart: [...tempCart],
          products: [...tempProducts]
        }
      }
    )

  }
  // cart clear method
  clearCart = () =>{
    this.setState(() => {
      return {cart: []}
    }, () => {
      //this will give new copies of all the objects (products) so setting it to default
      this.setProducts()
      this.addTotals()                //everytime we remove item from the cart, it will be move back to cart
    })


  }

  addTotals = () =>{
    let subTotal = 0
    this.state.cart.map(item => (subTotal += item.total))
    //add tax -> 10%
    let tempTax = subTotal * 0.1
    let tax = parseFloat(tempTax.toFixed(2))
    let total = subTotal + tax
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      }
    })
  }

  render() {
    return (
      <BookContext.Provider
      // this.state is included in the value
      value={{
        ...this.state,
        handleDetail:this.handleDetail,
        addToCart:this.addToCart,
        openModal:this.openModal,
        closeModal:this.closeModal,
        // get the methods in a value for the in cart component
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart
      }}>
        {this.props.children}
      </BookContext.Provider>
    );
  }

}

const BookConsumer = BookContext.Consumer;

export {BookProvider, BookConsumer};
