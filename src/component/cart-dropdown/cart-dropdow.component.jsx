import React from "react";
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.style.scss';
import CartDropdownItem from '../cart-dropdown-item/cart-dropdown-item';
import { connect } from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  
    return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ? (
                 cartItems.map(cartItem =>(<CartDropdownItem key = {cartItem.id } item = {cartItem } />
                 ))   
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )
            }
        </div>
            <CustomButton 
            onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
              }}
          >GO TO CHECKOUT</CustomButton>
    </div>
 )};
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});
  
  export default withRouter(connect(mapStateToProps)(CartDropdown));