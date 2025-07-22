export interface ToggleOption {
  label: string;
  value: string;
}

export interface ToggleTabProps {
  options: ToggleOption[];
  selected: string;
  onSelect: (option: string) => void;
  className?: string;
}
