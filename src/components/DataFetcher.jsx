import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetcher = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/user.json');
        setUser(response.data);
      } catch (err) {
        setError('Не вдалося завантажити дані');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <p>Завантаження даних...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div>
      <h2>Інформація про користувача:</h2>
      <p><strong>Ім'я:</strong> {user.username}</p>
      <p><strong>Вік:</strong> {user.age}</p>
    </div>
  );
};

export default DataFetcher;