// import { HeaderBasic } from '@/components';
import { LevelInfoCard, MyLevelCard } from '@/components'; 
import { LEVELS_DATA } from '@/constants/levelcondition';

export default function LevelPage() {
  // 나중에 API
  const currentUser = {
    level: 3,
    progress: 45,
  };
    const currentUserStatus = {
    reviewCount: 5,  
    likeCount: 12,   
  };

  return (
    <div className="px-4 py-3 text-white min-h-screen font-suit">
      {/* <HeaderBasic>{null}</HeaderBasic> */}

      {/* 현재 레벨 박스 */}
      <MyLevelCard 
      userLevel={currentUser.level} 
      userProgress={currentUser.progress}
      currentReviewCount={currentUserStatus.reviewCount}
      currentLikeCount={currentUserStatus.likeCount} 
      />

      {/* 구분선 */}
      <div className="w-[335px] h-[1px] bg-[#424242] mt-6 mb-6 mx-auto" />

      {/* 레벨 리스트 */}
      <div className="space-y-4">
        {LEVELS_DATA.map((levelData) => (
          <LevelInfoCard
            key={levelData.level}
            level={levelData.level}
            title={levelData.title}
            condition={levelData.condition}
            Icon={levelData.Icon}
          />
        ))}
      </div>
    </div>
  );
}