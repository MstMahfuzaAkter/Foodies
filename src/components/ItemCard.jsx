"use client";
import Link from "next/link";

export default function ItemCard({ dish }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <img src={dish.image} alt={dish.name} className="h-40 w-full object-cover mb-2 rounded" />
      <h3 className="font-bold text-lg">{dish.name}</h3>
      <p className="text-gray-600">{dish.description}</p>
      <p className="font-semibold mt-1">${dish.price}</p>
      <Link href={`/dishes/${dish._id}`} className="text-blue-500 mt-2 inline-block">
        View Details
      </Link>
    </div>
  );
}
