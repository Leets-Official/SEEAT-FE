export const BUTTON_BASE = 'transition-colors active:scale-95';

/**
 * variant: primary, secondary, text, secondary-assistive
 * color: red, gray
 */
export const BUTTON_VARIANT = {
  primary: {
    red: 'bg-red-400 hover:bg-red-300 active:bg-red-500 disabled:bg-gray-800 disabled:text-gray-700',
    gray: 'bg-gray-600 btn-text-gray-300 hover:bg-gray-500 active:bg-gray-700 disabled:bg-gray-800 disabled:text-gray-700',
  },
  secondary: {
    red: 'bg-[rgba(221,55,66,0.3)]  border border-red-400 hover:bg-[rgba(221,55,66,0.5)] active:bg-[rgba(221,55,66,0.15)] active:border-red-500 disabled:bg-gray-800/30 disabled:text-gray-700 disabled:border-gray-800',
    gray: 'bg-transparent text-gray-300 border border-gray-500 hover:bg-white/20 active:bg-white/5 disabled:bg-transparent disabled:text-gray-700 disabled:border-gray-800',
  },
  text: {
    red: 'bg-transparent btn-text-red-300 hover:text-red-400 active:text-red-500 disabled:text-gray-700',
    gray: 'bg-transparent btn-text-gray-300 hover:text-gray-400 active:text-gray-500 disabled:text-gray-700',
  },
  'secondary-assistive':
    'bg-transparent text-gray-300 border border-gray-500 ' +
    'hover:bg-[rgba(221,55,66,0.5)] hover:border-red-400 ' +
    'active:bg-[rgba(221,55,66,0.15)] active:border-red-500 ' +
    'disabled:bg-transparent disabled:text-gray-700 disabled:border-gray-800',
} as const;

export const BUTTON_SIZE = {
  lg: 'px-5 py-3.5',
  md: 'px-4 py-2',
  sm: 'px-3 py-1.5',
  xs: 'px-2.5 py-1',
} as const;

export const BUTTON_ROUNDED = {
  full: 'rounded-full',
  lg: 'rounded-l',
  md: 'rounded-m',
  sm: 'rounded-s',
} as const;
