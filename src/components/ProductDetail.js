import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';

class ProductDetail extends Component {

  render() {
    /* object */
    const {id, title, img, price, inCart} = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div className="img-container p-5" onClick={()=>console.log('clicked img container')}>

            <Link to="/details">
              <img src={img} alt="product-book" className="card-img-top"/>
            </Link>
            <button
              className="cart-btn"
              disabled={inCart ? true:false}
              onClick={()=>{console.log('added to the cart');
              }}
            >

            {inCart ? (
              <p className="text-capitalize mb-0" disabled>
              {" "}
              in Cart
              </p>):(<i className="fas fa-cart-plus"/>
            )}
            </button>

          </div>
          {/* card footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center md-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
            <p></p>

          </div>
        </div>
      </ProductWrapper>
    );
  }

}

const ProductWrapper = styled.div``


export default ProductDetail;
