import { useState } from 'react';
import Button from '@/components/common/Button';
import Textarea from '@/components/common/Textarea/Textarea';
import HeaderBasic from '@/components/common/Header/HeaderBasic';

export default function MyFeedbackPage() {
  const [feedbackText, setFeedbackText] = useState('');
  const MAX_LENGTH = 1000;


  const isButtonDisabled = feedbackText.length==0;

  return (
    <div className="flex h-screen flex-col bg-gray-900 text-white">
      {/* global.css에 정의된 기본 레이아웃 적용 */}
      <div className="mx-auto flex w-full max-w-[400px] flex-grow flex-col px-4">
        <HeaderBasic>
          {/* global.css의 타이포그래피 클래스로 수정 */}
          <h1 className="text-title-3">의견 보내기</h1>
        </HeaderBasic>

        <main className="flex flex-grow flex-col pt-6 pb-4">
          <Textarea
            title="SEEAT에게 하고 싶은 말을 보내주세요"
            maxLength={MAX_LENGTH}
            value={feedbackText}
            onValueChange={setFeedbackText}
            height="h-[180px]"
          />

          <div className="flex-grow" />

          <div className="mt-4">
            <Button
              variant="primary"
              color="red"
              size="lg"
              className="w-full"
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

//색바뀌는거랑 디자인다름 