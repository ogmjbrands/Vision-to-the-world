export default function Footer() {
  return (
    <footer>
      <div className="links">
        <a href="/about">About Us</a> | 
        <a href="/contact">Contact</a> | 
        <a href="/policies">Refunds & Policies</a>
      </div>
      <div className="socials">
        <a href="https://www.facebook.com/share/1Btpm4sX6R/" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.instagram.com/vision_to_the_world/profilecard/?igsh=MXdzd2hjM2djejI5NQ==" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.tiktok.com/@vision.to.the.wor3?_t=ZT-8yPyrXg2CDn&_r=1" target="_blank" rel="noopener noreferrer">TikTok</a>
        <a href="https://www.youtube.com/@visiontotheworld" target="_blank" rel="noopener noreferrer">YouTube</a>
      </div>
      <div style={{ marginTop: '0.5em', fontSize: '0.95em' }}>
        &copy; {new Date().getFullYear()} Vision to the World. All rights reserved.
      </div>
      <style jsx>{`
        footer {
          background: #f5fafc; color: var(--dark);
          text-align: center; padding: 2em 0 1em 0;
          border-top: 1px solid #eaeaea;
        }
        .links a { color: var(--primary); margin: 0 0.5em; }
        .socials { margin: 1em 0; }
        .socials a { margin: 0 0.7em; }
      `}</style>
    </footer>
  );
}
