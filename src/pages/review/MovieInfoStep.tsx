import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Badge, InputField, ReviewStepLayout } from '@/components';
import { useReviewStore } from '@/store';

export default function MovieInfoForm() {
  const { movieTitle, setTitle, cinema, setCinema, seats, addSeat, removeSeat, isInitialized } =
    useReviewStore();

  const [seatInput, setSeatInput] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  //입력 상태 불완전 하면 초기 단계로...
  useEffect(() => {
    if (!isInitialized) {
      navigate('/review');
    }
  }, [isInitialized, navigate]);

  // 영화관 선택 후 돌아왔을 때 state 반영
  useEffect(() => {
    if (location.state?.cinema) {
      setCinema(location.state.cinema);
    }
  }, [location.state?.cinema, setCinema]);

  const isFormValid = movieTitle.trim() && cinema?.name && seats.length > 0;

  const handleAddSeat = () => {
    const trimmed = seatInput.trim();
    if (trimmed && !seats.includes(trimmed)) {
      addSeat(trimmed);
      setSeatInput('');
    }
  };

  const handleNext = () => {
    navigate('/review/rating');
  };

  return (
    <ReviewStepLayout
      title="관람하신 영화의 정보를 알려주세요"
      onClickNext={handleNext}
      disabled={!isFormValid}
    >
      <div className="flex flex-col gap-5 px-1 py-5">
        <InputField
          label="영화 제목"
          value={movieTitle}
          onChange={setTitle}
          placeholder="관람하신 영화 제목을 알려주세요"
        />

        <InputField
          label="영화관"
          value={
            cinema && cinema.name
              ? cinema.hall
                ? `${cinema.name} (${cinema.hall})`
                : cinema.name
              : ''
          }
          readOnly
          onChange={() => {}}
          placeholder="관람하신 영화관을 선택해주세요"
          onClickPlus={() => navigate('/review/info/cinema')}
        />

        {/*추후 좌석 페이지 연결 시 readOnly 속성 추가*/}
        <InputField
          label="좌석"
          value={seatInput}
          onChange={setSeatInput}
          placeholder="관람하신 좌석을 선택해주세요"
          helperText="좌석을 여러 개 추가할 수 있어요."
          onClickPlus={handleAddSeat}
        />

        <div className="flex flex-wrap gap-3">
          {seats.map((seat) => (
            <Badge key={seat} type="removable" onRemove={() => removeSeat(seat)}>
              {seat}
            </Badge>
          ))}
        </div>
      </div>
    </ReviewStepLayout>
  );
}
