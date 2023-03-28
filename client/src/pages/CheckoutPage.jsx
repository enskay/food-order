import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";
import { checkoutOrderAction } from "../actions/orderActions";

function CheckoutPage({ toplamfiyat }) {
  const dispatch = useDispatch();

  const tokenHandler = (token) => {
    console.log(token);
    dispatch(checkoutOrderAction(token, toplamfiyat));
  };

  return (
    <div>
      <StripeCheckout
        amount={toplamfiyat * 100}
        shippingAddress
        billingAddress
        token={tokenHandler}
        stripeKey="pk_test_51MV9VIAEY249VO0yq3SGbP130P9341uHf9LRtAZ0DVw27oZ5c1w2pWq83cRBUuzDLDxYUaXGq4i2De2pv5Gnxkrw00m21s3RGJ"
        currency="TRY"
      >
        <button className="btn btn-outline-danger my-3 w-25">
          Ödemeye Devam Et
        </button>
      </StripeCheckout>
    </div>
  );
}

export default CheckoutPage;
