import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { ICreateUser } from '../../interfaces/User/ICreateuser';
import UserService from '../../services/UserService';
import { images } from '../../constants/images';
import CustomForm from '../../components/common/CustomForm';
import MUser from '../../models/MUser';
import { IUpdateUser } from '../../interfaces/User/IUpdateUser';

interface FormData {
  userId: number;
  title: string;
  completed: boolean;
}

const FormWrapper: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = React.useState<MUser>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  useEffect(() => {
    if (id) {
      getUserById();
    }
  }, []);

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

  /**
   * @description Función para editar un usuario
   */
  const editUser = async (data: IUpdateUser) => {
    if (id) {
      const { userId, title, completed } = data;

      UserService.updateUser(
        {
          userId,
          title,
          completed,
        },
        id
      )
        .then(() => {
          toast.success('Se editó el usuario exitosamente');
          navigate('/');
        })
        .catch((err) => {
          toast.error('Error al editar un usuario');
          console.error('Error al editar un usuario:', err);
        });
    }
  };

  /**
   * @description Obtiene un usuario
   */
  const getUserById = () => {
    UserService.getUserById(id as string)
      .then(setUser)
      .catch((err) => {
        if (err?.response?.data?.errorCode && err?.response?.data?.errorCode > 0) {
          toast('usuario no encontrado', { type: 'error' });
          return;
        }

        toast('Error inesperado, intente más tarde', { type: 'error' });
      });
  };

  /**
   * @description Valida que el título no contenga números
   */
  const validateTitle = (value: string) => {
    if (/\d/.test(value)) {
      return 'El título no debe contener caracteres numéricos';
    }
    return true;
  };

  return (
    <div className="d-flex justify-content-center align-items-center " style={{ height: '100vh' }}>
      <div
        className="row"
        style={{
          border: '1px solid #ccc',
          boxShadow:
            'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px',
        }}
      >
        <div className="col-md-6 d-none d-md-block">
          {user ? (
            <img src={images.Edition} alt="Imagen" style={{ width: '100%', height: '100%' }} />
          ) : (
            <img src={images.Creation} alt="Imagen" style={{ width: '100%', height: '100%' }} />
          )}
        </div>
        <div className="col-md-6">
          <CustomForm
            createUser={createUser}
            editUser={editUser}
            handleSubmit={handleSubmit}
            register={register}
            errors={errors}
            validateTitle={validateTitle}
            setValue={setValue}
            user={user}
          />
        </div>
      </div>
    </div>
  );
};

export default FormWrapper;
