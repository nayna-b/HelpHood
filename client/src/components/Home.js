import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { auth, provider } from './firebase';
// import { signInWithPopup, signOut } from 'firebase/auth';

function App() {
  // const [user, setUser] = useState(null);
  const [requests, setRequests] = useState([]);
  const [form, setForm] = useState({
    name: '', contact: '', description: '', location: ''
  });

  useEffect(() => {
    axios.get('http://localhost:8000/all-requests')
      .then(res => setRequests(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/submit-help', form)
      .then(() => {
        alert("Help request submitted!");
        setRequests([...requests, form]);
        setForm({ name: '', contact: '', description: '', location: '' });
      });
  };

  const handleDelete = (index) => {
    axios.delete(`http://localhost:8000/delete-request/${index}`)
      .then(() => {
        const updated = [...requests];
        updated.splice(index, 1);
        setRequests(updated);
      })
      .catch(err => console.error("Delete failed:", err));
  };

  /*
  const login = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        setUser(result.user);
        setForm(prev => ({ ...prev, name: result.user.displayName }));
      })
      .catch(console.error);
  };

  const logout = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch(console.error);
  };
  */

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>HelpHood 🤝</h1>

      {/*
      {!user ? (
        <button onClick={login} style={styles.button}>Login with Google</button>
      ) : (
        <>
          <p>
            Welcome, {user.displayName}
            <button onClick={logout} style={{ ...styles.button, backgroundColor: '#e74c3c', marginLeft: '1rem' }}>
              Logout
            </button>
          </p>
      */
        <>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} style={styles.input} required />
            <input name="contact" placeholder="Contact info" value={form.contact} onChange={handleChange} style={styles.input} required />
            <input name="location" placeholder="Location" value={form.location} onChange={handleChange} style={styles.input} required />
            <textarea name="description" placeholder="How can someone help you?" value={form.description} onChange={handleChange} style={styles.textarea} required />
            <button type="submit" style={styles.button}>Submit Help Request</button>
          </form>

          <h2 style={styles.subheading}>Help Board 📋</h2>
          <ul style={styles.list}>
            {requests.map((req, i) => (
              <li key={i} style={styles.listItem}>
                <strong>{req.name}</strong> ({req.contact})<br />
                <em>{req.location}</em><br />
                <span>{req.description}</span><br />
                <button
                  onClick={() => handleDelete(i)}
                  style={{ ...styles.button, backgroundColor: '#e74c3c', marginTop: '0.5rem' }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </>
      /* ) */ }
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '700px',
    margin: 'auto',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f8ff'
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    color: '#2c3e50'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '2rem'
  },
  input: {
    padding: '0.7rem',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc'
  },
  textarea: {
    padding: '0.7rem',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    minHeight: '80px'
  },
  button: {
    padding: '0.7rem',
    fontSize: '1rem',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  subheading: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#34495e'
  },
  list: {
    listStyle: 'none',
    paddingLeft: 0
  },
  listItem: {
    background: '#ffffff',
    border: '1px solid #ddd',
    borderRadius: '6px',
    padding: '1rem',
    marginBottom: '1rem'
  }
};

export default App;
