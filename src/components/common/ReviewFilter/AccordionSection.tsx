import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';
import { ChevronDownIcon, ChevronUpIcon } from '@/assets';

interface AccordionSectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
}

export default function AccordionSection({ title, isOpen, onToggle, children }: AccordionSectionProps) {
  return (
    <div className="py-2">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between"
      >
        <span className="text-title-4 text-gray-300">{title}</span>
        {isOpen ? <ChevronUpIcon className="h-5 w-5 text-gray-300" /> : <ChevronDownIcon className="h-5 w-5 text-gray-300" />}
      </button>
      <div
        className={cn(
          'overflow-hidden transition-[max-height] duration-300 ease-in-out',
          isOpen ? 'max-h-screen' : 'max-h-0'
        )}
      >
        <div className="pt-4">{children}</div>
      </div>
    </div>
  );
}