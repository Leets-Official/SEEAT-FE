export type TagKey = '음향' | '관람환경' | '동반인';

export interface TagSectionConfig {
  key: TagKey;
  title: string;
  options: string[];
  required: boolean;
}

export const TAG_TYPE_TITLE_MAP: Record<TagKey, string> = {
  음향: '음향',
  관람환경: '관람 환경',
  동반인: '동반인',
};

export const REQUIRED_TAG_KEYS: TagKey[] = ['음향', '관람환경'];
