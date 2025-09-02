export default function TrustMarks() {
  return (
    <div className="trust-marks">
      <img src="/images/iata.png" alt="IATA Certified" />
      <img src="/images/asta.png" alt="ASTA Member" />
      <span>Award-Winning Service</span>
      <style jsx>{`
        .trust-marks { display: flex; align-items: center; gap: 2em; margin: 2em 0; }
        img { height: 40px; background: #fff; border-radius: 6px; padding: 0.5em; }
        span { font-weight: bold; color: var(--accent); }
      `}</style>
    </div>
  );
}
