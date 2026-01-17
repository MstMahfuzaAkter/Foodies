export default async function ItemDetails({ params }) {
  const { id } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dishes/${id}`);
  const dish = await res.json();

  return (
    <div className="max-w-4xl mx-auto p-10 flex gap-10">
      <img src={dish.image} className="w-1/2 rounded-xl" />
      <div>
        <h1 className="text-4xl font-bold">{dish.name}</h1>
        <p className="text-2xl text-orange-600 my-4 font-semibold">${dish.price}</p>
        <p className="text-gray-700 leading-relaxed">{dish.description}</p>
        <button className="mt-6 bg-orange-600 text-white px-6 py-2 rounded">Order Now</button>
      </div>
    </div>
  );
}