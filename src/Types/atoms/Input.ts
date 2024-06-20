export interface InputProps {
  label?: string;
  error?: boolean;
  errorMessage?: string;
  keyboardType?: 'default';
  placeholder?: string;
  onChange: (e: any) => void;
  value: string;
}
