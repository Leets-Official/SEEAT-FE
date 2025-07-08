export const BUTTON_BASE = 'transition-colors active:scale-95';

/**
 * variant: primary, secondary, text
 * color: red, gray
 */
export const BUTTON_VARIANT = {
  primary: {
    red: 'bg-red-400 text-white hover:bg-red-300 active:bg-red-500 disabled:bg-gray-800 disabled:text-gray-400',
    gray: 'bg-gray-600 text-white hover:bg-gray-500 active:bg-gray-700 disabled:bg-gray-800 disabled:text-gray-400',
  },
  secondary: {
    red: 'bg-[rgba(221,55,66,0.3)] text-white border border-red-400 hover:bg-[rgba(221,55,66,0.5)] active:bg-[rgba(221,55,66,0.15)] active:border-red-500 disabled:bg-transparent disabled:text-gray-400 disabled:border-gray-500',
    gray: 'bg-transparent text-gray-300 border border-gray-500 hover:bg-white/20 active:bg-white/5 disabled:bg-transparent disabled:text-gray-400 disabled:border-gray-500',
  },
  text: {
    gray: 'bg-transparent text-gray-300 disabled:text-gray-400',
    red: 'bg-transparent text-red-300 disabled:text-gray-400',
  },
} as const;

export const BUTTON_SIZE = {
  lg: 'px-8 py-4',
  md: 'px-4 py-2',
  sm: 'px-3 py-1.5',
  xs: 'px-2.5 py-1',
} as const;

export const BUTTON_ROUNDED = {
  full: 'rounded-full',
  lg: 'rounded-lg',
  md: 'rounded-md',
  sm: 'rounded-sm',
} as const;
