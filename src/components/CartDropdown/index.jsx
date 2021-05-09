import React from "react";
import { connect } from "react-redux";

import { selectCartItemsCount } from "../../redux/selectors/cart";

import CartItem from "../CartItem";
import CustomButton from "../CustomButton";

import "./index.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItemsCount(state),
});

export default connect(mapStateToProps)(CartDropdown);
