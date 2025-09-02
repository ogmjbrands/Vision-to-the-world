import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <header className="relative h-96 bg-gradient-to-r from-blue-900 to-teal-700 flex items-center justify-center text-white">
        <div className="text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold">Vision to the World</h1>
          <p className="mt-4 text-lg">Luxury. Adventure. Seamless Booking.</p>
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-semibold">
            Explore Destinations
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Tropical Beach"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Your Journey Starts Here</h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Whether you seek luxury resorts, budget backpacking, or corporate travel, we craft perfect trips with real-time booking and 24/7 support.
        </p>
      </main>

      {/* Sticky WhatsApp Button */}
      <WhatsAppButton />

      {/* Footer */}
      <Footer />
    </div>
  );
}      </button>

      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Footer */}
      <Footer />
    </div>
  );
}
