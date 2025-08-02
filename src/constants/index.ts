import { cinemaData } from '@/constants/cinema';
import {
  type TagKey,
  type TagSectionConfig,
  TAG_TYPE_TITLE_MAP,
  REQUIRED_TAG_KEYS,
} from '@/constants/reviewTags';
import { cinemaInfoMap } from './theaterInfo';

export { cinemaData, cinemaInfoMap, TAG_TYPE_TITLE_MAP, REQUIRED_TAG_KEYS };
export type { TagSectionConfig, TagKey };
