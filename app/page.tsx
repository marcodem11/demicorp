'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push('/auth'), 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main
      style={{
        backgroundColor: "#3A0CA3",
        color: "white",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "5rem",
        fontWeight: "bold",
        fontFamily: "Arial, Helvetica, sans-serif",
        letterSpacing: "0.1em",
      }}
    >
      DEMICORP
    </main>
  );
}