'use client';
import Link from 'next/link';

import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userName || !email || !password) {
      setError('ニックネーム、メールアドレス、パスワードを入力してください');
      return;
    }

    try {
      const userExists = await fetch('api/userExists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await userExists.json();
      if (user) {
        setError('このメールアドレスはすでに使われています。');
        return;
      }

      const res = await fetch('api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: userName, email, password }), // userName을 포함하여 전달
      });

      if (res.status === 201) {
        const form = e.target as HTMLFormElement;
        form.reset();
        router.push('/');
      } else {
        setError('Failed to sign up');
      }
    } catch (error: any) {
      setError('Failed to sign up: ' + error.message);
    }
  };

  return (
    <div onSubmit={handleSubmit}>
      <form className="flex flex-col">
        <div className="m-3">
          ニックネーム
          <Input
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="ニックネームを入力してください。"
          />
        </div>
        <div className="m-3 my-5">
          メールアドレス
          <Input
            type="email"
            placeholder="メールアドレスを入力してください。"
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </div>
        <div className="m-3 my-3">
          パスワード
          <Input
            type="password"
            placeholder="パスワードを入力してください。"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </div>
        <div className="flex m-3 gap-4">
          <Button type="submit">登録する</Button>
          <Link href="/">
            <Button type="submit">戻る</Button>
          </Link>
        </div>
        {error && (
          <div className="text-red-500 text-sm py-1 px-3 mt-1"># {error}</div>
        )}
      </form>
    </div>
  );
};

export default SignUp;
