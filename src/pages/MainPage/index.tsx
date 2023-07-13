import React, { useState } from 'react';
import ButtonSection from '../../components/ButtonSection';
import CardList from '../../components/CardsList';

const MainPage = () => {
  const [filter, setFilter] = useState('all');

  /**
   * @description Controla la opción de filtrado por el select
   */
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <header>
        <ButtonSection />
      </header>
      <main>
        <div className="filter my-3">
          <select
            id="filterSelect"
            className="form-select"
            value={filter}
            onChange={handleFilterChange}
          >
            <option value="all">Mostrar todos</option>
            <option value="completed">Mostrar completados</option>
            <option value="not-completed">Mostrar no completados</option>
          </select>
        </div>
        <CardList filter={filter} />
      </main>
    </>
  );
};

export default MainPage;
