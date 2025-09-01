export default function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/1234567890?text=Hi%20Vision%20to%20the%20World,%20I%27d%20like%20to%20book%20a%20trip!', '_blank');
  };
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition z-50"
      style={{ fontSize: '24px' }}
    >
      💬
    </button>
  );
    }
