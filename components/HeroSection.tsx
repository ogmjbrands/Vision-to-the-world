export default function HeroSection() {
  return (
    <section className="hero">
      <div className="parallax-bg"></div>
      <div className="content">
        <h1>Discover the World in Style</h1>
        <p>
          Luxury, Adventure, and Unforgettable Experiences—All in One Place.<br />
          Book with Vision to the World and travel beyond expectations.
        </p>
        <a href="/booking" className="button">Start Your Journey</a>
      </div>
      <style jsx>{`
        .hero {
          position: relative; height: 70vh; min-height: 420px; display: flex; align-items: center; justify-content: center; overflow: hidden;
        }
        .parallax-bg {
          background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80');
          background-size: cover; background-position: center;
          position: absolute; width: 100%; height: 100%; left: 0; top: 0;
          transform: scale(1.1);
          z-index: 0;
        }
        .content {
          position: relative; z-index: 10; color: #fff; text-align: center; text-shadow: 0 4px 32px rgba(0,0,0,0.4);
        }
        h1 { font-size: 3rem; }
        p { font-size: 1.5rem; margin: 1em 0; }
      `}</style>
    </section>
  );
}
