import { Modal } from 'react-bootstrap';
import CustomButton from '../CustomButton';
import { IProps } from './IProps';

const CustomModal = ({ show, onHide, onConfirm, onCancel, title, message }: IProps) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <CustomButton
          type={'button'}
          className={'btn btn-danger'}
          label={'Eliminar'}
          handleClick={onConfirm}
        />
        <CustomButton
          type={'button'}
          className={'btn btn-secondary'}
          label={'Cancelar'}
          handleClick={onCancel}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
