import type { BUTTON_VARIANT } from './Button.styled';

export type ButtonVariant = keyof typeof BUTTON_VARIANT;
type VariantWithColor = Exclude<ButtonVariant, 'secondary-assistive'>;

export type ButtonColor<V extends ButtonVariant = ButtonVariant> = V extends VariantWithColor
  ? keyof (typeof BUTTON_VARIANT)[V]
  : never;

export type ButtonSize = 'lg' | 'md' | 'sm' | 'xs';
export type ButtonRounded = 'full' | 'lg' | 'md' | 'sm';
export type ButtonFont = 'body-1' | 'title-3';

export interface ButtonProps<V extends ButtonVariant = ButtonVariant>
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: V;
  color?: ButtonColor<V>;
  size?: ButtonSize;
  rounded?: ButtonRounded;
  disabled?: boolean;
  fontType?: ButtonFont;
  children: React.ReactNode;
  selected?: boolean;
}
