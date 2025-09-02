import { useState } from 'react';

export default function Booking() {
  const [form, setForm] = useState({ name: '', email: '', destination: '', dates: '', pax: 1 });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    // TODO: Integrate with real booking API (Amadeus, Booking.com, etc.)
    // For now, simulate booking request
    setTimeout(() => {
      setSuccess('Booking request sent! Our agent will contact you shortly.');
      setLoading(false);
    }, 1200);
  }

  return (
    <main>
      <h1>Book Your Dream Trip</h1>
      <form className="booking-form" onSubmit={handleSubmit} style={{ maxWidth: 500, margin: "2em auto", display: "flex", flexDirection: "column", gap: "1.2em" }}>
        <input required placeholder="Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}/>
        <input required type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}/>
        <input required placeholder="Destination" value={form.destination} onChange={e => setForm({ ...form, destination: e.target.value })}/>
        <input required type="text" placeholder="Travel Dates" value={form.dates} onChange={e => setForm({ ...form, dates: e.target.value })}/>
        <input required type="number" min={1} placeholder="Number of Travelers" value={form.pax} onChange={e => setForm({ ...form, pax: parseInt(e.target.value) })}/>
        <button className="button" type="submit" disabled={loading}>{loading ? 'Booking...' : 'Book Now'}</button>
      </form>
      {success && <p style={{ color: 'var(--secondary)', marginTop: '1em', fontWeight: 'bold' }}>{success}</p>}
      <p style={{ color: "#888", fontSize: "0.95em", textAlign: "center", maxWidth: 480, margin: "1em auto" }}>
        We charge 5% plus all the client’s bookings. <br/>
        Payments accepted: PayPal, Stripe, CashApp. <br/>
        Multi-currency supported. Secure & refundable.
      </p>
    </main>
  );
      }
