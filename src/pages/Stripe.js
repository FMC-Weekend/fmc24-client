// code for backend to genrate price ID
const stripe = require('stripe')('STRIPE_PRIVATE_KEY');

const product = await stripe.products.create({
    name: 'Book', // Product name
});

const price = await stripe.prices.create({
  unit_amount: 1200,
  currency: 'usd',
  product: product.id,
});

// code to genrate payment link
const session = await stripe.checkout.sessions.create({
  success_url: 'https://example.com/success', // Success URL
  line_items: [
    {
      price: price.id, 
      quantity: 2
    },
  ],
  mode: 'payment',
});

// redirect user to session.url to do payment

// Session Response => 
// {
//   "id": "cs_test_a15zG7PORjjRzbIqY2NR9fUeZJmU1lbKZ8rJw8sNsyL0yjiksHxXYP1Gj1",
//   "object": "checkout.session",
//   "after_expiration": null,
//   "allow_promotion_codes": null,
//   "amount_subtotal": null,
//   "amount_total": null,
//   "automatic_tax": {
//     "enabled": false,
//     "status": null
//   },
//   "billing_address_collection": null,
//   "cancel_url": "https://example.com/cancel", // cancel or fail payment url
//   "client_reference_id": null,
//   "client_secret": null,
//   "consent": null,
//   "consent_collection": null,
//   "created": 1698040942,
//   "currency": null,
//   "currency_conversion": null,
//   "custom_fields": [],
//   "custom_text": {
//     "shipping_address": null,
//     "submit": null,
//     "terms_of_service_acceptance": null
//   },
//   "customer": null,
//   "customer_creation": null,
//   "customer_details": {
//     "address": null,
//     "email": "example@example.com",
//     "name": null,
//     "phone": null,
//     "tax_exempt": "none",
//     "tax_ids": null
//   },
//   "customer_email": null,
//   "expires_at": 1698040942,
//   "invoice": null,
//   "invoice_creation": null,
//   "livemode": false,
//   "locale": null,
//   "metadata": {},
//   "mode": "payment",
//   "payment_intent": "pi_1Gt0K32eZvKYlo2C2t1PnrpJ",
//   "payment_link": null,
//   "payment_method_collection": null,
//   "payment_method_configuration_details": null,
//   "payment_method_options": {},
//   "payment_method_types": [
//     "card"
//   ],
//   "payment_status": "unpaid",
//   "phone_number_collection": {
//     "enabled": false
//   },
//   "recovered_from": null,
//   "redaction": null,
//   "setup_intent": null,
//   "shipping_address_collection": null,
//   "shipping_cost": null,
//   "shipping_details": null,
//   "shipping_options": [],
//   "status": "open",
//   "submit_type": null,
//   "subscription": null,
//   "success_url": "https://example.com/success", // success url to handle payment
//   "total_details": null,
//   "ui_mode": "hosted",
//   "url": "https://checkout.stripe.com/c/pay/..."  // Redirect URL to do payment from stripe 
// }
