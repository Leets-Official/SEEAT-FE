import type { BUTTON_VARIANT } from './Button.styled';

export type ButtonVariant = keyof typeof BUTTON_VARIANT;
export type ButtonColor<V extends ButtonVariant = ButtonVariant> = keyof (typeof BUTTON_VARIANT)[V];

export type ButtonSize = 'lg' | 'md' | 'sm' | 'xs';
export type ButtonRounded = 'full' | 'lg' | 'md' | 'sm';
export type ButtonFont = 'body-1' | 'title-3';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  rounded?: ButtonRounded;
  disabled?: boolean;
  fontType?: ButtonFont;
  children: React.ReactNode;
}
