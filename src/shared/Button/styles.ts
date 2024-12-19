export const baseStyles = `
  relative overflow-hidden rounded-lg font-semibold transition-all duration-300
  transform hover:scale-[1.02] active:scale-[0.98]
  flex items-center justify-center gap-2
  focus:outline-none focus:ring-2 focus:ring-offset-2
  disabled:opacity-50 disabled:cursor-not-allowed
`;

export const variantStyles = {
  primary: `
    text-white shadow-lg
    before:absolute before:inset-0 before:bg-black/10
    before:translate-y-full hover:before:translate-y-0
    before:transition-transform before:duration-300
  `,
  secondary: `
    bg-gray-100 text-gray-800 hover:bg-gray-200
    before:absolute before:inset-0 before:bg-black/5
    before:translate-y-full hover:before:translate-y-0
    before:transition-transform before:duration-300
  `,
  outline: `
    border-2 hover:text-white
    before:absolute before:inset-0 before:bg-current
    before:translate-y-full hover:before:translate-y-0
    before:transition-transform before:duration-300
    before:z-[-1]
  `
};

export const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg'
};