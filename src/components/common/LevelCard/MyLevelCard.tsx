import React from 'react';
import { LEVEL_DATA } from '@/constants/level';          
import { LEVELS_DATA } from '@/constants/levelcondition';  

interface MyLevelCardProps {
  userLevel: number;
  userProgress: number; 
  currentReviewCount: number; 
  currentLikeCount: number;  
}
const MyLevelCard: React.FC<MyLevelCardProps> = ({ 
  userLevel, 
  userProgress, 
  currentReviewCount, 
  currentLikeCount 
}) => {
  const currentLevelData = LEVEL_DATA.find(level => level.id === userLevel);
  const nextLevelInfo = LEVELS_DATA.find(level => level.level === userLevel + 1);

  if (!currentLevelData) {
    return <div>레벨 정보를 불러올 수 없습니다.</div>;
  }

  const { title: levelTitle, CharacterComponent } = currentLevelData;

  const renderNextLevelTask = () => {
    if (!nextLevelInfo) {
      return '최고 레벨입니다!';
    }

    const reviewGoalMatch = nextLevelInfo.condition.match(/후기 (\d+)개/);
    const likeGoalMatch = nextLevelInfo.condition.match(/좋아요 (\d+)개/);

    const reviewGoal = reviewGoalMatch ? parseInt(reviewGoalMatch[1], 10) : 0;
    const likeGoal = likeGoalMatch ? parseInt(likeGoalMatch[1], 10) : 0;
    
    const remainingReviews = Math.max(0, reviewGoal - currentReviewCount);
    const remainingLikes = Math.max(0, likeGoal - currentLikeCount);

    return (
      <>
        후기 <span className="text-red-400">{remainingReviews}</span>개, 좋아요 <span className="text-red-400">{remainingLikes}</span>개 누르기
      </>
    );
  };

  return (
    <div className="w-[335px] h-[320px] bg-[#4242424D] rounded-lg p-4 flex flex-col items-center justify-around mt-4 mx-auto">
      <CharacterComponent className="w-[150px] h-[150px]" />

      <p className="text-center">
        <span className="text-title-1 text-red-400">Lv.{userLevel}</span>
        <span className="text-title-4 text-white"> {levelTitle}</span> 
      </p>

      <div className="w-[295px] h-[12px] bg-gray-950 rounded-full">
        <div className="h-full bg-red-300 rounded-full" style={{ width: `${userProgress}%` }} />
      </div>
    
      <p className="text-caption-3 text-gray-300 text-center">
        다음 레벨까지 할 일은?
        <br />
        {renderNextLevelTask()}
      </p>
    </div>
  );
};

export default MyLevelCard;