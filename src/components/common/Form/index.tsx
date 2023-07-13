import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate  } from 'react-router-dom';
import { ICreateUser } from '../../../interfaces/User/ICreateuser';
import UserService from '../../../services/UserService';
interface FormData {
  userId: number;
  title: string;
  completed: boolean;
}

const Form: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  /**
   * @description Función para crear un usuario
   */
  const createUser = async (data: ICreateUser) => {
    const {userId, title, completed } = data;

    UserService.create({
      userId, title, completed
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
    <form onSubmit={handleSubmit(createUser)}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">User ID</label>
        <input type="number" className={`form-control ${errors.userId ? 'is-invalid' : ''}`} {...register('userId', { required: true })} />
        {errors.userId && <div className="invalid-feedback">User ID is required</div>}
      </div>
      
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className={`form-control ${
            errors.title ? 'is-invalid' : ''
          }`}
          {...register('title', {
            required: true,
            validate: validateTitle,
          })}
        />
        {errors.title && (
          <div className="invalid-feedback">
            {errors.title.message || 'Title is required'}
          </div>
        )}
      </div>
      <div className="form-check mb-3">
        <input type="checkbox" className={`form-check-input ${errors.completed ? 'is-invalid' : ''}`} {...register('completed')} />
        <label className="form-check-label" htmlFor="completed">Completed</label>
        {errors.completed && <div className="invalid-feedback">Invalid completed value</div>}
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;