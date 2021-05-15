import React from "react";

import {
  CartItemContainer,
  ItemDetailsContainer,
  ItemText,
  ItemImage,
} from "./styles";

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
  return (
    <CartItemContainer className="cart-item">
      <ItemImage src={imageUrl} alt="item" />
      <ItemDetailsContainer className="item-details">
        <ItemText Name>{name}</ItemText>
        <ItemText price>
          {quantity} x ${price}
        </ItemText>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
