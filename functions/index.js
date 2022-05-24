const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

// API

// -App config
const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
app.options("*", cors());

// -API routes
app.get("/", (request, response) => {
  response.status(200).send("HELLO WORLD");
});

app.post("/payments/create", async (request, response) => {
  const total = request.query;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 2000,
    currency: "usd",
    payment_method_types: ["card"],
  });
  response.status(201).send(paymentIntent.client_secret);
});

// app.post("/payments/create", async (request, response) => {
//   const total = request.query.total;
//   console.log("Payment Request Received", total);

//   const paymentIntent = await stripe.PaymentIntents.create({
//     amount: total,
//     currency: "usd",
//   });

//   response.status(201).send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });

// -Listens
exports.api = functions.https.onRequest(app);
