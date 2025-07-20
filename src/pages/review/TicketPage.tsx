import { Button, Header } from '@/components';
import { useNavigate } from 'react-router-dom';
import { useReviewStore } from '@/store';
import { useEffect } from 'react';

export const TicketUploadStep = () => {
  const { setInitialized } = useReviewStore();

  useEffect(() => {
    // 리뷰 작성 시작 시 상태 초기화
    setInitialized();
  }, [setInitialized]);
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/review/info');
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 py-6">
      <Header title="" showLike={false} showBookmark={false} />
      {/* 상단 */}
      <div className="flex flex-col gap-6 px-5 pt-4">
        <div className="w-full max-w-[430px] text-left">
          <h2 className="text-title-2 leading-snug text-white">
            티켓을 인식하고 빠르게 후기 남겨봐요
          </h2>
        </div>

        {/* 로고 or 티켓 영역 자리 (임시 checker 배경) */}
        <div className="flex justify-center pt-15">
          <div className="h-[149px] w-[160px] flex-shrink-0 bg-gray-700 bg-[url('/checker.png')] bg-cover bg-center" />
        </div>
      </div>

      {/*버튼 영역*/}

      <div className="mt-auto flex flex-col items-start gap-[10px] px-[20px] py-[10px]">
        <Button
          variant="primary"
          color="red"
          size="lg"
          fontType="title-3"
          className="w-full"
          //onClick={} <=티켓 있을 때 인식하는 페이지
        >
          티켓 올리기
        </Button>

        {/* 티켓 없을 때 선택 텍스트 버튼 */}
        <Button
          variant="text"
          color="red"
          fontType="body-1"
          className="w-full text-center"
          onClick={handleNext}
        >
          티켓이 없어요
        </Button>
      </div>
    </div>
  );
};
