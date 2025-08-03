import Textarea from '@/components/common/Textarea/Textarea';

const TextareaExamples = () => {
  return (
    <div className="space-y-6 p-4">
      <Textarea title="주제" focus={false} />
      <Textarea title="주제" focus={true} />
      <Textarea title="주제" focus={true} />
      <Textarea title="주제" focus={false} />
    </div>
  );
};

export default TextareaExamples;
