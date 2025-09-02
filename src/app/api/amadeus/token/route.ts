// src/app/api/amadeus/token/route.ts
import { NextRequest } from 'next/server';

export async function GET() {
  const url = 'https://test.api.amadeus.com/v1/security/oauth2/token';
  const body = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: process.env.AMADEUS_CLIENT_ID!,
    client_secret: process.env.AMADEUS_CLIENT_SECRET!,
  });

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body,
  });

  const data = await res.json();
  return Response.json(data);
}
