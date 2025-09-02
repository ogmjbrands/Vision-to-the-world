export default function Packages() {
  return (
    <main>
      <h1>Tour Packages & Services</h1>
      <p>
        Choose from our exclusive tours, business travel solutions, adventure escapes, or let us customize your dream trip. 
        All packages include a 5% service fee.
      </p>
      {/* TODO: Replace below with dynamic/API-powered packages, filtering, and booking options */}
      <ul style={{ maxWidth: 700, margin: "2em auto", fontSize: "1.1rem" }}>
        <li><b>Luxury Escapes:</b> 7-14 day all-inclusives to the world’s top resorts.</li>
        <li><b>Adventure Tours:</b> Hiking, safaris, diving, and more with expert guides.</li>
        <li><b>Business Travel:</b> VIP arrangements, airport transfers, flexible schedules.</li>
        <li><b>Budget & Family Packages:</b> Value options for groups, students, and families.</li>
        <li><b>Custom Journeys:</b> Tailored itineraries for the discerning traveler.</li>
      </ul>
    </main>
  );
}
