import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import App from './App'; // Import should occur after react-router-dom imports
import { Home, Orders, Calendar, Lawyers, UTPCases, Kanban } from './pages';

// Import and define components for the missing routes
import BailGrantedCases from './pages/BailGrantedCases';
import SolvedCases from './pages/SolvedCases';
import StateWiseCases from './pages/StateWiseCases';
import RecentCases from './pages/RecentCases';

const MainApp = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Login */}
          <Route path="/login" element={<Login />} />

          {/* dashboard */}
          <Route path="/" element={<App />} /> {/* Use the App component for the root path */}
          <Route path="/home" element={<Home />} />

          {/* pages */}
          <Route path="/orders" element={<Orders />} />
          <Route path="/lawyers" element={<Lawyers />} />
          <Route path="/UTP%20Cases" element={<UTPCases />} />

          {/* BailGrantedCases, SolvedCases, StateWiseCases, and RecentCases */}
          <Route path="/bail%20granted%20Cases" element={<BailGrantedCases />} />
          <Route path="/solved%20Cases" element={<SolvedCases />} />
          <Route path="/state%20wise%20Cases" element={<StateWiseCases />} />
          <Route path="/recent%20Cases" element={<RecentCases />} />

          {/* apps */}
          <Route path="/To-do%20List" element={<Kanban />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainApp;
