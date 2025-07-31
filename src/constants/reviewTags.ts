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
    options: ['#음향최고', '#음향아쉬움', '#소리선명', '#음질만족', '#돌비사운드굿', '#잡음있음'],
  },
  {
    key: 'environment',
    title: '관람 환경',
    required: true,
    options: ['#좌석편함', '#시야좋음', '#청결상태굿', '#주변산만', '#출입구근처', '#조용함'],
  },
  {
    key: 'companion',
    title: '동반인',
    required: false,
    options: ['#혼자왔어요', '#친구와함께', '#연인과', '#형제자매와', '#부모님과', '#자녀와'],
  },
];
