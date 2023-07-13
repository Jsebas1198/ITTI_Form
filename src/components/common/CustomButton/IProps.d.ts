import { IconType } from 'react-icons';

export interface IProps {
  type: 'submit' | 'button';
  label: string;
  handleClick?: () => void;
  icon?: IconType;
  className?: string;
}