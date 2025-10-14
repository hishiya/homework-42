// src/App.js

import React from 'react';
import DataFetcher from './components/DataFetcher';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Мій додаток</h1>
      <hr />
      {/* Імпортуємо та використовуємо наш компонент */}
      <DataFetcher />
    </div>
  );
}

export default App;