import React from 'react';
import { LevelCharacter1,LevelCharacter2,LevelCharacter3,LevelCharacter4 } from '@/assets';


export interface Level {
  id: number;
  title: string;
  CharacterComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}
export const LEVEL_DATA: Level[] = [
  { id: 1, title: '옥수수 인턴 코니', CharacterComponent: LevelCharacter1 },
  { id: 2, title: '영화관 탐험가 코니', CharacterComponent: LevelCharacter2 },
  { id: 3, title: '영화관 평론가 코니', CharacterComponent: LevelCharacter3 },
  { id: 4, title: '전설의 팝콘 코니', CharacterComponent: LevelCharacter4 },
];
