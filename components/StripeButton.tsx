import { loadStripe } from '@stripe/stripe-js';

export default function StripeButton({ amount }: { amount: number }) {
  async function handleCheckout() {
    // TODO: Call your backend to create a Stripe Checkout session
    // Redirect to Stripe Checkout
    window.location.href = 'https://buy.stripe.com/test_...'; // Replace with your session URL
  }
  return <button className="button" onClick={handleCheckout}>Pay with Stripe</button>;
}
