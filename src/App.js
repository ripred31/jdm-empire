import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

// layouts
import MainLayout from './layouts/MainLayout';
import HomePageLayout from './layouts/HomePageLayout';

// pages
import HomePage from './pages/Homepage';
import Registration from './pages/Registration';
import './default.scss';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
          <Route path="/" element={
            <HomePageLayout>
              <HomePage />
            </HomePageLayout>
          } />
          <Route path="/registration" element={
            <MainLayout>
              <Registration />
            </MainLayout>
          } />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
