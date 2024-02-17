'use client';

import { useState } from 'react';
import {
  HiOutlineUser,
  HiOutlineShoppingCart,
  HiOutlineLogin,
  HiOutlineLogout,
} from 'react-icons/hi';
import DarkModeToggle from '../atoms/DarkModeToggle';
import Input from '../atoms/Input';
import LoginModal from './LoginModal';

import Link from 'next/link';

interface HeaderProps {
  user?: any; // 사용자 정보의 타입에 따라 수정
  logout?: () => void;
  isDarkMode?: boolean; // Dark Mode 여부를 나타내는 props를 추가합니다.
  toggleTheme?: () => void; // Dark Mode를 토글하는 함수를 추가합니다.
}

const Navbar: React.FC<HeaderProps> = ({
  user,
  logout,
  toggleTheme,
  isDarkMode,
}) => {
  // 로그인 & 모달 기능
  // モーダル機能
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // 검색 기능
  const [search, setSearch] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <nav className="p-4 md:p-8 bg-black flex justify-between items-center">
      <Link
        href="/"
        className="btn btn-ghost text-3xl font-bold text-white hover:text-orange-300"
      >
        PrimeKim
      </Link>
      <div className="flex">
        <div className="hidden md:block">
          <Input
            type="text"
            value={search}
            onChange={onChange}
            placeholder="キーワードを入力してください"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button
          className="text-white hover:text-orange-300"
          onClick={handleLoginClick}
        >
          {isLoggedIn ? (
            <HiOutlineLogout size={24} />
          ) : (
            <HiOutlineLogin size={24} />
          )}
        </button>
        {isModalOpen && (
          <LoginModal
            onClose={handleCloseModal}
            onSuccess={handleLoginSuccess}
          />
        )}
        <button className="text-white hover:text-orange-300">
          <Link href="/profile">
            <HiOutlineUser size={24} />
          </Link>
        </button>
        <button className="text-white hover:text-orange-300">
          <Link href="/addCart">
            <HiOutlineShoppingCart size={24} />
          </Link>
        </button>
        <div className="text-white hover:text-orange-300">
          <DarkModeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        </div>
      </div>
      {user && (
        <button className="hover:text-orange-300" onClick={logout}>
          <HiOutlineLogout size={24} />
        </button>
      )}
    </nav>
  );
};
export default Navbar;
