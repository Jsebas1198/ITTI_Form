import CustomButton from '../common/CustomButton';
import { useNavigate } from 'react-router-dom';
const ButtonSection = () => {
  const navigate = useNavigate();

  const handleCreateUser = () => {
    navigate('/form/crear');
  };

  const handleEditUser = () => {
    navigate('/buscar');
  };

  const handleDeleteUser = () => {
    navigate('/eliminar');
  };
  return (
    <div className="d-flex flex-wrap justify-content-center ">
      <CustomButton
        type={'button'}
        label={'Crear usuario'}
        handleClick={handleCreateUser}
        className={'btn btn-primary m-2'}
      />
      <CustomButton
        type={'button'}
        label={'Editar usuario'}
        handleClick={handleEditUser}
        className={'btn btn-primary m-2'}
      />
      <CustomButton
        type={'button'}
        label={'Eliminar usuario'}
        handleClick={handleDeleteUser}
        className={'btn btn-primary m-2'}
      />
    </div>
  );
};

export default ButtonSection;
