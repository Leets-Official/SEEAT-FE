import { getRandomImage } from '@/__mocks/mockImage';
import Image from '../common/Image/Image';

const ImageExamples = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-xl font-bold">Image 테스트</h1>

      {[...Array(10)].map((_, i) => (
        <Image
          key={i}
          src={getRandomImage(300, 200)}
          alt={`랜덤 이미지 ${i}`}
          className="h-[200px] w-[300px]"
          aspectRatio="aspect-[3/2]"
          rounded="rounded-lg"
        />
      ))}
    </div>
  );
};

export default ImageExamples;
