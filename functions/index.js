const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

// API

// -App config
const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// -API routes
app.post("/", (request, response) => {
  response.status(200).send("HELLO WORLD");
});

app.post("/payments", async (request, response) => {
  console.log(123123);
  response.status(200).send("1");
  //   const total = 0;
  //   console.log("Payment Request Received", total);

  //   const paymentIntent = await stripe.paymentIntents.create({
  //     amount: total,
  //     currency: "usd",
  //   });
  //   response.status(201).send({
  //     clientSecret: paymentIntent.client_secret,
  //   });
});

// app.post("/payments/create", async (request, response) => {
//   const total = request.query.total;
//   console.log("Payment Request Received", total);

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: total,
//     currency: "usd",
//   });

//   response.status(201).send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });

// -Listens
exports.api = functions.https.onRequest(app);
