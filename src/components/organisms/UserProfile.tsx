import React from 'react';
import Button from '../atoms/Button';

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
  return (
    <div className="">
      <img src={avatar} alt={name} className="w-16 h-16 rounded-full mr-4" />
      <div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{email}</p>
        <textarea
          className="w-full h-24 border rounded-md p-2 mt-2"
          value={bio}
          readOnly
        />
        <Button>変更する</Button>
      </div>
    </div>
  );
};

export default UserProfile;
