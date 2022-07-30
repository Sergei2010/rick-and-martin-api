import React from 'react';

import { Header } from './components/Header';
import { Container } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { CharacterDetailsPage } from './pages/CharacterDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="home-container">
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/character/:id" element={<CharacterDetailsPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
