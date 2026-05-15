import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SellerProfile.css';

const SellerProfile = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/seller/profile');
        setProfile(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching profile:', err);
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="seller-profile">
      <h1>Seller Profile</h1>
      <div className="profile-info">
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Role:</strong> {profile.role}</p>
      </div>
      <div className="profile-actions">
        <button className="btn">Edit Profile</button>
        <button className="btn">Change Password</button>
      </div>
    </div>
  );
};

export default SellerProfile;