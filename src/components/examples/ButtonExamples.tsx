import { Button } from '@/components';

/**
 * Button 컴포넌트 예제
 *
 * - variant: 버튼 유형
 *   - 'primary' | 'secondary' | 'text'
 *
 * - color: 텍스트 색상
 *   - 'red' | 'gray'
 *
 * - size: 버튼 크기 (padding 기준)
 *   - 'lg' | 'md' | 'sm' | 'xs'
 *
 * - rounded: border-radius 크기
 *   - 'full' | 'lg' | 'md' | 'sm'
 *
 * - fontType: 폰트 스타일(global.css 에 정의된 클래스 사용)
 *   - 'body-1' | 'title-3'
 *
 * - 필요한 경우 className 으로 width, margin 등 추가 스타일 커스터마이즈 가능
 *   예시: className="w-full" → 너비를 부모 요소에 맞게 확장
 */

const ButtonExamples = () => {
  return (
    <div className="mt-2 flex flex-col items-start gap-4">
      {/* 예시 1) 가장 기본적인 Primary Red, Large 사이즈 + 가로 전체 너비 + 큰 폰트 */}
      <Button
        variant="primary"
        color="red"
        size="lg"
        fontType="title-3"
        className="w-full" // 버튼을 부모 너비에 맞게 확장
      >
        다음
      </Button>

      {/* 예시 2) Secondary Gray, Medium 사이즈 + 전체 라운드 */}
      <Button variant="secondary" color="gray" size="md" rounded="full">
        확인
      </Button>

      {/*  예시 3) Primary Gray, Small 사이즈 + 전체 라운드 + 긴 텍스트 (내용에 따라 너비 확장됨) */}
      <Button variant="primary" color="gray" size="sm" rounded="full">
        어쩌구저쩌구긴텍스트
      </Button>

      {/* 예시 4) Secondary Red, X-Small 사이즈 + 전체 라운드 + 폰트 크기 body-1 */}
      <Button variant="secondary" color="red" size="xs" rounded="full" fontType="body-1">
        확인
      </Button>

      {/* 예시 5) Text 타입 버튼 (배경/테두리 없음, 텍스트만 표시) */}
      <Button variant="text" color="gray">
        텍스트 버튼
      </Button>
      {/* 예시 6) Text 타입 버튼 + disabled */}
      <Button variant="text" color="gray" disabled>
        텍스트 버튼
      </Button>
    </div>
  );
};

export default ButtonExamples;
