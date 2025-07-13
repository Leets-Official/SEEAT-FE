import React from 'react';
import { twMerge } from 'tailwind-merge';

interface BottomNavigationItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

export default function BottomNavigationItem({
  icon,
  label,
  active = false,
  onClick,
}: BottomNavigationItemProps) {
  return (
    <button
      onClick={onClick}
      className="flex w-full flex-col items-center justify-center gap-[5px] py-1"
    >
      <div
        className={twMerge(
          'flex h-6 w-6 items-center justify-center transition-colors duration-200',
          active ? 'text-red-400' : 'text-white',
        )}
      >
        {icon}
      </div>
      <span
        className={twMerge('transition-colos text-[10px]', active ? 'text-red-400' : 'text-white')}
      >
        {label}
      </span>
    </button>
  );
}
