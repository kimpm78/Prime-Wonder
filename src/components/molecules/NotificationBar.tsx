import { useState } from 'react';
import dynamic from 'next/dynamic';

const NotificationIcon = dynamic(
  () => import('@/components/atoms/NotificationIcon'),
);
const CloseButton = dynamic(() => import('@/components/atoms/CloseButton'));

interface NotificationBarProps {
  content: string;
}

const NotificationBar: React.FC<NotificationBarProps> = ({ content }) => {
  const [showNotification, setShowNotification] = useState(false);

  const toggleNotification = () => {
    setShowNotification((prev) => !prev);
  };

  return (
    <div className="notification-bar">
      <button onClick={toggleNotification}>
        <NotificationIcon />
      </button>
      {showNotification && (
        <div className="notification">
          {content}
          <CloseButton onClick={() => setShowNotification(false)} />
        </div>
      )}
    </div>
  );
};

export default NotificationBar;
