export default function WhatsAppButton() {
  const handleClick = () => {
    // Clean the number: remove spaces, parentheses, and dashes
    const phoneNumber = '17164305246';
    const message = 'Hi Vision to the World, I would like to book a trip!';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 z-50 animate-bounce"
      aria-label="Chat on WhatsApp"
      style={{ fontSize: '24px' }}
    >
      💬
    </button>
  );
}
