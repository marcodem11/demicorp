'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const violet = '#3A0CA3';

export default function AuthPage() {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const router = useRouter();
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE || '';

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);

    try {
      const endpoint = mode === 'login' ? '/login' : '/register';
      const body =
        mode === 'login'
          ? { email, password }
          : { name: name || email.split('@')[0], email, password };

      const res = await fetch(`${API_BASE}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || 'Operazione non riuscita');

      // salva token e vai in dashboard
      localStorage.setItem('token', data.token);
      setMsg(mode === 'login' ? 'Login effettuato' : 'Registrazione completata');
      router.push('/dashboard');
    } catch (err: any) {
      setMsg(err.message ?? 'Errore');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: violet,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 440,
          background: 'white',
          borderRadius: 16,
          padding: 28,
          boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
        }}
      >
        <h1
          style={{
            margin: 0,
            textAlign: 'center',
            fontSize: 30,
            letterSpacing: '0.12em',
            fontWeight: 800,
            color: violet,
          }}
        >
          DEMICORP
        </h1>

        {/* Tabs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            marginTop: 18,
            background: '#F3F3F5',
            borderRadius: 12,
            padding: 4,
          }}
        >
          <button
            onClick={() => setMode('login')}
            style={{
              border: 'none',
              borderRadius: 10,
              padding: '10px 0',
              fontWeight: 700,
              background: mode === 'login' ? violet : 'transparent',
              color: mode === 'login' ? 'white' : '#333',
              cursor: 'pointer',
            }}
          >
            Login
          </button>
          <button
            onClick={() => setMode('register')}
            style={{
              border: 'none',
              borderRadius: 10,
              padding: '10px 0',
              fontWeight: 700,
              background: mode === 'register' ? violet : 'transparent',
              color: mode === 'register' ? 'white' : '#333',
              cursor: 'pointer',
            }}
          >
            Registrati
          </button>
        </div>

        <form onSubmit={submit} style={{ marginTop: 18, display: 'grid', gap: 12 }}>
          {mode === 'register' && (
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={inputStyle}
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password (min 8 caratteri)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
            style={inputStyle}
          />

          <button type="submit" disabled={loading} style={buttonStyle}>
            {loading ? 'Attendere…' : mode === 'login' ? 'Entra' : 'Crea account'}
          </button>

          {msg && (
            <div style={{ color: msg.includes('Errore') ? '#b00020' : '#0a7d13', fontSize: 14 }}>
              {msg}
            </div>
          )}
        </form>
      </div>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
    padding: '12px 14px',
    borderRadius: 10,
    border: '1px solid #ccc',
    fontSize: 16,
    color: '#333',
    background: '#fff',
    outline: 'none',
  };

const buttonStyle: React.CSSProperties = {
  marginTop: 6,
  padding: '12px 16px',
  borderRadius: 10,
  border: 'none',
  fontWeight: 700,
  fontSize: 16,
  letterSpacing: '0.06em',
  color: 'white',
  backgroundColor: '#3A0CA3',
  cursor: 'pointer',
};