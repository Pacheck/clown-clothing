import React from "react";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/selectors/cart";
import { toggleCartHidden } from "../../redux/actions/cart.actions";

import CartItem from "../CartItem";
import CustomButton from "../CustomButton";

import "./index.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const handleCheckout = () => {
    history.push("/checkout");
    dispatch(toggleCartHidden());
  };
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={handleCheckout}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
