'use client';

import Button from '../atoms/Button';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import LoginModal from '../organisms/LoginModal';

interface UserProfileProps {
  name: string;
  email: string;
  bio?: string; //自己紹介
  avatar?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  email,
  bio,
  avatar,
}) => {
  const { data: session } = useSession();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex">
      <img src={avatar} alt={name} className="w-16 h-16 rounded-full mr-4" />
      <div className="">
        <h2 className="text-xl font-semibold">{session?.user?.name}</h2>
        <p className="text-gray-600">{session?.user?.email}</p>
        <textarea
          className="w-full h-24 border rounded-md p-2 mt-2"
          value={bio}
          readOnly
        />
        <div className="flex gap-4">
          <Button>変更する</Button>
          <Button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="bg-orange-400 hover:bg-orange-600 text-white rounded-xl px-4 py-2"
          >
            サインアウト
          </Button>
        </div>
      </div>
      {isModalOpen && <LoginModal onClose={() => setIsModalOpen(true)} />}
    </div>
  );
};

export default UserProfile;
