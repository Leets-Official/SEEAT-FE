export type BadgeType = 'tag' | 'info' | 'removable';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps {
  type: BadgeType;
  size?: BadgeSize; // 기본값 sm
  children: React.ReactNode;
  onRemove?: () => void;
  className?: string;
}
