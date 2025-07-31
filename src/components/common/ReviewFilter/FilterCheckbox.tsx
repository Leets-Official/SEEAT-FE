import CheckSquareOnIcon from '@/assets/icons/check_square_on.svg?react';
import  CheckSquareOffIcon from '@/assets/icons/check_square_off.svg?react';
interface FilterCheckboxProps {
  option: string;
  isSelected: boolean;
  onToggle: () => void;
}

export default function FilterCheckbox({ option, isSelected, onToggle }: FilterCheckboxProps) {
  return (
    <label className="flex cursor-pointer items-center gap-x-2">
      <input type="checkbox" checked={isSelected} onChange={onToggle} className="sr-only" />
      {isSelected ? (
        <CheckSquareOnIcon className="h-6 w-6 text-red-400" />
      ) : (
        <CheckSquareOffIcon className="h-6 w-6 text-gray-700" />
      )}
      <span className="text-body-1 text-gray-500">{option}</span>
    </label>
  );
}