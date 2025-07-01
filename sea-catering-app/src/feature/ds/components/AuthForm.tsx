'use client';

import { useState } from 'react';
import { Button } from './Button';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface AuthFormProps {
  isRegister?: boolean;
}

export const AuthForm = ({ isRegister = false }: AuthFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (isRegister) {
      try {
        await axios.post('/api/register', { name, email, password });
        alert('Registrasi berhasil! Silakan login.');
        router.push('/login');
      } catch (error) {
        alert('Registrasi gagal. Email mungkin sudah terdaftar.');
        console.error(error);
      }
    } else {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (result?.ok) {
        router.push('/subscription');
      } else {
        alert('Login gagal. Cek kembali email dan password Anda.');
      }
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary-800">
        {isRegister ? 'Daftar Akun Baru' : 'Login ke Akun Anda'}
      </h2>
      {isRegister && (
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Nama Lengkap</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border rounded-md" required />
        </div>
      )}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border rounded-md" required />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border rounded-md" required />
      </div>
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? 'Memproses...' : (isRegister ? 'Daftar' : 'Login')}
      </Button>
    </form>
  );
};