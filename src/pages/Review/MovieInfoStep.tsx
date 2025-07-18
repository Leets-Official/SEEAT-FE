import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Badge, InputField } from '@/components';
import ReviewStepLayout from './ReviewLayout';
import { useReviewStore } from '@/store';

export default function MovieInfoForm() {
  const navigate = useNavigate();
  const location = useLocation();

  const { movieTitle, setTitle, cinema, setCinema, seats, addSeat, removeSeat } = useReviewStore();

  const [seatInput, setSeatInput] = useState('');

  const handleAddSeat = () => {
    const trimmed = seatInput.trim();
    if (trimmed && !seats.includes(trimmed)) {
      addSeat(trimmed);
      setSeatInput('');
    }
  };

  const handleNext = () => {
    navigate('/review/rating'); // 실제 다음 스텝 경로
  };

  // 영화관 선택 후 돌아왔을 때 state 반영
  useEffect(() => {
    if (location.state?.cinema) {
      setCinema(location.state.cinema);
    }
  }, [location.state?.cinema, setCinema]);

  const isFormValid = movieTitle.trim() && cinema.trim() && seats.length > 0;

  return (
    <ReviewStepLayout
      title="티켓을 인식하고 빠르게 후기 남겨봐요"
      onClickNext={handleNext}
      disabled={!isFormValid}
    >
      <div className="flex flex-col gap-5">
        <InputField
          label="영화 제목"
          value={movieTitle}
          onChange={setTitle}
          placeholder="관람하신 영화 제목을 알려주세요"
        />

        <InputField
          label="영화관"
          value={cinema}
          onChange={setCinema}
          readOnly
          placeholder="관람하신 영화관을 선택해주세요"
          onClickPlus={() => navigate('/review/info/cinema')}
        />

        <InputField
          label="좌석"
          value={seatInput}
          onChange={setSeatInput}
          placeholder="관람하신 좌석을 선택해주세요"
          helperText="좌석을 여러 개 추가할 수 있어요."
          onClickPlus={handleAddSeat}
        />
      </div>

      <div className="flex flex-wrap gap-4 pt-2">
        {seats.map((seat) => (
          <Badge key={seat} type="removable" onRemove={() => removeSeat(seat)}>
            {seat}
          </Badge>
        ))}
      </div>
    </ReviewStepLayout>
  );
}
