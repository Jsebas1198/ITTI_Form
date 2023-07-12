import CustomButton from '../common/CustomButton';

const ButtonSection = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center bg-danger">
      <CustomButton
        type={'button'}
        label={'Crear usuario'}
        handleClick={() => {
          console.log('Botón 1');
        }}
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