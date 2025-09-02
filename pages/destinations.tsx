export default function Destinations() {
  return (
    <main>
      <h1>Top Destinations</h1>
      <p>Browse our curated selection of luxury, adventure, and family-friendly locations worldwide.</p>
      {/* TODO: Replace below with dynamic or API-powered destinations and advanced search/filter */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2em", justifyContent: "center", margin: "2em 0" }}>
        <div style={{ width: 300, background: "#fff", borderRadius: 12, boxShadow: "0 2px 16px #eaeaea", overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" alt="Bali" style={{ width: "100%", height: 180, objectFit: "cover" }} />
          <div style={{ padding: "1em" }}>
            <h2 style={{ margin: 0 }}>Bali</h2>
            <p>Luxury resorts, beaches, and adventure tours.</p>
          </div>
        </div>
        <div style={{ width: 300, background: "#fff", borderRadius: 12, boxShadow: "0 2px 16px #eaeaea", overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=600&q=80" alt="Paris" style={{ width: "100%", height: 180, objectFit: "cover" }} />
          <div style={{ padding: "1em" }}>
            <h2 style={{ margin: 0 }}>Paris</h2>
            <p>Romantic getaways, art, luxury shopping.</p>
          </div>
        </div>
        {/* Add more destination cards */}
      </div>
    </main>
  );
}
