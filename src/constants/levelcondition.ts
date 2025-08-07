import { LevelCharacter1, LevelCharacter2, LevelCharacter3, LevelCharacter4 } from '@/assets';
import React from 'react';

export interface Level {
  level: number;
  title: string;
  condition: string;
  Icon: React.ElementType;
}

export const LEVELS_DATA: Level[] = [
  {
    level: 1,
    title: '옥수수 인턴 코니',
    condition: 'seeat 가입하기',
    Icon: LevelCharacter1,
  },
  {
    level: 2,
    title: '영화관 탐험가 코니',
    condition: '후기 2개 작성하기\n좋아요 5개 누르기',
    Icon: LevelCharacter2,
  },
  {
    level: 3,
    title: '영화관 평론가 코니',
    condition: '후기 10개 작성하기\n좋아요 25개 누르기',
    Icon: LevelCharacter3,
  },
  {
    level: 4,
    title: '전설의 팝콘 코니',
    condition: '후기 40개 작성하기\n좋아요 100개 누르기',
    Icon: LevelCharacter4,
  },
];