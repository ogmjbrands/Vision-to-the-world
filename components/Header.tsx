import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link href="/">Vision to the World</Link>
      </div>
      <nav>
        <Link href="/destinations">Destinations</Link>
        <Link href="/packages">Tour Packages</Link>
        <Link href="/booking">Book Now</Link>
        <Link href="/blog">Travel Blog</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <style jsx>{`
        header {
          display: flex; justify-content: space-between; align-items: center;
          padding: 1.5em 2em; background: #fff; box-shadow: 0 2px 12px #e7eaf0;
          position: sticky; top: 0; z-index: 100;
        }
        .logo {
          font-size: 2rem; font-family: var(--font-header);
          color: var(--primary); font-weight: bold;
        }
        nav a {
          margin-left: 2em; font-size: 1.1rem; text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        @media (max-width: 800px) {
          header { flex-direction: column; align-items: flex-start; }
          nav a { margin-left: 1em; }
        }
      `}
      </style>
    </header>
  );
}
