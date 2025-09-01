export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Vision to the World</h3>
          <p className="text-gray-300">Luxury. Adventure. Trust. We plan unforgettable journeys.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Destinations</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Bali</li>
            <li>Dubai</li>
            <li>Paris</li>
            <li>Maldives</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Help Center</li>
            <li>Refund Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-400">FB</a>
            <a href="#" className="text-pink-400">IG</a>
            <a href="#" className="text-blue-300">TT</a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        © 2025 Vision to the World. All rights reserved. IATA Certified.
      </div>
    </footer>
  );
}      </button>

      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Footer */}
      <Footer />
    </div>
  );
  }
