export default function Blog() {
  return (
    <main>
      <h1>Travel Blog & Guides</h1>
      <p>
        Explore our expert guides, inspiring stories, and travel tips. <br />
        <i>Coming soon: destination guides, itineraries, and more!</i>
      </p>
      {/* TODO: Fetch and display blog posts from CMS or markdown */}
      <div style={{ margin: "3em auto", maxWidth: 680, color: "#aaa", textAlign: "center" }}>
        <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="Travel" style={{ width: "100%", borderRadius: 12, opacity: 0.7 }} />
      </div>
    </main>
  );
}
