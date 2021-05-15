import React from "react";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/selectors/cart";
import { toggleCartHidden } from "../../redux/actions/cart.actions";

import CartItem from "../CartItem";
import CustomButton from "../CustomButton";

import { CartDropdownContainer, CartItems, EmptyMessage } from "./styles";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const handleCheckout = () => {
    history.push("/checkout");
    dispatch(toggleCartHidden());
  };

  return (
    <CartDropdownContainer className="cart-dropdown">
      <CartItems className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMessage className="empty-message">
            Your cart is empty
          </EmptyMessage>
        )}
      </CartItems>
      <CustomButton onClick={handleCheckout}>GO TO CHECKOUT</CustomButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
