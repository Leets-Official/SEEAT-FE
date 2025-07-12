import { useState } from 'react';
import BottomNavigation from '@/components/common/BottomNavigation/BottomNavigation';

export default function BottomNavigationExamples() {
  const [pathname, setPathname] = useState('/home');

  return (
    <div className="h-screen bg-gray-900 pb-[59px] text-white">
      <div className="p-4">현재 선택된 메뉴: {pathname}</div>

      {/* 프리셋 사용 (variant 생략 시 기본값은 default) */}
      <BottomNavigation pathname={pathname} onNavigate={(path) => setPathname(path)} />
    </div>
  );
}
