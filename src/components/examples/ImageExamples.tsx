import { Image } from '@/components';
import { getRandomImage } from '@/__mocks/mockImage';

/**
 * Image 컴포넌트 예제
 *
 * - src: 이미지 URL (필수)
 * - alt: 이미지 설명 (접근성)
 * - className: 추가 스타일 클래스
 * - aspectRatio: 이미지 비율 (예: 'aspect-[3/2]', 'aspect-[1/1]')
 * - rounded: 테두리 둥글기 (예: 'rounded-md', 'rounded-full')
 *
 *
 */
export default function ImageExample() {
  return (
    <div className="px-4 py-10">
      <div className="flex flex-col items-center gap-8">
        {/* 기본 사용 예제 */}
        <section className="w-full max-w-[360px] text-left">
          {/** 기본 이미지  */}
          <Image
            src={getRandomImage(200, 300)} // 실제 이미지 URL 추가 필요
            alt="기본이미지" // 실제 이미지 설명 추가 필요
            className="h-[200px] w-[300px]"
            aspectRatio="aspect-[3/2]"
            rounded="rounded-md"
          />
        </section>

        {/* 썸네일 (1:1) 예제 */}
        <section className="w-full max-w-[360px] text-left">
          <Image
            src={getRandomImage(120, 120)} // 실제 이미지 URL 추가 필요
            alt="기본이미지"
            className="h-[120px] w-[120px]"
            aspectRatio="aspect-[1/1]"
            rounded="rounded-md"
          />
        </section>

        {/* 에러 fallback 테스트 */}
        <section className="w-full max-w-[360px] text-left">
          <Image
            src={'https://example.com/nonexistent-image.jpg'} // 존재하지 않는 이미지 URL
            alt="기본이미지"
            className="h-[200px] w-[300px]"
            aspectRatio="aspect-[3/2]"
            rounded="rounded-md"
          />
        </section>
      </div>
    </div>
  );
}
