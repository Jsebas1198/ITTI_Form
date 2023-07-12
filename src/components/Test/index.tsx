import React, { useEffect } from 'react';
import axios from 'axios';
import UserService from '../../services/UserService';

const API_URL = 'https://jsonplaceholder.typicode.com'; // Reemplaza con la URL de tu API

const ExampleComponent = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
    //   const response = await axios.get(`${API_URL}/todos`);
    const users = await UserService.getUsers();
      console.log('Data:', users);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Example Component</h1>
      {/* Renderiza el resto del componente */}
    </div>
  );
};

export default ExampleComponent;