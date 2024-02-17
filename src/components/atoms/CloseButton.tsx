import { HiOutlineLogout } from 'react-icons/hi';

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <HiOutlineLogout size={24} />
    </button>
  );
};

export default CloseButton;
