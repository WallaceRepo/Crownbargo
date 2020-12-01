import React from 'react';
import { CartItemContainer, ItemDetailsContainer } from './cart-dropdown-items.styles';

const CartDropdownItem = ({ item: { imageUrl, price, name, quantity }}) =>{
    return (
      <CartItemContainer>
        <img src={imageUrl} alt='item' />
        <ItemDetailsContainer>
          <span>{name}</span>
          <span>{`${quantity} x $${price}`}</span>
        </ItemDetailsContainer>
      </CartItemContainer>
    );
  };

export default CartDropdownItem;