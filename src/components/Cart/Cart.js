import React, { Component } from 'react';
// relative path so using 2 dots
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from "./EmptyCart";
import {BookConsumer} from "../../context";
import CartList from './CartList';
import CartTotals from './CartTotals';

class Cart extends Component {

  render() {
    return (
      <section>
        <BookConsumer>
          {value => {
            const {cart} = value
            if(cart.length > 0){
              return(
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns/>
                  {/*passing value as props; now we've access to all the items in the value*/}
                  <CartList value={value}/>
                  <CartTotals value={value}/>
                </React.Fragment>
              )
            }else{
              return  <EmptyCart/>;
            }
           }}

        </BookConsumer>
      </section>
    );
  }

}

export default Cart;
