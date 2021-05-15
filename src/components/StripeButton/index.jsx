import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IqiTpGSh4ATMRfx021AlLvWJjJZSFUnIpsByu6ZVQRi7dU94OxGh5EVS0RqNnHypvAqPrGg3horSaq1Zbf6UYvp00SLZiIuVu";

  const handleToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Clown Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={handleToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
