import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { IProps } from './IProps';


const Card = ({ userId, id, title, completed }: IProps) => {
  const navigate = useNavigate();
  const cardBackground = `card ${completed ? 'bg-success' : 'bg-warning'}`;
  return (
    <div className={`${cardBackground} my-2  h-100`}>
      <div className="card-body">
        <h5 className="card-title">ID: {id}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          ID del usuario: {userId}
        </h6>
        <p className="card-text">Titulo: {title}</p>
        <p className="card-text">Completado: {completed ? 'Sí' : 'No'}</p>
      </div>
      <div className="d-flex justify-content-center p-2">
        <button className="btn btn-primary me-2" onClick={() =>
                      navigate(`form/editar/${id}`)
                    }>
          <FaEdit /> Modificar
        </button>
        <button className="btn btn-danger">
          <FaTrash /> Eliminar
        </button>
      </div>
    </div>
  );
};

export default Card;
