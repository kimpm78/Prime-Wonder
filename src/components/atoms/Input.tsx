import React from 'react';

interface InputProps {
  id?: string;
  name?: string;
  type: 'text' | 'password' | 'email' | 'number';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
  autoComplete?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  className,
  autoComplete,
}) => {
  const inputClassName = `bg-gray-200 rounded-xl px-4 py-2 w-full border 
border-gray-400 focus:outline-none focus:border-orange- ${className}`;

  return (
    <input
      className={inputClassName}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
    />
  );
};

export default Input;
