import React, { Component } from 'react';
import styled from 'styled-components';
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
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  buttom: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;



export default Modal;