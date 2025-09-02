import { NextRequest } from 'next/server';
import Stripe from 'stripe';
import { calculateTotal } from '@/lib/calculatePrice';

// Initialize Stripe with secret key from environment
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

export async function POST(req: NextRequest) {
  try {
    const { basePrice, email } = await req.json();

    // Validate input
    if (!basePrice || basePrice <= 0) {
      return Response.json({ error: 'Invalid price' }, { status: 400 });
    }

    // Add 5% service fee
    const { total } = calculateTotal(basePrice);

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_ {
            currency: 'usd',
            product_data: {
              name: 'Travel Package Booking',
              description: 'Booked via Vision to the World',
            },
            unit_amount: Math.round(total * 100), // in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.nextUrl.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/booking`,
      customer_email: email,
    });

    return Response.json({ id: session.id });
  } catch (error) {
    console.error('Checkout error:', error);
    return Response.json({ error: 'Payment failed' }, { status: 500 });
  }
      }
