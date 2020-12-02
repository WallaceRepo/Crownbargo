import React from "react";
import CustomButton from '../custom-button/custom-button.component';
import CartDropdownItem from '../cart-dropdown-item/cart-dropdown-item';
import { connect } from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.action';

import {
    CartDropdownContainer,
    EmptyMessageContainer,
    CartItemsContainer
  } from './cart-dropdown.styled';
const CartDropdown = ({ cartItems, history, dispatch }) => {
  
    return (
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length ? (
                 cartItems.map(cartItem =>(<CartDropdownItem key = {cartItem.id } item = {cartItem } />
                 ))   
                ) : (
                    <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                )
            }
         </CartItemsContainer>
            <CustomButton 
            onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
              }}
          >GO TO CHECKOUT</CustomButton>
      </CartDropdownContainer>
 )};
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});
  
  export default withRouter(connect(mapStateToProps)(CartDropdown));