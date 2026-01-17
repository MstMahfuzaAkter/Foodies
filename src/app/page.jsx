import ItemCard from "@/components/ItemCard";
import { getLatestDishes } from "@/lib/api";


export default async function HomePage() {
  const res = await getLatestDishes();
  const dishes = res.data;

  return (
    <div className="container mx-auto p-6">
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4">Latest Dishes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {dishes.map((dish) => (
            <ItemCard key={dish._id} dish={dish} />
          ))}
        </div>
      </section>
      {/* Add 6 more sections as per your design */}
    </div>
  );
}
