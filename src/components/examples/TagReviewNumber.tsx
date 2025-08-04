import TagReviewNumber from '@/components/common/TagReviewNumber/TagReviewNumber';

export default function TagReviewNumberExample() {
  return (
    <div className="p-4">
      <div className="mx-auto flex w-fit flex-col items-start gap-10">
        {/* 1. 음향 태그 */}
        <div className="w-full">
          <TagReviewNumber
            iconType="sound"
            title="음향에 대한 태그 내용"
            count={132}
          />
        </div>

        {/* 2. 관람 환경 태그 */}
        <div className="w-full">
          <TagReviewNumber
            iconType="environment"
            title="관람 환경에 대한 태그 내용"
            count={98}
          />
        </div>

        {/* 3. 동반인 태그 */}
        <div className="w-full">
          <TagReviewNumber
            iconType="companion"
            title="동반인에 대한 태그 내용"
            count={204}
          />
        </div>
      </div>
    </div>
  );
}