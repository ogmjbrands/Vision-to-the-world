import { NextRequest } from 'next/server';
import { calculateTotal } from '@/lib/calculatePrice';

export async function POST(req: NextRequest) {
  const { basePrice } = await req.json();

  if (!basePrice || basePrice <= 0) {
    return Response.json({ error: 'Invalid booking amount' }, { status: 400 });
  }

  const { total, fee } = calculateTotal(basePrice);

  // Log for internal tracking (optional)
  console.log(`Booking: $${basePrice} + $${fee} fee = $${total}`);

  // Return secure data for Stripe/Flutterwave
  return Response.json({ success: true, amount: total, fee });
}
