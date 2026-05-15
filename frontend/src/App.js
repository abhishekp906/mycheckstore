import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './components/Index';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import AdminPage from './components/AdminPage';
import SellerProfile from './components/SellerProfile';
import ContactsList from './components/ContactsList';
import OrdersPage from './components/OrdersPage';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
