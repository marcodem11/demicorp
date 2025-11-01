'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type User = { id: number; name: string; email: string };

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE || '';

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.replace('/auth');
      return;
    }

    (async () => {
      try {
        const res = await fetch(`${API_BASE}/me`, {
          headers: { Authorization: `Bearer ${token}` },
          cache: 'no-store',
        });
        if (!res.ok) throw new Error('Token non valido');
        const data = await res.json();
        setUser(data);
      } catch (_) {
        localStorage.removeItem('token');
        router.replace('/auth');
      } finally {
        setLoading(false);
      }
    })();
  }, [API_BASE, router]);

  async function logout() {
    const token = localStorage.getItem('token');
    try {
      await fetch(`${API_BASE}/logout`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch {}
    localStorage.removeItem('token');
    router.replace('/auth');
  }

  if (loading) {
    return (
      <main style={centered}>
        <p style={{ color: 'white' }}>Caricamento…</p>
      </main>
    );
  }

  return (
    <main style={centered}>
      <div
        style={{
          width: '100%',
          maxWidth: 680,
          background: 'white',
          borderRadius: 16,
          padding: 28,
          boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
        }}
      >
        <h1 style={{ marginTop: 0 }}>Benvenuto in DEMICORP</h1>
        {user && (
          <p style={{ marginTop: 8 }}>
            <b>Utente:</b> {user.name} ({user.email})
          </p>
        )}

        <div style={{ marginTop: 20, display: 'grid', gap: 12 }}>
          <button onClick={logout} style={logoutBtn}>
            Logout
          </button>
        </div>
      </div>
    </main>
  );
}

const centered: React.CSSProperties = {
  minHeight: '100vh',
  backgroundColor: '#3A0CA3',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 24,
};

const logoutBtn: React.CSSProperties = {
  padding: '12px 16px',
  borderRadius: 10,
  border: 'none',
  fontWeight: 700,
  fontSize: 16,
  color: 'white',
  backgroundColor: '#3A0CA3',
  cursor: 'pointer',
};