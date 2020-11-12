import React, { Component } from 'react';
import style from 'styled-components';
import {BookConsumer} from '../context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';


class Modal extends Component {

  render() {
    return (
      <BookConsumer>
        {(value) => {
          const {modalOpen, closeModal} = value;
          const {img, title, price} = value.modalProduct;

          if (!modalOpen) {
            return null
          }else{
            return (
              <ModalContainer>
               <div className="container">
                 <div className="row">
                   <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                      <h5>item added to the cart</h5>
                   </div>
                 </div>
               </div>
            </ModalContainer>
          );
          }
        }}
      </BookConsumer>
    );
  }

}
const ModalContainer = style.div`

`



export default Modal;
