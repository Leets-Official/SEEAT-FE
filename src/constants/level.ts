import React from 'react';
import { LevelCharacter1,LevelCharacter2,LevelCharacter3,LevelCharacter4 } from '@/assets';


export interface Level {
  id: number;
  title: string;
  CharacterComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}
export const LEVEL_DATA: Level[] = [
  { id: 1, title: '레벨1 캐릭터이름', CharacterComponent: LevelCharacter1 },
  { id: 2, title: '레벨2 캐릭터이름', CharacterComponent: LevelCharacter2 },
  { id: 3, title: '레벨3 캐릭터이름', CharacterComponent: LevelCharacter3 },
  { id: 4, title: '레벨4 캐릭터이름', CharacterComponent: LevelCharacter4 },
];
