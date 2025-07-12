export interface ToggleTabProps {
  options: string[];
  selected: string;
  onSelect: (option: string) => void;
}