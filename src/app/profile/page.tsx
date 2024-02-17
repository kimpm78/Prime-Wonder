import UserProfile from '@/components/molecules/UserProfile';
import Link from 'next/link';

import '@/app/globals.css';
import { MdEventNote, MdHistory } from 'react-icons/md';
import { LiaCoinsSolid } from 'react-icons/lia';
import { RiCoupon3Line } from 'react-icons/ri';
import { AiOutlineNotification } from 'react-icons/ai';
import { IoHeartOutline } from 'react-icons/io5';
import { FaRegCreditCard, FaRegUserCircle } from 'react-icons/fa';
import { BsTruck } from 'react-icons/bs';

const ProfilePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold p-5 text-gray-700">マイページ</h1>
      <div className="flex-1 border-t border-gray-400 pt-4 pr-4 ml-4 mr-4" />
      <div className="flex">
        <div className="p-4">
          <div
            className="rounded-lg border-gray-400"
            style={{ border: '1px solid #cccccc' }}
          >
            <p
              className="text-x rounded-t-lg font-bold text-gray-100   bg-slate-800 "
              style={{ padding: '6px 8px 2px' }}
            >
              お客様の情報
            </p>
            <p
              className="text-sm"
              style={{
                margin: '10px',
                fontSize: '15px',
                padding: '3px 0 8px',
                borderBottom: '1px solid #cccccc',
              }}
            >
              利用可能ポイント：2093pt
            </p>
            <div className="ml-2 text-sm pl-0.5">
              <Link href="#" className="flex gap-2 my-1 hover:text-blue-500">
                <MdHistory size={20} />
                ご注文履歴
              </Link>
              <Link href="#" className="flex gap-2 my-1 hover:text-blue-500">
                <LiaCoinsSolid size={20} />
                ポイント履歴
              </Link>
              <Link href="#" className="flex gap-2 my-1 hover:text-blue-500">
                <RiCoupon3Line size={20} />
                クーポン
              </Link>
              <Link href="#" className="flex gap-2 my-1 hover:text-blue-500">
                <AiOutlineNotification size={20} />
                キャンペーン
              </Link>
              <Link href="#" className="flex gap-2 my-1 hover:text-blue-500">
                <MdEventNote size={20} />
                イベント
              </Link>
              <Link href="#" className="flex gap-2 my-1 hover:text-blue-500">
                <IoHeartOutline size={20} />
                お気に入り商品
              </Link>
            </div>
            <div className="ml-2 text-sm pl-0.5">
              <h2 className="text-yellow-500 font-bold border-b border-gray-300 mr-2 my-3">
                ユーザー情報
              </h2>
              <Link href="#" className="flex gap-2 hover:text-blue-500">
                <FaRegUserCircle size={20} />
                お客様情報
              </Link>
              <Link href="#" className="flex gap-2 my-1 hover:text-blue-500">
                <FaRegCreditCard size={20} />
                お支払い情報
              </Link>
              <Link href="#" className="flex gap-2 my-1 hover:text-blue-500">
                <BsTruck size={20} />
                お届け先情報
              </Link>
            </div>
          </div>
        </div>
        <div className="p-4">
          <UserProfile
            name="鈴木 太郎"
            email="suzukitaro@example.com"
            bio="初めまして。太郎です。よろしくお願いします。"
            avatar="https://i.pinimg.com/550x/08/a7/8b/08a78bc661627d7428a93226698ffd09.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
