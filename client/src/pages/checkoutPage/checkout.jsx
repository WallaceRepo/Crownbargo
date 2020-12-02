import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import CheckoutItem from  '../../component/checkout-item/checkout-item';
import StripeCheckoutButton from '../../component/stripe-button/stripe-button.component';
import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer
  } from './checkout.styles';
const CheckoutPage = ({ cartItems, totalValue }) => (
    <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>TOTAL: ${totalValue}</TotalContainer>
    <WarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </WarningContainer>
    <StripeCheckoutButton price={totalValue} />
  </CheckoutPageContainer>
       
    );


const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems,
   totalValue: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);