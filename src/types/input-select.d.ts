export interface InputSelectProps {
  label: string;
  value: string;
  onChange: any;
  type: 'variants' | 'colors' | 'sizes';
}

export type optionType = 'small' | 'medium' | 'large';
export type optionValue = 'sm' | 'md' | 'lg' | 'default';
