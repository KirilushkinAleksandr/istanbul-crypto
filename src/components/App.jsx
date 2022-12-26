import React from 'react';
import { Route, Routes } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';
import MainPage from './MainPage';
import ExchangePage from './ExchangePage';

function App() {
  return (
    <div className="page">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={
            <MainPage />
          } />
          <Route path="/exchange-currency" element={
            <ExchangePage />
          } />
          <Route path="*" element={<div>404 not found</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;