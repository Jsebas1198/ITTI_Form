import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWindow } from '../../../hooks/useWindow';
import CustomButton from '../CustomButton';
import { IProps } from './IProps';

const CustomForm = ({
  createUser,
  editUser,
  handleSubmit,
  register,
  errors,
  validateTitle,
  setValue,
  user,
}: IProps) => {
  const navigate = useNavigate();
  const { isMobile } = useWindow();

  useEffect(() => {
    if (user) {
      setValue('userId', user.userId);
      setValue('title', user.title);
      setValue('completed', user.completed);
    }
  }, [user]);
  return (
    <form onSubmit={handleSubmit(user ? editUser : createUser)} className="p-5">
      <h1
        style={{
          color: '#232323',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          fontSize: '36px',
          fontWeight: 'bold',
        }}
      >
        {user ? 'EDITAR USUARIO' : 'CREAR USUARIO'}
      </h1>

      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          ID del usuario
        </label>
        <input
          type="number"
          className={`form-control ${errors.userId ? 'is-invalid' : ''}`}
          {...register('userId', { required: true })}
        />
        {errors.userId && <div className="invalid-feedback">ID de usuario es requerido</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Título
        </label>
        <input
          type="text"
          className={`form-control ${errors.title ? 'is-invalid' : ''}`}
          {...register('title', {
            required: true,
            validate: validateTitle,
          })}
        />
        {errors.title && (
          <div className="invalid-feedback">{errors.title.message || 'Titulo es requerido'}</div>
        )}
      </div>
      <div className="form-check mb-3">
        <input
          type="checkbox"
          className={`form-check-input ${errors.completed ? 'is-invalid' : ''}`}
          {...register('completed')}
        />
        <label className="form-check-label" htmlFor="completed">
          Completed
        </label>
        {errors.completed && <div className="invalid-feedback">Valores invalidos</div>}
      </div>

      <div className="d-flex flex-column flex-md-row justify-content-md-between">
        <div className="-mx-1">
          <CustomButton
            type={'submit'}
            className={'btn btn-primary px-4 mx-1'}
            label={user ? 'Editar' : 'Crear'}
          />
          <CustomButton
            type={'button'}
            className={`btn btn-secondary px-4 mx-1 ${isMobile ? 'mt-2' : ''}`}
            label={'Regresar'}
            handleClick={() => navigate(-1)}
          />
        </div>
      </div>
    </form>
  );
};

export default CustomForm;
