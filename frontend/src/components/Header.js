import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="brand-section">
          <div className="logo-icon">✓</div>
          <div className="brand-text">
            <h1 className="company-name">MyCheckStore</h1>
            <p className="tagline">Premium E-Commerce</p>
          </div>
        </div>
        <div className="auth-buttons">
          <Link to="/login" className="header-btn header-btn-login">Login</Link>
          <Link to="/signup" className="header-btn header-btn-signup">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
