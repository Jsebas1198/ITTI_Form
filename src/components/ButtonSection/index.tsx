import CustomButton from '../common/CustomButton';
import { useNavigate } from 'react-router-dom';
const ButtonSection = () => {
  const navigate = useNavigate();

  const handleCreateUser = () => {
    navigate('/form/crear');
  };

  return (
    <div className="d-flex flex-wrap justify-content-center bg-danger">
      <CustomButton
        type={'button'}
        label={'Crear usuario'}
        handleClick={handleCreateUser}
      />
      <CustomButton
        type={'button'}
        label={'Editar usuario'}
        handleClick={() => {
          console.log('Botón 2');
        }}
      />
      <CustomButton
        type={'button'}
        label={'Eliminar usuario'}
        handleClick={() => {
          console.log('Botón 3');
        }}
      />
    </div>
  );
};

export default ButtonSection;
