import { Button } from '@/components';

type TagSectionProps = {
  title: string;
  required?: boolean;
  options: string[];
  selected: string[];
  onChange: (value: string) => void;
};

export default function TagSection({
  title,
  required,
  options,
  selected,
  onChange,
}: TagSectionProps) {
  return (
    <section className="mb-6">
      <h2 className="text-caption-2 mb-3">
        {title} {required && <span className="text-red-500">*</span>}
      </h2>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <Button
            key={option}
            onClick={() => onChange(option)}
            variant="secondary-assistive"
            color="gray"
            size="sm"
            rounded="md"
            selected={selected.includes(option)}
          >
            {option}
          </Button>
        ))}
      </div>
    </section>
  );
}
