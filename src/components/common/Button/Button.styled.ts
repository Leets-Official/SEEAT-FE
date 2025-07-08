export const BUTTON_BASE = 'transition-colors text-body-1 active:scale-95';

/**
 * variant: primary, secondary, text
 * color: red, gray
 * 상태별: default, hover, pressed, disabled
 */
export const BUTTON_VARIANT = {
  primary: {
    red: {
      default: 'bg-red-400 text-white',
      hover: 'bg-red-300 text-white',
      pressed: 'bg-red-500 text-white',
      disabled: 'bg-gray-800 text-gray-400',
    },
    gray: {
      default: 'bg-gray-600 text-white',
      hover: 'bg-gray-500 text-white',
      pressed: 'bg-gray-700 text-white',
      disabled: 'bg-gray-800 text-gray-400',
    },
  },
  secondary: {
    red: {
      default: 'bg-[rgba(221,55,66,0.3)] text-white border border-red-400',
      hover: 'bg-[rgba(221,55,66,0.5)] text-white border border-red-400',
      pressed: 'bg-[rgba(221,55,66,0.15)] text-white border border-red-500',
      disabled: 'bg-transparent text-gray-400 border border-gray-500',
    },
    gray: {
      default: 'bg-transparent text-gray-300 border border-gray-500',
      hover: 'bg-white/20 text-gray-300 border border-gray-500',
      pressed: 'bg-white/5 text-gray-300 border border-gray-500',
      disabled: 'bg-transparent text-gray-400 border border-gray-500',
    },
  },
  text: {
    gray: {
      default: 'bg-transparent text-gray-300',
      hover: 'bg-transparent text-gray-300',
      pressed: 'bg-transparent text-gray-300',
      disabled: 'bg-transparent text-gray-400',
    },
  },
} as const;

export const BUTTON_SIZE = {
  lg: 'px-5 py-3',
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
