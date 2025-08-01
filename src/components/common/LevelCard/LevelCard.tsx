import React from 'react';
import { LEVEL_DATA } from '@/constants/level';
import type { Level } from '@/constants/level';
// 다음 레벨의 목표치를 가져오기 위해 import 추가
import { LEVELS_DATA } from '@/constants/levelcondition'; 

interface LevelCardProps {
  userLevel: number;
  userProgress: number;
  // API로 받아올 사용자의 현재 달성치를 props로 추가
  currentReviewCount: number;
  currentLikeCount: number;
}

const LevelCard: React.FC<LevelCardProps> = ({ 
  userLevel, 
  userProgress, 
  currentReviewCount, 
  currentLikeCount 
}) => {
  // --- 현재 레벨 정보 표시 로직 (기존과 동일) ---
  const foundLevelData = LEVEL_DATA.find((level: Level) => level.id === userLevel);
  const levelDataToDisplay = foundLevelData || LEVEL_DATA[0];

  if (!levelDataToDisplay) {
    return <div>레벨 정보를 불러올 수 없습니다.</div>;
  }
  
  const { id: displayLevel, title: levelTitle, CharacterComponent } = levelDataToDisplay;

  // --- 다음 레벨까지 남은 개수 계산 로직 (새로 추가) ---
  const nextLevelGoalData = LEVELS_DATA.find(level => level.level === userLevel + 1);

  let nextLevelTask: React.ReactNode = "최고 레벨입니다!";

  if (nextLevelGoalData) {
    // 정규표현식으로 목표치(숫자)를 추출합니다.
    const reviewGoalMatch = nextLevelGoalData.condition.match(/후기 (\d+)개/);
    const likeGoalMatch = nextLevelGoalData.condition.match(/좋아요 (\d+)개/);

    // 추출한 목표치가 있을 경우에만 계산합니다.
    const reviewGoal = reviewGoalMatch ? parseInt(reviewGoalMatch[1], 10) : 0;
    const likeGoal = likeGoalMatch ? parseInt(likeGoalMatch[1], 10) : 0;

    // 남은 개수를 계산합니다. (0보다 작아지지 않도록 Math.max 사용)
    const remainingReviews = Math.max(0, reviewGoal - currentReviewCount);
    const remainingLikes = Math.max(0, likeGoal - currentLikeCount);

    // 화면에 표시할 JSX를 생성합니다.
    nextLevelTask = (
      <>
        후기 <span className="text-red-400">{remainingReviews}</span>개, 좋아요 <span className="text-red-400">{remainingLikes}</span>개 누르기
      </>
    );
  }

  return (
    <section className="h-[140px] rounded-lg bg-gray-800/30 p-4">
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <div className="flex items-baseline gap-2">
            <span className="text-title-1 text-red-400">Lv.{displayLevel}</span>
            <span className="text-title-4 text-white">{levelTitle}</span>
          </div>
          <div className="mt-2 h-2 w-full rounded-full bg-gray-950">
            <div className="h-full rounded-full bg-red-300" style={{ width: `${userProgress}%` }} />
          </div>
          <p className="mt-3 text-caption-3 text-gray-300">
            다음 레벨까지 할 일은... <br />
            {/* 하드코딩된 'OO' 대신 계산된 JSX로 교체 */}
            {nextLevelTask}
          </p>
        </div>
        <div className="flex h-24 w-24 shrink-0 items-center justify-center">
          <CharacterComponent />
        </div>
      </div>
    </section>
  );
};

export default LevelCard;