export type TagKey = 'sound' | 'environment' | 'companion';

export interface TagSectionConfig {
  key: TagKey;
  title: string;
  options: string[];
  required: boolean;
}

export const tagSections: TagSectionConfig[] = [
  {
    key: 'sound',
    title: '음향',
    required: true,
    options: ['좋아요', '아무튼좋아요', '이런게좋아요', '어쩌구저쩌구', '좋다고요', '저쩌구'],
  },
  {
    key: 'environment',
    title: '관람 환경',
    required: true,
    options: ['좋아요', '아무튼좋아요', '이런게좋아요', '어쩌구저쩌구', '좋다고요', '저쩌구'],
  },
  {
    key: 'companion',
    title: '동반인',
    required: false,
    options: ['혼자', '친구', '연인', '형제자매', '부모님', '아무튼...'],
  },
];
