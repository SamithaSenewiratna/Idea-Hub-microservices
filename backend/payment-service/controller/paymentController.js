const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const Payment = require('../models/Payment');

exports.createPaymentIntent = async (req, res) => {
  try {
    const { amount, currency = 'usd', userId } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      automatic_payment_methods: { enabled: true },
    });

    // Save to MongoDB
    const payment = new Payment({
      userId,
      amount,
      currency,
      status: 'pending',
      paymentIntentId: paymentIntent.id
    });
    await payment.save();

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      paymentId: payment._id
    });
  } catch (error) {
    console.error('Payment Intent Error:', error.message);
    res.status(500).json({ error: error.message });
  }
};
