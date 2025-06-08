import api from "../api/api";

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const processRazorpayPayment = async (amount, currency, userEmail , userPhone) => {
  console.log(process.env.REACT_APP_RAZORPAY_KEY,'00001')
  try {
    const response = await api.post("/api/payments/create-razorpay-order", {
      amount,
      currency,
    });

    if (!response || !response.id) {
      throw new Error("Failed to create order");
    }

    const orderId = response.id;

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      throw new Error("Failed to load Razorpay SDK");
    }

    return new Promise((resolve, reject) => {
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY,
        amount: amount * 100,
        currency,
        name: "Your Company",
        description: "Purchase",
        order_id: orderId,
        handler: async (response) => {
          try {
            console.log("Payment Response:", response);

            if (!response.razorpay_payment_id || !response.razorpay_order_id || !response.razorpay_signature) {
              return reject(new Error("Invalid payment response"));
            }

            const verifyResponse = await api.post("/api/payments/verify-razorpay-payment", {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            });
            resolve(verifyResponse); // ✅ Verification response return ho raha hai
          } catch (error) {
            console.error("Payment verification failed:", error);
            reject(error);
          }
        },
        prefill: {
          email: userEmail,
          contact: userPhone,
        },
        theme: {
          color: "#253243",
        },
        modal: {
          // 🛑 This handles when user closes/cancels the Razorpay popup
          ondismiss: () => {
            reject(new Error("Payment cancelled by user"));
          },
        }
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    });
  } catch (error) {
    console.error("Payment process failed:", error);
    throw error;
  }
};
