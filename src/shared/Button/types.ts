export interface ButtonTheme {
  primary: string;
  hover: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ComponentType<{ className?: string }>;
  loading?: boolean;
  theme?: ButtonTheme;
  className?: string;
}