import { cn } from '@/utils/cn';
import type { ButtonProps } from './Button.types';
import { BUTTON_BASE, BUTTON_VARIANT, BUTTON_SIZE, BUTTON_ROUNDED } from './Button.styled';

export default function Button({
  variant = 'primary',
  color = 'red',
  size = 'lg',
  rounded = 'md',
  disabled = false,
  fontType = 'body-1',
  className,
  selected = false,
  children,
  ...props
}: ButtonProps) {
  const fontClass = fontType === 'body-1' ? 'text-body-1' : 'text-title-3';

  const selectedClass =
    variant === 'secondary-assistive' && selected ? 'bg-red-400/30 border-red-400' : '';

  return (
    <button
      disabled={disabled}
      className={cn(
        'inline-flex cursor-pointer items-center justify-center',
        BUTTON_BASE,
        fontClass,
        typeof BUTTON_VARIANT[variant] === 'string'
          ? BUTTON_VARIANT[variant]
          : color && BUTTON_VARIANT[variant][color],
        BUTTON_SIZE[size],
        BUTTON_ROUNDED[rounded],
        selectedClass,
        disabled && 'cursor-not-allowed',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
