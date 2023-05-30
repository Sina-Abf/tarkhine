import { cva, type VariantProps } from 'class-variance-authority';

const button = cva('button', {
  variants: {
    variant: {
      primary: [
        'bg-primary',
        'text-white',
        'rounded-lg',
        'transition-all',
        'duration-300',
        'hover:bg-shade-2',
      ],
      secondary: [
        'bg-tint-1',
        'text-white',
        'hover:bg-primary',
        'rounded-lg',
        'transition-all',
        'duration-300',
      ],
    },
    size: {
      small: [
        'text-xl',
        'py-1',
        'px-2',
        'md:py-2',
        'md:px-4',
        'lg:px-6',
        'md:text-2xl',
      ],
      medium: ['text-2xl'],
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  children,
  ...props
}) => (
  <button className={button({ variant, size, className })} {...props}>
    {children}
  </button>
);
