'use client';

import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from 'react';

// We'll use the public key via environment (set in Vercel)
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export default function BookingButton({ basePrice }) {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify({
        basePrice,
        email: 'guest@example.com', // Replace with form input
      }),
    });

    const { id } = await response.json();
    await stripe?.redirectToCheckout({ sessionId: id });
  };

  return (
    <button
      onClick={handleCheckout}
      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
    >
      Pay ${calculateTotal(basePrice).total} Now
    </button>
  );
}
