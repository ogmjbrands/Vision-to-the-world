import HeroSection from '../components/HeroSection';
import TrustMarks from '../components/TrustMarks';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustMarks />
      <section style={{ maxWidth: 900, margin: "3em auto", textAlign: "center" }}>
        <h2>Why Book With Us?</h2>
        <ul style={{ listStyle: "none", padding: 0, fontSize: "1.1rem" }}>
          <li>✔️ Real-time flight, hotel, and tour booking</li>
          <li>✔️ Multi-currency secure payments (PayPal, Stripe, CashApp)</li>
          <li>✔️ 24/7 WhatsApp & instant support</li>
          <li>✔️ Reviews, insurance, refund policies, and transparent pricing</li>
          <li>✔️ Global, multilingual, and trusted by thousands</li>
        </ul>
      </section>
      <section style={{ background: "var(--secondary)", color: "#fff", padding: "3em 0", textAlign: "center" }}>
        <h2>Special Offer: Save 5% on Your First Booking!</h2>
        <p>Limited time only. <a href="/booking" className="button" style={{ background: "#fff", color: "var(--primary)" }}>Book Now</a></p>
      </section>
    </main>
  );
}
