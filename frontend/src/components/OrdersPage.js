import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OrdersPage.css';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/orders');
        setOrders(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching orders:', err);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="orders-page">
      <h1>Orders</h1>
      <div className="orders-list">
        {orders.map(order => (
          <div key={order._id} className="order-card">
            <h3>Order #{order._id}</h3>
            <p>Contact: {order.contactId?.name}</p>
            <p>Status: {order.status}</p>
            <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
            <p>Amount: ${order.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;