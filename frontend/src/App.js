import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import AdminPage from './components/AdminPage';
import SellerProfile from './components/SellerProfile';
import ContactsList from './components/ContactsList';
import OrdersPage from './components/OrdersPage';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route path="/admin" element={
            <ProtectedRoute requiredRole="admin">
              <AdminPage />
            </ProtectedRoute>
          } />
          
          <Route path="/seller/profile" element={
            <ProtectedRoute requiredRole="seller">
              <SellerProfile />
            </ProtectedRoute>
          } />
          
          <Route path="/seller/contacts" element={
            <ProtectedRoute requiredRole="seller">
              <ContactsList />
            </ProtectedRoute>
          } />
          
          <Route path="/seller/orders" element={
            <ProtectedRoute requiredRole="seller">
              <OrdersPage />
            </ProtectedRoute>
          } />
          
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
