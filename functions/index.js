const functions = require('firebase-functions');
const admin = require('firebase-admin');



const { SECRET_KEY, STRIPE_PUB_KEY, BASE_URL, WEB_SIG, WEB_HOOK, WEB_HOOK_SECRET, PROJ_ID, BUCK } = require("./config");

console.log("SECRET_KEY:".red, SECRET_KEY);

const stripe = require("stripe")(SECRET_KEY);

// const serviceAccount = require("../src/assets/fonts/planiteats-87148-firebase-adminsdk-aabay-db7e938661.json");

admin.initializeApp();

/**
 * Create a customer object in Stripe when a user is created.
 */
 const createCustomerRecord = async ({ email, uid, }) => {
      const customerData = {
          metadata: {
              firebaseUID: uid,
          },
      };
      if (email)
          customerData.email = email;

      const customer = await stripe.customers.create(customerData);
      // Add a mapping record in Cloud Firestore.
      const customerRecord = {
          email: customer.email,
          stripeId: customer.id,
          stripeLink: `https://dashboard.stripe.com${customer.livemode ? '' : '/test'}/customers/${customer.id}`,
      };
      await admin
          .firestore()
          .collection('customers')
          .doc(uid)
          .set(customerRecord, { merge: true });
      return customerRecord;
  };






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
  await admin.firestore().collection('customer').doc().set({
    customerId: customer.id,
  });
});


//--------create stripe user-------------
exports.customerEmailZip = functions.https.onRequest( async (res, req) => {
  const customer = await stripe.customers.create({
    address: { 
      country: "US",
      postal_code: req.body.postal_code,
    },
    description: req.body.description,
    email: req.body.email,
  })
  .then(() => {
  if (context.app == undefined) {
    throw new functions.https.HttpsError(
        'failed-precondition',
        'The function must be called from an App Check verified app.')
  }
  res.send({customer})
})
  .catch((e) => {
    console.log(e);
  });
})


//--------create stripe user-------------
// exports.createStripeCustomer = functions.auth.user().onCreate(async (user) => {
//   const customer = await stripe.customers.create({
//     email: user.email,
//     metadata: { firebaseUID: user.uid },
//   });
//   await admin.firestore().collection('customer').doc(user.uid).set({
//     customerId: customer.id,
//   });
//   return;
// });

exports.createStripeCustomer = functions.auth.user().onCreate(async (user) => {
  const { email, uid } = user;
  await createCustomerRecord({
      email,
      uid,
  });
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
  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: req.body.customer},
    {apiVersion: '2020-08-27'}
  );
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    payment_intent: req.body.payment_intent,
    success_url: 'https://localhost:8081/success',
    cancel_url: 'https://localhost:8081/cancel',
    shipping_address_collection: ["US"],
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
    res.send({
      sessionId: session.id,
      clientSecret: paymentIntent.client_secret,
      ephemeralKey: ephemeralKey.secret,
      publishableKey: STRIPE_PUB_KEY,
    });
  })
  .catch((e) => {
    console.log(e);
  });
});




exports.sigResponse  = functions.https.onRequest( async (request, response) => {
  const sig = request.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(request.rawBody, sig, WEB_HOOK_SECRET,);
  } catch (err) {
    console.log(err);
    return response.status(400).send(`Webhook Error: ${err.message}`);
  }
  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const sessionObj = event.data.object;
    await admin.firestore().collection('orders').doc().set({
      checkOutSessId : sessionObj.id,
      paymentStatus: sessionObj.payment_status,
      shppingInfo: sessionObj.shipping,
      amountTotal: sessionObj.amount_total,
    });
  }

  response.json({received: true});
});







