import React, { useState } from "react";
import { getFirestore, doc, setDoc } from "firebase/firestore"; // Firestore for saving orders
import axios from "axios"; // For API calls (like creating an order on your backend)

const Payment = () => {
  const [paymentStatus, setPaymentStatus] = useState("");

  // Firestore setup
  const db = getFirestore();

  const handlePayment = async () => {
    try {
      // Step 1: Create an order with Razorpay (you might want to create this via your backend)
      const orderResponse = await axios.post("/razorpay-order", {
        amount: 50000, // Example amount in paise (500.00 INR)
        currency: "INR",
      });

      const { id: order_id, amount, currency } = orderResponse.data;

      // Step 2: Open Razorpay Checkout
      const options = {
        key: "your_razorpay_key_id",  // Replace with your Razorpay Key ID
        amount: amount,
        currency: currency,
        name: "Your Company",
        description: "Test Transaction",
        order_id: order_id,
        handler: async (response) => {
          const payment_id = response.razorpay_payment_id;

          // Step 3: Save order details in Firestore
          await setDoc(doc(db, "orders", order_id), {
            order_id: order_id,
            payment_id: payment_id,
            amount: amount / 100, // Convert paise to INR
            currency: currency,
            status: "success",
          });

          setPaymentStatus("Payment Successful!");
        },
        prefill: {
          name: "John Doe",
          email: "john.doe@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#F37254",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment failed", error);
      setPaymentStatus("Payment Failed.");
    }
  };

  return (
    <div>
      <h2>Razorpay Payment</h2>
      <button onClick={handlePayment}>Pay with Razorpay</button>
      <p>{paymentStatus}</p>
    </div>
  );
};

export default Payment;
