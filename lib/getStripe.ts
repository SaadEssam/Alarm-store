import { loadStripe } from "@stripe/stripe-js";
// import dotenv from 'dotenv-webpack';

// dotenv.config();

let stripePromise: any;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }

  return stripePromise;
};

export default getStripe;
