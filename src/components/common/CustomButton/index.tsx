import { Button } from 'react-bootstrap'
import { IButton } from '../../../interfaces/Button/IButton'

const CustomButton = ({ type, label, handleClick}:IButton) => {
  return (
    <Button  
      className="btn btn-primary m-2" 
      variant="primary" 
      type={ type === 'submit' ? 'submit' : 'button'} 
      onClick={handleClick}>{label}
    </Button>
  )
}

export default CustomButton