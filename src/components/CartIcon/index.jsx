import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/actions/cart.actions";

import { selectCartItemsCount } from "../../redux/selectors/cart";

import { CartIconContainer, ItemCount, ShoppingIcon } from "./styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <ItemCount className="item-count">{itemCount}</ItemCount>
  </CartIconContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
