"use client"
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // Set a cookie (Mock Auth)
    document.cookie = "isLoggedIn=true; path=/";
    router.push('/items');
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form onSubmit={handleLogin} className="p-8 border rounded shadow-lg w-96">
        <h2 className="text-2xl mb-4 font-bold">Login</h2>
        <input type="email" placeholder="Email" className="w-full border p-2 mb-4" defaultValue="admin@foodies.com" />
        <input type="password" placeholder="Password" className="w-full border p-2 mb-4" defaultValue="123456" />
        <button className="w-full bg-orange-600 text-white py-2 rounded">Sign In</button>
      </form>
    </div>
  );
}