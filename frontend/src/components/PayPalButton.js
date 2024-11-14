// This is a dummy PayPal test button for demonstration purposes only.
// To integrate PayPal Checkout properly, follow the official documentation on their site.
//
// Basic workflow:
// 1. The button below creates an order and sends it to the PayPal server.
// 2. The Django backend connects to the PayPal API to verify the payment status of the order.
// 3. A Django model is required to store and manage orders/payments for proper tracking and functionality.
// 4. An email server may be set up to send the purchased beats and licenses to the buyer after payment confirmation.
//
// Note: This setup is for testing and showcasing the button, not for production use.

import React, { useEffect } from 'react';

function PayPalButton() {
 useEffect(() => {
  const script = document.createElement('script');
  script.src = 'https://www.paypal.com/sdk/js?client-id=test';
  script.onload = () => {
   window.paypal.Buttons({
    style: {
     height: 35,
    },
   }).render('#paypal-button-container');
  };
  document.body.appendChild(script);
 }, []);

 return <div id="paypal-button-container" className="mt-7"></div>;
}

export default PayPalButton;
