import stripe from "../services/stripe.js";

export const createPaymentIntent = async (req, res) => {
  if (!stripe) {
    return res.status(503).json({
      error: "Payments are not configured. Set STRIPE_SECRET_KEY in api/.env.",
    });
  }

  try {
    const { amount, currency } = req.body; 
    // amount in cents -> $10 = 1000
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: currency || "usd",
      automatic_payment_methods: { enabled: true },
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Payment error:", error);
    res.status(500).json({ error: error.message });
  }
};
