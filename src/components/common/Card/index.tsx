import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEdit, FaTrash } from 'react-icons/fa';
import CustomModal from '../CustomModal';
import UserService from '../../../services/UserService';
import CustomButton from '../CustomButton';
import { IProps } from './IProps';
const Card = ({ userId, id, title, completed }: IProps) => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  /**
   * @description Elimina a un usuario
   */
  const handleDelete = () => {
    if (id) {
      UserService.deleteUser(id as unknown as string)
        .then(() => {
          setShowModal(false);
          toast.success('Usuario eliminado exitosamente');
        })
        .catch((err) => {
          setShowModal(false);
          console.error('[DELETE USER ERROR]: ', err);
          toast.error('Error inesperado, intente más tarde');
        });
    }
  };

  return (
    <div
      className={` card my-2  h-100`}
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        backgroundColor: completed ? '#00C89C' : '#F5D56E',
      }}
    >
      <div className="card-body">
        <h5 className="card-title">ID: {id}</h5>
        <h6 className="card-subtitle mb-2 text-muted">ID del usuario: {userId}</h6>
        <p className="card-text">Titulo: {title}</p>
        <p className="card-text">Completado: {completed ? 'Sí' : 'No'}</p>
      </div>
      <div className="d-flex justify-content-center p-2">
        <CustomButton
          type={'button'}
          className={'btn btn-primary me-2'}
          label={'Modificar'}
          handleClick={() => navigate(`form/editar/${id}`)}
          icon={FaEdit}
        />
        <CustomButton
          type={'button'}
          className={'btn btn-danger'}
          label={'Eliminar'}
          handleClick={() => setShowModal(true)}
          icon={FaTrash}
        />
      </div>
      <CustomModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onConfirm={handleDelete}
        onCancel={() => setShowModal(false)}
        title={'Confirmar la eliminación del usuario'}
        message={'¿Estás seguro de que quieres eliminar el usuario?'}
      />
    </div>
  );
};

export default Card;
