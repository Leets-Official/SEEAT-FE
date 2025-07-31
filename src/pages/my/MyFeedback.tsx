import { useState } from 'react';
import { Button, Header } from '@/components';

export default function MyFeedbackPage() {
  const [feedbackText, setFeedbackText] = useState('');
  const MAX_LENGTH = 1000;

  const isButtonDisabled = feedbackText.length === 0;

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      setFeedbackText(e.target.value.slice(0, MAX_LENGTH));
    } else {
      setFeedbackText(e.target.value);
    }
  };

  return (
    <div className="flex h-screen flex-col text-white">
      <div className="mx-auto flex w-full max-w-md flex-grow flex-col px-4">
        {/* 헤더 */}
        <Header leftSection="BACK" rightSection="KEBAB">
          의견 보내기
        </Header>

        <main className="flex flex-grow flex-col px-2 pt-[88px] pb-4">
          <div className="flex w-full flex-col gap-2">
            <label className="text-body-2 text-gray-300">SEEAT에게 하고 싶은 말을 보내주세요</label>

            {/* textarea와 글자수 카운터를 감싸는 컨테이너 */}
            <div className="relative w-full">
              <textarea
                value={feedbackText}
                onChange={handleTextChange}
                placeholder="피드백을 남겨주시면 SEEAT이 더 좋은 서비스를 제공할 수 있어요!"
                className="placeholder:text-body-2 h-[116px] w-full resize-none rounded-lg border border-gray-800 bg-gray-900 p-3 pr-14 outline-none placeholder:text-gray-500"
              />
              {/* 글자 수 카운터 */}
              <div className="text-caption-3 absolute right-3 bottom-3 text-gray-500">
                {feedbackText.length}/{MAX_LENGTH}
              </div>
            </div>
          </div>
          <div className="flex-grow" />

          {/* 하단 버튼 영역 */}
          <div className="mt-4">
            <Button
              variant="primary"
              color={isButtonDisabled ? 'gray' : 'red'}
              size="lg"
              className="w-full"
              fontType="title-3"
              disabled={isButtonDisabled}
              onClick={() => alert('피드백이 전송되었습니다!')}
            >
              보내기
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}
