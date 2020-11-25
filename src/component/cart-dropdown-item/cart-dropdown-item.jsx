import React from 'react';
import './cart-item-dropdown.style.scss';

const CartDropdownItem = ({ item: { imageUrl, price, name, quantity }}) => (
    <div className='cart-item'>
        <img src = { imageUrl} alt='item' />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
        </div>
    </div>
);

export default CartDropdownItem;