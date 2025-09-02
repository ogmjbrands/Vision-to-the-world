export default function Contact() {
  return (
    <main>
      <h1>Contact Us</h1>
      <p>Call us: <a href="tel:+17164305246">+1 716-430-5246</a> / <a href="tel:+201143719505">+20 114 371 9505</a></p>
      <p>Address: 571 Ontario St, Buffalo NY 14207</p>
      <div className="actions" style={{ display: "flex", gap: "1.5em", margin: "2em 0" }}>
        <a href="https://wa.me/17164305246" target="_blank" rel="noopener noreferrer" className="button">WhatsApp Instant Chat</a>
        <a href="mailto:info@visiontotheworld.com" className="button" style={{ background: '#FF9832' }}>Email Us</a>
      </div>
      <div className="socials" style={{ margin: "1em 0" }}>
        <a href="https://www.facebook.com/share/1Btpm4sX6R/" target="_blank">Facebook</a>{" "}
        <a href="https://www.instagram.com/vision_to_the_world/profilecard/?igsh=MXdzd2hjM2djejI5NQ==" target="_blank">Instagram</a>{" "}
        <a href="https://www.tiktok.com/@vision.to.the.wor3?_t=ZT-8yPyrXg2CDn&_r=1" target="_blank">TikTok</a>{" "}
        <a href="https://www.youtube.com/@visiontotheworld" target="_blank">YouTube</a>
      </div>
      {/* TODO: Add live chat widget integration */}
    </main>
  );
}
