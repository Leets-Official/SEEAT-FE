import { cn } from '@/utils/cn';
import type { ButtonProps } from './Button.types';
import { BUTTON_BASE, BUTTON_VARIANT, BUTTON_SIZE, BUTTON_ROUNDED } from './Button.styled';

export default function Button({
  variant = 'primary',
  color = 'red',
  size = 'lg',
  rounded = 'lg',
  disabled = false,
  fontType = 'body-1',
  className,
  children,
  ...props
}: ButtonProps) {
  const fontClass = fontType === 'body-1' ? 'text-body-1' : 'text-title-3';

  return (
    <button
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center',
        BUTTON_BASE,
        BUTTON_VARIANT[variant][color],
        BUTTON_SIZE[size],
        BUTTON_ROUNDED[rounded],
        fontClass,
        disabled && 'cursor-not-allowed',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
