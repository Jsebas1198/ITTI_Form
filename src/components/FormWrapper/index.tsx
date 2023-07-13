import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ICreateUser } from '../../interfaces/User/ICreateuser';
import UserService from '../../services/UserService';
import { images } from '../../constants/images';
import CustomForm from '../common/CustomForm';

interface FormData {
  userId: number;
  title: string;
  completed: boolean;
}

const FormWrapper: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  /**
   * @description Función para crear un usuario
   */
  const createUser = async (data: ICreateUser) => {
    const { userId, title, completed } = data;

    UserService.create({
      userId,
      title,
      completed,
    })
      .then(() => {
        toast.success('Se creó el usuario exitosamente');
        navigate('/');
      })
      .catch((err) => {
        toast.error('Error al crear un usuario');
        console.error('Error al crear un usuario:', err);
      });
  };
  const validateTitle = (value: string) => {
    if (/\d/.test(value)) {
      return 'El título no debe contener caracteres numéricos';
    }
    return true;
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{ height: '100vh' }}
    >
      <div
        className="row"
        style={{
          border: '1px solid #ccc',
          boxShadow:
            'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px',
        }}
      >
        <div className="col-md-6 d-none d-md-block">
          <img
            src={images.Creation}
            alt="Imagen"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="col-md-6">
          <CustomForm
            createUser={createUser}
            handleSubmit={handleSubmit}
            register={register}
            errors={errors}
            validateTitle={validateTitle}
          />
        </div>
      </div>
    </div>
  );
};

export default FormWrapper;
