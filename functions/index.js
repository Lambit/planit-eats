const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const { SECRET_KEY, STRIPE_PUB_KEY, BASE_URL, WEB_SIG, WEB_HOOK } = require("./config");

console.log("SECRET_KEY:".red, SECRET_KEY);

const stripe = require("stripe")(SECRET_KEY);

//--------create stripe user-------------
exports.checkoutCustomer = functions.https.onRequest(async (req, res) =>{
  const customer = await stripe.customers.create({
    address: { 
      city: req.body.city,
      country: "US",
      line1: req.body.line1,
      line2: req.body.line2,
      postal_code: req.body.postal_code,
      state: req.body.state
    },
    description: req.body.description,
    email: req.body.email,
    name: req.body.name,
    phone: req.body.phone,
    shipping: {
      address: { 
        city: req.body.city,
        country: "US",
        line1: req.body.line1,
        line2: req.body.line2,
        postal_code: req.body.postal_code,
        state: req.body.state
      },
      name: req.body.name,
      phone: req.body.phone
    },
  })
  res.send({customer});
});


//--------create stripe user-------------
exports.customerEmailZip = functions.https.onRequest(async (req, res) =>{
  const customer = await stripe.customers.create({
    address: { 
      country: "US",
      postal_code: req.body.postal_code,
    },
    description: req.body.description,
    email: req.body.email,
  })
  res.send({customer});
});

//--------create stripe user-------------
exports.updateCustomer = functions.https.onRequest(async (req, res) =>{
  const customer = await stripe.customers.update({
    customer: req.body.customer,
    address: { 
      city: req.body.city,
      country: "US",
      line1: req.body.line1,
      line2: req.body.line2,
      postal_code: req.body.postal_code,
      state: req.body.state
    },
    description: req.body.description,
    email: req.body.email,
    name: req.body.name,
    phone: req.body.phone,
    shipping: {
      address: { 
        city: req.body.city,
        country: "US",
        line1: req.body.line1,
        line2: req.body.line2,
        postal_code: req.body.postal_code,
        state: req.body.state
      },
      name: req.body.name,
      phone: req.body.phone
    },
  })
  res.send({customer});
});



//--------create stripe user-------------
exports.createStripeCustomer = functions.auth.user().onCreate(async (user) => {
  const customer = await stripe.customers.create({
    email: user.email,
    metadata: { firebaseUID: user.uid },
  });
  await admin.firestore().collection('customer').doc(user.uid).set({
    customerId: customer.id,
  });
  return;
});

//---create payment initenet with stripe customer Id then display action sheet---
exports.createPaymentIntent  = functions.https.onRequest(async (req, res) => {
  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: req.body.customer},
    {apiVersion: '2020-08-27'}
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: 'usd',
    customer: req.body.customer,
    description: req.body.description,
    receipt_email: req.body.receipt_email,
    setup_future_usage: 'off_session',
    shipping: req.body.shipping,
    shipping: {
      address: { 
        city: req.body.city,
        country: "US",
        line1: req.body.line1,
        line2: req.body.line2,
        postal_code: req.body.postal_code,
        state: req.body.state
      },
      name: req.body.name,
      phone: req.body.phone
    },
    automatic_payment_methods: {
      enabled: true,
    },
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    publishableKey: STRIPE_PUB_KEY,
  });
});


//---create payment initenet with stripe customer Id then display action sheet---
exports.createCheckoutSession  = functions.https.onRequest(async (req, res) =>{
  const session = await stripe.checkout.sessions.create({
    success_url: 'planiteats://app/success',
    cancel_url: 'planiteats://app/cancel',
    currency: 'usd',
    customer: req.body.customer,
    description: req.body.description,
    subscription: req.body.subscription,
    line_items: [
      {price: req.body.price, quantity: req.body.quantity},
    ],
    mode: 'subscription',
  })
  .then(() => {
    res.send({sessionId: session.id});
  })
  .catch((e) => {
    console.log(e);
  });
});


exports.sigResponse  = functions.https.onRequest( async (request, response) => {
  const sig = request.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(request.rawBody, sig, WEB_HOOK);
  } catch (err) {
    console.log(err);
    return response.status(400).send(`Webhook Error: ${err.message}`);
  }
  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const sessionObj = event.data.object;
    await admin.firestore().collection('subscriptions').doc().set({
      checkOutSessId : sessionObj.id,
      paymentStatus: sessionObj.payment_status,
      amountTotal: sessionObj.amount_total,
    });
  }

  response.json({received: true});
});







