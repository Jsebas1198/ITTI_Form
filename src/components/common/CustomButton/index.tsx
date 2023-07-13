import { Button } from 'react-bootstrap';
import { IProps } from './IProps';

const CustomButton = ({ type, label, handleClick, icon, className }: IProps) => {
  const IconComponent = icon;

  return (
    <Button
      className={`${className}`}
      variant="primary"
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={handleClick}
    >
      {icon && <span className="me-2">{IconComponent && <IconComponent />}</span>}
      {label}
    </Button>
  );
};

export default CustomButton;
