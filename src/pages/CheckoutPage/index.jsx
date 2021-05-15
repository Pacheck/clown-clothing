import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems, selectCartTotal } from "../../redux/selectors/cart";

import CheckoutItem from "../../components/CheckoutItem";

import StripeButton from "../../components/StripeButton";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Text,
  TotalContainer,
  TestWarning,
} from "./styles";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <Text>Product</Text>
        </HeaderBlock>
        <HeaderBlock>
          <Text>Description</Text>
        </HeaderBlock>
        <HeaderBlock>
          <Text>Quantity</Text>
        </HeaderBlock>
        <HeaderBlock>
          <Text>Price</Text>
        </HeaderBlock>
        <HeaderBlock>
          <Text>Remove</Text>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((item) => (
        <CheckoutItem cartItem={item} key={item.id} />
      ))}
      <TotalContainer>
        <Text>TOTAL: ${total}</Text>
      </TotalContainer>
      <TestWarning>
        *Please use this credit card to test*
        <br />
        5555 5555 5555 4444 Exp: 10/22 CVC: 123
      </TestWarning>
      <StripeButton price={total} />
    </CheckoutContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
