import React from 'react';
import { LEVEL_DATA } from '@/constants/level';
import type { Level } from '@/constants/level';

interface LevelCardProps {
  userLevel: number;
  userProgress: number;
}
const LevelCard: React.FC<LevelCardProps> = ({ userLevel, userProgress }) => {
  // userLevel에 해당하는 레벨 데이터를 찾습니다.
  const foundLevelData = LEVEL_DATA.find((level: Level) => level.id === userLevel);

  // 만약 해당하는 데이터가 없으면, LEVEL_DATA의 첫 번째 항목(Lv. 1)을 기본값으로 사용합니다.
  const levelDataToDisplay = foundLevelData || LEVEL_DATA[0];

  // level.ts 파일이 비어있을 경우에 대한 방어 코드
  if (!levelDataToDisplay) {
    return <div>레벨 정보를 불러올 수 없습니다.</div>;
  }
  
  // 화면에 표시할 데이터를 구조분해 할당합니다.
  const { id: displayLevel, title: levelTitle, CharacterComponent } = levelDataToDisplay;

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
            후기 <span className="text-red-400">OO</span>개, 좋아요 <span className="text-red-400">OO</span>개
            누르기
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