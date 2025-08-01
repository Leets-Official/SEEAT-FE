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
    options: ['#음향최고', '#음질깨끗', '#몰입감좋음', '#서라운드좋음', '#소리선명', '#현장감있음'],
  },
  {
    key: 'environment',
    title: '관람 환경',
    required: true,
    options: [
      '#좌석편함',
      '#시야탁트임',
      '#쾌적한환경',
      '#입출입편리',
      '#청결유지잘됨',
      '#분위기좋음',
    ],
  },
  {
    key: 'companion',
    title: '동반인',
    required: false,
    options: ['#혼자왔어요', '#친구와함께', '#연인과', '#형제자매와', '#부모님과', '#자녀와'],
  },
];
