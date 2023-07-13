import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserService from '../../services/UserService';
import { images } from '../../constants/images';
import { IProps } from './IProps';
import CustomButton from '../common/CustomButton';

interface SearchFormData {
  userId: number;
}
const UserSearch = ({ actionType }: IProps) => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm<SearchFormData>();

  /**
   * @description Busca o elimina a un usuario por su id
   */
  const handleSearch: SubmitHandler<SearchFormData> = (data) => {
    const { userId } = data;
    if (actionType === 'search') {
      UserService.getUserById(String(userId))
        .then((user) => {
          if (user) {
            setTimeout(() => {
              toast.success('Usuario encontrado');
            }, 500);
            navigate(`/form/editar/${userId}`);
          } else {
            toast.warning('Usuario no encontrado');
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            toast.warning('Usuario no encontrado');
          } else {
            toast.error('Error al buscar usuario');
            console.error('Error al buscar usuario:', error);
          }
        });
    } else if (actionType === 'delete') {
      UserService.getUserById(String(userId))
        .then((user) => {
          if (user) {
            UserService.deleteUser(String(userId))
              .then(() => {
                toast.success('Usuario eliminado exitosamente');
              })
              .catch((error) => {
                toast.error('Error al eliminar usuario');
                console.error('Error al eliminar usuario:', error);
              });
          } else {
            toast.warning('Usuario no encontrado');
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            toast.warning('Usuario no encontrado');
          } else {
            toast.error('Error al buscar usuario');
            console.error('Error al buscar usuario:', error);
          }
        });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-8 col-md-6 col-lg-4">
            <h1
              className="text-center mb-4"
              style={{
                color: '#232323',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                fontSize: '36px',
                fontWeight: 'bold',
              }}
            >
              {actionType === 'search'
                ? 'Buscar a un usuario para editarlo'
                : 'Buscar a un usuario para darlo de baja'}
            </h1>
            <div className="text-center">
              {actionType === 'search' ? (
                <img
                  src={images.Search}
                  alt="Imagen"
                  className="imagen"
                  style={{ maxWidth: '100%' }}
                />
              ) : (
                <img
                  src={images.Delete}
                  alt="Imagen"
                  className="imagen"
                  style={{ maxWidth: '100%' }}
                />
              )}
            </div>
            <form onSubmit={handleSubmit(handleSearch)}>
              <div className="input-group mt-4">
                <input
                  type="number"
                  className="form-control"
                  placeholder="ID de Usuario"
                  {...register('userId', { required: true })}
                />
                <CustomButton
                  type={'submit'}
                  className={`btn ${actionType === 'search' ? 'btn-primary' : 'btn-danger'}`}
                  label={actionType === 'search' ? 'Buscar' : 'Eliminar'}
                />
              </div>
              <div className="text-center mt-3">
                <CustomButton
                  type={'button'}
                  className={'btn btn-secondary'}
                  label={'Regresar'}
                  handleClick={() => navigate(-1)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSearch;
