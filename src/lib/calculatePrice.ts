import { calculateTotal } from '@/lib/calculatePrice';

export default function PackageCard({ name, basePrice, image }) {
  const { base, fee, total } = calculateTotal(basePrice);

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600 mt-1">From ${base}</p>

        <div className="mt-4 text-sm text-gray-500 border-t pt-3">
          <div className="flex justify-between">
            <span>Package Cost</span>
            <span>${base}</span>
          </div>
          <div className="flex justify-between text-green-600 font-medium">
            <span>Service Fee (5%)</span>
            <span>+${fee}</span>
          </div>
          <div className="flex justify-between font-bold pt-2">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>

        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Book Now
        </button>
      </div>
    </div>
  );
    }
