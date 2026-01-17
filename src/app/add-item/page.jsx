"use client"
import ProtectedRoute from '@/components/ProtectedRoute';

export default function AddItemPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dish = Object.fromEntries(formData);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dishes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dish),
    });

    if (res.ok) alert("Dish added successfully!");
  };

  return (
    <ProtectedRoute>
      <div className="max-w-lg mx-auto p-10">
        <h1 className="text-2xl font-bold mb-6">Add New Dish</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" placeholder="Dish Name" className="w-full border p-2" required />
          <input name="price" placeholder="Price" className="w-full border p-2" required />
          <input name="image" placeholder="Image URL" className="w-full border p-2" required />
          <textarea name="description" placeholder="Description" className="w-full border p-2" required />
          <button className="w-full bg-green-600 text-white py-2">Submit Dish</button>
        </form>
      </div>
    </ProtectedRoute>
  );
}