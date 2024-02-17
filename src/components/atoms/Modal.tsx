import { MouseEvent } from 'react';

import Button from './Button';

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const handleClickOutside = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleClickOutside}
    >
      <div
        className="bg-white p-4 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-xl p-5">カートに商品を追加しました！</p>
        <Button className="float-right hover:bg-orange-500" onClick={onClose}>
          閉じる
        </Button>
      </div>
    </div>
  );
};

export default Modal;
