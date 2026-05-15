import React from 'react';
import { Link } from 'react-router-dom';
import './Index.css';

const Index = () => {
  const metrics = [
    { label: 'Tier 2 Cities', value: '450+', icon: '🏙️' },
    { label: 'Active Sellers', value: '12,500+', icon: '👨‍💼' },
    { label: 'Monthly Sales', value: '₹45 Cr+', icon: '💰' },
    { label: 'Happy Customers', value: '2.5M+', icon: '😊' }
  ];

  return (
    <div className="index-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="video-container">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="How MyCheckStore Works - Benefits & Features"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-player"
          ></iframe>
        </div>
        <div className="cta-overlay">
          <div className="hero-buttons">
            <Link to="/signup" className="btn-primary">Start Selling</Link>
            <Link to="/login" className="btn-secondary">Login</Link>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="metrics-section">
        <h2>Growing Marketplace for Tier 2 Cities</h2>
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <div key={index} className="metric-card">
              <div className="metric-icon">{metric.icon}</div>
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose MyCheckStore?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🛍️</div>
            <h3>Easy to Use</h3>
            <p>Simple platform designed for sellers from any background</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Rapid Growth</h3>
            <p>Reach customers across Tier 2 cities quickly and efficiently</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💵</div>
            <h3>Best Rates</h3>
            <p>Competitive commission rates to maximize your profits</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📞</div>
            <h3>24/7 Support</h3>
            <p>Dedicated support team to help you grow your business</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Analytics</h3>
            <p>Track sales and customer insights with real-time analytics</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure Payments</h3>
            <p>Safe and secure payment processing for all transactions</p>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="success-section">
        <h2>Success Stories from Tier 2 Cities</h2>
        <div className="story-card">
          <div className="story-icon">👩‍🌾</div>
          <h3>Savitri's Journey</h3>
          <p>
            A humble vegetable vendor from a small village in Madhya Pradesh, 
            Savitri started selling groceries and daily essentials on MyCheckStore. 
            In just 6 months, she expanded her business, hired 2 local helpers, 
            and now serves 500+ customers monthly, earning ₹2 lakhs every month.
          </p>
          <p className="story-quote">"MyCheckStore gave me the platform to reach beyond my village and serve the entire region!"</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Transform Your Business?</h2>
        <p>Join MyCheckStore today and start reaching customers across Tier 2 cities</p>
        <Link to="/signup" className="btn-primary btn-large">Sign Up as Seller</Link>
      </section>
    </div>
  );
};

export default Index;
