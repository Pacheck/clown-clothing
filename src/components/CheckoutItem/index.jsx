import React from "react";

import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/actions/cart.actions";

import {
  CheckoutItemContainer,
  ImageContainer,
  CheckoutImage,
  Arrow,
  QuantityContainer,
  DisplayInfo,
  RemoveButton,
} from "./styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const handleRemoveItem = () => clearItem(cartItem);

  const handleIncreaseQuantity = () => addItem(cartItem);

  const handleDecreaseQuantity = () => removeItem(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <CheckoutImage src={imageUrl} alt="item" />
      </ImageContainer>
      <DisplayInfo>{name}</DisplayInfo>
      <QuantityContainer>
        <Arrow onClick={handleDecreaseQuantity}>&#10094;</Arrow>
        <DisplayInfo value>{quantity}</DisplayInfo>
        <Arrow onClick={handleIncreaseQuantity}>&#10095;</Arrow>
      </QuantityContainer>
      <DisplayInfo>${price}</DisplayInfo>
      <RemoveButton onClick={handleRemoveItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
