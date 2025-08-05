import React from 'react';
import { LEVEL_DATA } from '@/constants/level';
import type { Level } from '@/constants/level';
import { LEVELS_DATA } from '@/constants/levelcondition';

const calculateUserLevel = (reviewCount: number, likeCount: number): number => {
  const sortedLevels = [...LEVELS_DATA].sort((a, b) => b.level - a.level);

  for (const levelInfo of sortedLevels) {
    if (levelInfo.level <= 1) continue;

    const reviewGoalMatch = levelInfo.condition.match(/후기 (\d+)개/);
    const likeGoalMatch = levelInfo.condition.match(/좋아요 (\d+)개/);
    const reviewGoal = reviewGoalMatch ? parseInt(reviewGoalMatch[1], 10) : 0;
    const likeGoal = likeGoalMatch ? parseInt(likeGoalMatch[1], 10) : 0;

    if (reviewCount >= reviewGoal && likeCount >= likeGoal) {
      return levelInfo.level;
    }
  }
  return 1;
};

interface LevelCardProps {
  userProgress: number;
  currentReviewCount: number;
  currentLikeCount: number;
}

const LevelCard: React.FC<LevelCardProps> = ({
  userProgress,
  currentReviewCount,
  currentLikeCount,
}) => {
  const userLevel = calculateUserLevel(currentReviewCount, currentLikeCount);
  const foundLevelData = LEVEL_DATA.find((level: Level) => level.id === userLevel);
  const levelDataToDisplay = foundLevelData || LEVEL_DATA[0];

  if (!levelDataToDisplay) {
    return <div>레벨 정보를 불러올 수 없습니다.</div>;
  }

  const { id: displayLevel, title: levelTitle, CharacterComponent } = levelDataToDisplay;

  const nextLevelGoalData = LEVELS_DATA.find(level => level.level === userLevel + 1);

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

          {nextLevelGoalData ? (
            (() => {
              const reviewGoalMatch = nextLevelGoalData.condition.match(/후기 (\d+)개/);
              const likeGoalMatch = nextLevelGoalData.condition.match(/좋아요 (\d+)개/);
              const reviewGoal = reviewGoalMatch ? parseInt(reviewGoalMatch[1], 10) : 0;
              const likeGoal = likeGoalMatch ? parseInt(likeGoalMatch[1], 10) : 0;
              const remainingReviews = Math.max(0, reviewGoal - currentReviewCount);
              const remainingLikes = Math.max(0, likeGoal - currentLikeCount);

              return (
                <p className="mt-3 text-caption-3 text-gray-300">
                  다음 레벨까지 할 일은... <br />
                  후기 <span className="text-red-400">{remainingReviews}</span>개, 좋아요{' '}
                  <span className="text-red-400">{remainingLikes}</span>개 누르기
                </p>
              );
            })()
          ) : (
            <p className="mt-3 text-caption-3 text-gray-300">최고 레벨입니다!</p>
          )}
        </div>
        <div className="flex h-24 w-24 shrink-0 items-center justify-center">
          <CharacterComponent />
        </div>
      </div>
    </section>
  );
};

export default LevelCard;