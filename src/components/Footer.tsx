import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <header className="relative h-96 bg-gradient-to-r from-blue-900 to-teal-700 flex items-center justify-center text-white">
        <div className="text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold">Vision to the World</h1>
          <p className="mt-4 text-lg">Luxury • Adventure • Seamless Booking</p>
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-semibold">
            Explore Destinations
          </button>
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Tropical Beach"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <section className="py-12 px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Your Journey Starts Here</h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Whether you seek luxury resorts, budget backpacking, or corporate travel, we craft perfect trips with real-time booking, 24/7 support, and trusted service.
          </p>
        </section>
      </main>

      {/* Sticky Booking Button */}
      <button className="fixed bottom-20 right-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg z-40 font-semibold">
        📅 Book Now
      </button>

      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Footer */}
      <Footer />
    </div>
  );
  }
