import React, { useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  CardElement,
} from "@stripe/react-stripe-js";

import useResponsiveFontSize from "./useResponsiveFontSize";
import axios from "axios";
import { Alert } from "reactstrap";

const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    [fontSize]
  );

  return options;
};

const SplitForm = (amount) => {
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const UserEmail = localStorage.getItem("UserEmail");

  // console.log("amount", amount.amount);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "https://mystockaibackend.azurewebsites.net/payment",
          {
            amount: amount.amount * 100,
            id: id,
            mailid: UserEmail,
          }
        );
        // console.log("res", response);

        if (response.data.Sucess) {
          // console.log("Successful payment");
          setMessage(response.data.Message);
          setSuccess(true);
          // window.location.reload();
        }
      } catch (error) {
        alert(error.message);
        console.log("Error", error);
      }
    } else {
      if (error && error.message) {
        alert(error.message);
        console.log(error.message);
      }
    }

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
  };

  return (
    <div className="payment">
      {success ? (
        message === "Payment Sucessful" ? (
          <Alert color="success">{message}</Alert>
        ) : (

          <Alert color="error">{message}</Alert>
        )
      ) : (
        // <div>
        //   <h4 style={{color:""}}>{message}</h4>
        // </div>
        <form onSubmit={handleSubmit} className="Demo">
          <label>
            Card number
            <CardNumberElement options={options} />
          </label>
          <label>
            Expiration date
            <CardExpiryElement options={options} />
          </label>
          <label>
            CVC
            <CardCvcElement options={options} />
          </label>
          <button type="submit" disabled={!stripe}>
            Pay
          </button>
        </form>
      )}
    </div>
  );
};

export default SplitForm;
