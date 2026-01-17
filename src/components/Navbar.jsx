import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-orange-500">Foodies</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/dishes">Items</Link>
        <Link href="/login">Login</Link>
        <Link href="/add-item">Add Item</Link>
      </div>
    </nav>
  );
}
