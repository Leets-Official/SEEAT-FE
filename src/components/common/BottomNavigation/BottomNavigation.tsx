import BottomNavigationItem from './BottomNavigationItem';
import { HomeIcon, SearchIcon, MyIcon } from '@/assets';
export type BottomNavItem = {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
};

interface BottomNavigationProps {
  pathname: string;
  onNavigate: (path: string) => void;
}

const BottomNavigation = ({ pathname, onNavigate }: BottomNavigationProps) => {
  const items: BottomNavItem[] = [
    {
      icon: <HomeIcon />,
      label: '홈',
      active: pathname === '/home',
      onClick: () => onNavigate('/home'),
    },
    {
      icon: <SearchIcon />,
      label: '검색',
      active: pathname === '/search',
      onClick: () => onNavigate('/search'),
    },
    {
      icon: <MyIcon />,
      label: '마이',
      active: pathname === '/my',
      onClick: () => onNavigate('/my'),
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 flex h-[59px] w-full items-center justify-around rounded-t-lg border-t border-r border-l border-gray-800 bg-gray-950">
      {items.map((item, index) => (
        <BottomNavigationItem
          key={index}
          icon={item.icon}
          label={item.label}
          active={item.active}
          onClick={item.onClick}
        />
      ))}
    </nav>
  );
};

export default BottomNavigation;
