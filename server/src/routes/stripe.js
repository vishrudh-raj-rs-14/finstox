const router = require("express").Router();
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET);

router.post("/api/create-checkout-session", async (req, res) => {
  const { products } = req.body;

  const lineItems = products.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.option,
        //images: [product.imgdata],
      },
      unit_amount: product.price * 100,
    },
    quantity: product.qnty,
  }));


  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card","gpay"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/pages/authentication/sign-in",
    cancel_url: "http://localhost:3000",
  });
  console.log(session.id);
  res.json({ id: session.id });
});

module.exports = router;