import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ContactsList.css';

const ContactsList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [newContact, setNewContact] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/contacts');
        setContacts(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching contacts:', err);
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleAddContact = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contacts', newContact);
      setContacts([...contacts, response.data]);
      setNewContact({ name: '', email: '', phone: '' });
      setShowForm(false);
    } catch (err) {
      console.error('Error adding contact:', err);
    }
  };

  const handleDeleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/contacts/${id}`);
      setContacts(contacts.filter(contact => contact._id !== id));
    } catch (err) {
      console.error('Error deleting contact:', err);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="contacts-list">
      <div className="contacts-header">
        <h1>Contacts</h1>
        <button className="btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Add Contact'}
        </button>
      </div>

      {showForm && (
        <form className="contact-form" onSubmit={handleAddContact}>
          <input
            type="text"
            placeholder="Name"
            value={newContact.name}
            onChange={(e) => setNewContact({...newContact, name: e.target.value})}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={newContact.email}
            onChange={(e) => setNewContact({...newContact, email: e.target.value})}
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            value={newContact.phone}
            onChange={(e) => setNewContact({...newContact, phone: e.target.value})}
          />
          <button type="submit" className="btn">Add Contact</button>
        </form>
      )}

      <div className="contacts-grid">
        {contacts.map(contact => (
          <div key={contact._id} className="contact-card">
            <h3>{contact.name}</h3>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <button 
              className="btn delete-btn"
              onClick={() => handleDeleteContact(contact._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactsList;