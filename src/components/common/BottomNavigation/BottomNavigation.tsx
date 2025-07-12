import HomeIcon from '@/assets/icons/home.svg?react';
import SearchIcon from '@/assets/icons/search.svg?react';
import MyIcon from '@/assets/icons/my.svg?react';
import BottomNavigationItem from './BottomNavigationItem';

export type BottomNavItem = {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
};

type BottomNavigationProps =
  | {
      variant?: 'default';
      pathname: string;
      onNavigate: (path: string) => void;
    }
  | {
      variant: 'custom';
      items: BottomNavItem[];
    };

// props.variant 기본값 default 처리
export default function BottomNavigation(props: BottomNavigationProps) {
  const isCustom = props.variant === 'custom';

  let items: BottomNavItem[];

  if (isCustom) {
    items = props.items;
  } else {
    const { pathname, onNavigate } = props;
    items = [
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
  }

  return (
    <nav className="fixed bottom-0 left-0 flex h-[59px] w-full items-center justify-around rounded-t-lg border-t border-r border-l border-[#424242] bg-[#181818]">
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
}
