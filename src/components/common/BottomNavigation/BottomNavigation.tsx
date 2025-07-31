import { useLocation, useNavigate } from 'react-router-dom';
import BottomNavigationItem from './BottomNavigationItem';
import { HomeIcon, SearchIcon, MyIcon } from '@/assets';

const BottomNavigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const items = [
    {
      icon: <HomeIcon />,
      label: '홈',
      active: pathname === '/home',
      onClick: () => navigate('/home'),
    },
    {
      icon: <SearchIcon />,
      label: '검색',
      active: pathname === '/search',
      onClick: () => navigate('/search'),
    },
    {
      icon: <MyIcon />,
      label: '마이',
      active: pathname === '/my',
      onClick: () => navigate('/my'),
    },
  ];

  return (
    <nav className="fixed right-0 bottom-0 left-0 mx-auto flex h-[59px] w-full max-w-[430px] items-center justify-around rounded-t-lg border-t border-r border-l border-gray-800 bg-gray-950">
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
