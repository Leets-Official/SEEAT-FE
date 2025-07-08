export type ButtonVariant = 'primary' | 'secondary' | 'text';
export type ButtonColor = 'red' | 'gray';
export type ButtonSize = 'lg' | 'md' | 'sm' | 'xs';
export type ButtonRounded = 'full' | 'lg' | 'md' | 'sm';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  rounded?: ButtonRounded;
  disabled?: boolean;
}
