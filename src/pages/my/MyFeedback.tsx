import { useNavigate } from 'react-router-dom';
import { useToastStore } from '@/store'; 
import { postFeedback } from '@/api//feedback/feedback.api'; 
import { useState } from 'react';
import { Button, Header } from '@/components';

export default function MyFeedbackPage() {
  const [feedbackText, setFeedbackText] = useState('');
  const MAX_LENGTH = 1000;
  const isButtonDisabled = feedbackText.length === 0;

  const navigate = useNavigate();
  const { show } = useToastStore(); 

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setFeedbackText(value.length > MAX_LENGTH ? value.slice(0, MAX_LENGTH) : value);
  };

  const handleSubmit = async () => {
    try {
      await postFeedback({ feedbackContent: feedbackText });
      show('SEEAT 팀에게 의견을 보냈어요!'); 
      navigate('/my'); 
    } catch (err) {
      console.error('피드백 전송 실패:', err);
      show('의견 보내기에 실패했어요.'); 
    }
  };

  return (
    <div className="flex h-screen flex-col text-white">
      <div className="mx-auto flex w-full max-w-md flex-grow flex-col px-4">
        <Header leftSection="BACK" className="bg-gray-900">
          의견 보내기
        </Header>

        <main className="flex flex-grow flex-col px-2 pt-[88px] pb-4">
          <div className="flex w-full flex-col gap-2">
            <label className="text-body-2 text-gray-300">SEEAT에게 하고 싶은 말을 보내주세요</label>
            <div className="relative w-full">
              <textarea
                value={feedbackText}
                onChange={handleTextChange}
                placeholder="피드백을 남겨주시면 SEEAT이 더 좋은 서비스를 제공할 수 있어요!"
                className="placeholder:text-body-2 h-[116px] w-full resize-none rounded-lg border border-gray-800 bg-gray-900 p-3 pr-14 outline-none placeholder:text-gray-500"
              />
              <div className="text-caption-3 absolute right-3 bottom-3 text-gray-500">
                {feedbackText.length}/{MAX_LENGTH}
              </div>
            </div>
          </div>
          <div className="flex-grow" />

          <div className="mt-4">
            <Button
              variant="primary"
              color={isButtonDisabled ? 'gray' : 'red'}
              size="lg"
              className="w-full"
              fontType="title-3"
              disabled={isButtonDisabled}
              onClick={handleSubmit}
            >
              보내기
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}
