import { useState, useEffect } from 'react';
import UserService from '../../services/UserService';
import Card from '../common/Card';
import MUser from '../../models/MUser';
import { IProps } from './IProps';

const CardList = ({ filter }: IProps) => {
  const [cards, setCards] = useState<MUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false); // Variable para rastrear si los datos ya se han cargado

  useEffect(() => {
    fetchCards();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fetchCards = async () => {
    if (hasLoaded) return; // Si los datos ya se han cargado, no hagas nada
    try {
      const users = await UserService.getUsers();
      setCards(users);
      setLoading(false);
      setHasLoaded(true); // Establece la variable de estado para indicar que los datos se han cargado
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchCards();
    }
  };

  const filteredCards = cards.filter((card) => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'completed') {
      return card.completed;
    } else if (filter === 'not-completed') {
      return !card.completed;
    }
  });
  return (
    <div>
      <div className="row">
        {filteredCards.map((card, index) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-2" key={index}>
            <Card
              userId={card.userId}
              id={card.id}
              title={card.title}
              completed={card.completed}
            />
          </div>
        ))}
      </div>
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default CardList;
