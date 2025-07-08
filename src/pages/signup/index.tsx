import Button from '@/components/common/Button/Button';

const Signup = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <Button variant="primary" color="red" size="lg" fontType="title-3">
        다음
      </Button>
      <Button variant="secondary" color="gray" size="sm" rounded="full">
        확인
      </Button>
      <Button variant="text" color="gray">
        텍스트 버튼
      </Button>
    </div>
  );
};
export default Signup;
