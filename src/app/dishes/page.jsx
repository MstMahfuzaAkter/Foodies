import Link from "next/link";

export default async function ItemsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dishes`, { cache: 'no-store' });
  const dishes = await res.json();

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {dishes.map((dish) => (
        <div key={dish._id} className="border rounded-lg overflow-hidden shadow-md">
          <img src={dish.image || 'https://via.placeholder.com/300'} alt={dish.name} className="h-48 w-full object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold">{dish.name}</h2>
            <p className="text-gray-600">${dish.price}</p>
            <Link href={`/items/${dish._id}`} className="text-orange-500 mt-2 inline-block">View Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
}