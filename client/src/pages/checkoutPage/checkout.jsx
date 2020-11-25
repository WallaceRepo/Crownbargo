import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import CheckoutItem from  '../../component/checkout-item/checkout-item';
import './checkout.style.scss';
import StripeCheckoutButton from '../../component/stripe-button/stripe-button.component';

const CheckoutPage = ({ cartItems, totalValue }) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Qauntity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
               {cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    ))}
             <div className = 'total'>
                <div className='test-warning'>*Please use the following test credit card for payment
                <br />
                4242 4242 4242 4242 - Exp date: Any future date. CVC: Any 3 digits
                </div>
                 <span>TOTAL: ${totalValue}</span>
             </div>
               <StripeCheckoutButton price = {totalValue } />
        </div>
       
    );
}

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems,
   totalValue: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);