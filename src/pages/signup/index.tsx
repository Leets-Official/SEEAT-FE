import Button from '@/components/common/Button/Button';

const Signup = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <Button text="확인" variant="primary" color="red" size="lg" />
      <Button text="취소" variant="secondary" color="gray" size="sm" rounded="full" />
      <Button text="텍스트 버튼" variant="text" color="gray" disabled />
    </div>
  );
};
export default Signup;
