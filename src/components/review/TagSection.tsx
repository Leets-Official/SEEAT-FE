import { Button } from '@/components';

type TagSectionProps = {
  title: string;
  required?: boolean;
  options: { id: number; label: string }[];
  selected: number[];
  onChange: (id: number) => void;
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
        {title} {required && <span className="text-red-400">*</span>}
      </h2>
      <div className="flex flex-wrap gap-2">
        {options.map(({ id, label }) => (
          <Button
            key={id}
            onClick={() => onChange(id)}
            variant="secondary-assistive"
            color="gray"
            size="xs"
            rounded="md"
            selected={selected.includes(id)}
          >
            {label}
          </Button>
        ))}
      </div>
    </section>
  );
}
