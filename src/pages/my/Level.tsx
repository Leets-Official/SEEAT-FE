import React from 'react';
import { HeaderBasic } from '@/components';
import { LevelCharacter1, LevelCharacter2, LevelCharacter3, LevelCharacter4 } from '@/assets';

const levels = [
  {
    level: 1,
    title: '레벨 1 이름',
    condition: 'seeat 가입하기',
    Icon: LevelCharacter1,
  },
  {
    level: 2,
    title: '레벨 2 이름',
    condition: '후기 2개 작성하기\n좋아요 5개 누르기',
    Icon: LevelCharacter2,
  },
  {
    level: 3,
    title: '레벨 3 이름',
    condition: '후기 10개 작성하기\n좋아요 25개 누르기',
    Icon: LevelCharacter3,
  },
  {
    level: 4,
    title: '레벨 4 이름',
    condition: '후기 40개 작성하기\n좋아요 100개 누르기',
    Icon: LevelCharacter4,
  },
];

export default function LevelPage() {
  return (
    <div className="px-4 py-3 bg-gray-900 text-white min-h-screen font-suit">
      <HeaderBasic>{null}</HeaderBasic>

      {/* 현재 레벨 박스 */}
      <div className="w-[335px] h-[320px] bg-[#4242424D] rounded-lg p-4 flex flex-col items-center justify-around mt-4 mx-auto">
        
        {/* ----- ⬇️ [수정] 캐릭터를 감싸던 내부 박스 제거 ----- */}
        <LevelCharacter3 className="w-[150px] h-[150px]" />
        {/* ----- ⬆️ [수정] 캐릭터를 감싸던 내부 박스 제거 ----- */}
        
        <p className="text-center">
          <span className="text-title-1 text-red-400">Lv.3</span>
          <span className="text-title-4 text-white"> 영화계의 권위자</span>
        </p>

        <div className="w-[295px] h-[12px] bg-gray-950 rounded-full">
          <div className="h-full bg-red-300 rounded-full" style={{ width: '45%' }}></div>
        </div>
        <p className="text-caption-3 text-gray-300 text-center">
          다음 레벨까지 할 일은?<br />
          후기 <span className="text-red-400">00</span>개, 좋아요 <span className="text-red-400">00</span>개 누르기
        </p>
      </div>

      {/* 구분선 */}
      <div className="w-full border-t border-[#424242] mt-6 mb-6" />

      {/* 레벨 리스트 */}
      <div className="space-y-4">
        {levels.map(({ level, title, condition, Icon }) => (
          <div
            key={level}
            className="w-[335px] h-[120px] mx-auto flex justify-between items-start"
          >
            <div className="w-[120px] h-[120px] bg-[#4242424D] rounded-lg flex items-center justify-center shrink-0">
              <Icon className="w-[100px] h-[100px]" />
            </div>
            <div className="w-[195px] flex flex-col pt-2">
              <p className="text-title-3 text-white">Lv.{level} {title}</p>
              <div className="flex pt-1 text-body-2">
                <span className="text-gray-500 shrink-0">달성 조건</span>
                <div className="flex flex-col">
                  {condition.split('\n').map((line, index) => (
                    <span key={index} className="text-red-300">
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}