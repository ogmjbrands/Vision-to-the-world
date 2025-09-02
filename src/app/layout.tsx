import './globals.css';

export const metadata = {
  title: 'Vision to the World',
  description: 'Luxury travel agency with real-time booking and 5% service fee.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Top Social & WhatsApp Bar */}
        <div className="bg-gray-800 text-xs text-gray-300 py-1 px-4 flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
          <a
            href="https://wa.me/17164305246"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-white transition"
          >
            💬 <span className="hidden sm:inline">&nbsp;WhatsApp Us</span>
          </a>
          <a
            href="https://www.instagram.com/vision_to_the_world"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-white transition"
          >
            📸 <span className="hidden sm:inline">&nbsp;Instagram</span>
          </a>
          <a
            href="https://www.facebook.com/share/1Btpm4sX6R/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-white transition"
          >
            📘 <span className="hidden sm:inline">&nbsp;Facebook</span>
          </a>
          <a
            href="https://www.tiktok.com/@vision.to.the.wor3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-white transition"
          >
            🎵 <span className="hidden sm:inline">&nbsp;TikTok</span>
          </a>
          <a
            href="https://www.youtube.com/@visiontotheworld"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-white transition"
          >
            ▶️ <span className="hidden sm:inline">&nbsp;YouTube</span>
          </a>
        </div>

        {/* Main Content */}
        <div className="min-h-screen flex flex-col">
          {children}
        </div>

        {/* WhatsApp Button (Stays at Bottom) */}
        {/* This stays if you have WhatsAppButton.tsx */}
      </body>
    </html>
  );
}
