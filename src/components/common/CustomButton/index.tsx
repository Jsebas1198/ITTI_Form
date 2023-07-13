import { Button } from 'react-bootstrap';
import { IProps } from './IProps';

const CustomButton = ({ type, label, handleClick }: IProps) => {
  return (
    <Button
      className="btn btn-primary m-2"
      variant="primary"
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={handleClick}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
