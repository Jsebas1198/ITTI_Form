import  { useState, useEffect } from 'react';
import UserService from '../../services/UserService';
import Card from '../common/Card';
import MUser from '../../models/MUser';

const CardList = () => {
  const [cards, setCards] = useState<MUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCards();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fetchCards = async () => {
    try {
      const users = await UserService.getUsers();
      setCards(prevCards => [...prevCards, ...users]);
      setLoading(false);
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

  return (
    <div>
      <div className="card-columns">
        {cards.map((card, index) => (
          <Card key={index} userId={card.userId} id={card.id} title={card.title} completed={card.completed} />
        ))}
      </div>
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default CardList;