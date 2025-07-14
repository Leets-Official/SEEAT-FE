import Textarea from '@/components/common/Textarea/Textarea';

const TextareaExamples = () => {
  return (
    <div className="p-4 space-y-6">
      <Textarea title="주제" focus={false} placeholderColorType="gray" />
      <Textarea title="주제" focus={true} placeholderColorType="gray" />
      <Textarea title="주제" focus={true} placeholderColorType="white" />
      <Textarea title="주제" focus={false} placeholderColorType="white" />
    </div>
  );
};

export default TextareaExamples;
