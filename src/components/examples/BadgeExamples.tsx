import { Badge } from '@/components';

/**
 *
 * 필수 props:
 * - type: 'tag' | 'info' | 'removable'
 * - children: string | ReactNode (텍스트 또는 내용)
 *
 * 선택 props:
 * - size: 'sm' | 'md' (tag 타입일 때만 적용됨)
 * - className: Tailwind 유틸리티 확장용
 * - onRemove: removable 타입일 때만 X 아이콘 클릭 시 호출되는 함수
 *
 *
 * - tag 타입일 경우 자동으로 `#`이 붙음
 * - removable 타입은 X 아이콘 포함
 */

export default function BadgeExample() {
  return (
    <div>
      <div className="mx-auto flex max-w-md flex-col items-start gap-10">
        {/* 1. 태그 뱃지 (기본 sm) */}
        <div className="w-full">
          <h2 className="mb-2 text-lg font-semibold">1. 태그 뱃지 (size: sm)</h2>
          <Badge type="tag" size="sm">
            태그
          </Badge>
        </div>

        {/* 2. 태그 뱃지 (size: md) */}
        <div className="w-full">
          <h2 className="mb-2 text-yellow-warn font-semibold">2. 태그 뱃지 (size: md)</h2>
          <Badge type="tag" size="md">
            태그
          </Badge>
        </div>

        {/* 3. 정보 뱃지 */}
        <div className="w-full">
          <h2 className="mb-2 text-lg font-semibold">3. 정보 뱃지</h2>
          <Badge type="info">후기 정보</Badge>
        </div>

        {/* 4. removable 뱃지 */}
        <div className="w-full">
          <h2 className="mb-2 text-lg font-semibold">4. 삭제 가능한 뱃지 (removable)</h2>
          <Badge
            type="removable"
            onRemove={() => {
              alert('삭제됨');
            }}
          >
            검색어
          </Badge>
        </div>
      </div>
    </div>
  );
}
