import React, { useState } from 'react';
import ButtonSection from '../ButtonSection';
import CardList from '../CardsList';

const MainPage = () => {
  const [filter, setFilter] = useState('all');

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
