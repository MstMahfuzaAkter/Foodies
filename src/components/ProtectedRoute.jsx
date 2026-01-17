"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProtectedRoute({ children }) {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = document.cookie.includes('isLoggedIn=true');
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [router]);

  return <>{children}</>;
}