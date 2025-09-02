export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold mb-4">Vision to the World</h3>
          <p className="text-gray-300">
            Luxury. Adventure. Trust. We plan unforgettable journeys with 24/7 support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/destinations" className="hover:text-white">Destinations</a></li>
            <li><a href="/packages" className="hover:text-white">Tour Packages</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/help" className="hover:text-white">Help Center</a></li>
            <li><a href="/refund" className="hover:text-white">Refund Policy</a></li>
            <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social & WhatsApp */}
        <div>
          <h4 className="font-semibold mb-4">Connect With Us</h4>
          <div className="flex flex-col space-y-3">
            <a
              href="https://wa.me/17164305246"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-green-400 hover:text-green-300"
            >
              <span>💬</span>
              <span>WhatsApp Us</span>
            </a>
            <a
              href="https://www.instagram.com/vision_to_the_world"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-pink-400 hover:text-pink-300"
            >
              <span>📸</span>
              <span>Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/share/1Btpm4sX6R/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
            >
              <span>📘</span>
              <span>Facebook</span>
            </a>
            <a
              href="https://www.tiktok.com/@vision.to.the.wor3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white"
            >
              <span>🎵</span>
              <span>TikTok</span>
            </a>
            <a
              href="https://www.youtube.com/@visiontotheworld"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-red-400 hover:text-red-300"
            >
              <span>▶️</span>
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
        <p>© 2025 Vision to the World. All rights reserved. IATA Certified Travel Agency.</p>
        <p className="mt-1">Designed for luxury, adventure, and seamless global travel.</p>
      </div>
    </footer>
  );
}
