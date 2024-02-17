// LoginModal.tsx
import React, { useState } from 'react';
import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface LoginModalProps {
  onClose: () => void;
  onSuccess?: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await signIn('credentials', {
        username,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError('一致しておりません。');
        return;
      }
      router.replace('/profile');
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-75 z-50 "
    >
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-black">Login</h2>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />
        </div>
        <div className="mb-4">
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </div>
        <div className="flex justify-end gap-2">
          <Button type="submit">Login</Button>
          <Button type="submit" onClick={onClose} className="ml-2">
            Cancel
          </Button>
        </div>
        {error && (
          <div className="text-sm text-red-500 font-bold py-1 px-3">
            # {error}
          </div>
        )}
        <div className="ml-2">
          <Link className="flex text-sm mt-3" href="/signUp" onClick={onClose}>
            アカウントをお持ちではないですか？
            <span className="underline font-bold hover:text-orange-400">
              アカウントの作成
            </span>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginModal;
