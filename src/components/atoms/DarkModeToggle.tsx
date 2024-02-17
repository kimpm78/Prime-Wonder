// 'use client';

import { HiMoon, HiSun } from 'react-icons/hi';

interface DarkModeToggleProps {
  isDarkMode?: boolean;
  toggleTheme?: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({
  isDarkMode,
  toggleTheme,
}) => {
  return (
    <button className="w-8 h-8" onClick={toggleTheme}>
      {isDarkMode ? <HiMoon size={24} /> : <HiSun size={24} />}
    </button>
  );
};

export default DarkModeToggle;
