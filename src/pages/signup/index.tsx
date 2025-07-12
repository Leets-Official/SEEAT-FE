import Badge from '@/components/common/Badge/Badge';
import ImageExamples from '@/components/examples/ImageExamples';

const Signup = () => {
  return (
    <div>
      <Badge type="tag">태그</Badge>
      <Badge type="info">후기 정보</Badge>
      <Badge type="removable">뭔가 검색했겠지 </Badge>
      <ImageExamples />
    </div>
  );
};
export default Signup;
