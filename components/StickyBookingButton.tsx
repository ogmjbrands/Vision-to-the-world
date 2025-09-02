import Link from 'next/link';

export default function StickyBookingButton() {
  return (
    <div className="sticky-btn">
      <Link href="/booking" className="button">Book Now</Link>
      <style jsx>{`
        .sticky-btn {
          position: fixed; right: 2em; bottom: 2em;
          z-index: 200; animation: popin 0.6s;
        }
        @keyframes popin { 0% { transform: scale(0.3); } 100% { transform: scale(1); } }
        @media (max-width: 600px) {
          .sticky-btn { right: 1em; bottom: 1em; }
        }
      `}</style>
    </div>
  );
}
