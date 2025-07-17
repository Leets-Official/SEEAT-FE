import { useState } from 'react';
import { Badge, Button, InputField } from '@/components';

export default function MovieInfoForm() {
  const [title, setTitle] = useState('');
  const [cinema, setCinema] = useState('');
  const [seatInput, setSeatInput] = useState('');
  const [seats, setSeats] = useState<string[]>([]);

  /*const handleAddSeat = () => {
    const trimmed = seatInput.trim();
    if (trimmed && !seats.includes(trimmed)) {
      setSeats([...seats, trimmed]);
      setSeatInput('');
    }
  };*/

  const handleRemoveSeat = (seat: string) => {
    setSeats((prev) => prev.filter((s) => s !== seat));
  };

  const isFormValid = title.trim() && cinema.trim() && seats.length > 0;

  return (
    <div className="min-h-screen bg-black px-5 py-6">
      <h2 className="text-title-2 mb-8 text-white">관람하신 영화의 정보를 알려주세요</h2>

      {/* 영화 제목 */}
      <div className="mb-4">
        <InputField
          label="영화 제목"
          value={title}
          onChange={setTitle}
          placeholder="관람하신 영화 제목을 알려주세요"
        />
      </div>

      {/* 영화관 */}
      <div className="mb-4">
        <InputField
          label="영화관"
          value={cinema}
          onChange={setCinema}
          placeholder="관람하신 영화관을 선택해주세요"
        />
      </div>

      {/* 좌석 */}
      <div className="mb-2">
        <InputField
          label="좌석"
          value={seatInput}
          onChange={setSeatInput}
          placeholder="관람하신 좌석을 선택해주세요"
          helperText="좌석을 여러 개 추가할 수 있어요."
          //onClickPlus={handleAddSeat}
        />
      </div>

      {/* 좌석 리스트 */}
      <div className="mt-2 mb-10 flex flex-wrap gap-2">
        {seats.map((seat) => (
          <Badge key={seat} type="removable" onRemove={() => handleRemoveSeat(seat)}>
            {seat}
          </Badge>
        ))}
      </div>

      {/* 다음 버튼 */}
      <Button variant="primary" color="gray" size="lg" disabled={!isFormValid} className="w-full">
        다음
      </Button>
    </div>
  );
}
