
import { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

  const handleReset = async (e) => {
    e.preventDefault();
    const cleanEmail = (email || '').trim().toLowerCase();

    try {
      const res = await fetch(`${BASE_URL}/api/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail }),
      });

      const data = await res.json();
      setMessage(data.msg || 'Check your email for reset instructions');
    } catch {
      setMessage('Error sending reset email');
    }
  };

  const styles = {
    page: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor:'#e2f2f8',
      fontFamily: 'Montserrat, sans-serif',
      padding: '1rem',
    },
    container: {
      background: '#ffffffff',
      padding: '2rem',
      borderRadius: '20px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      maxWidth: '400px',
      width: '100%',
      textAlign: 'center',
    },
    heading: {
      fontSize: '1.8rem',
      marginBottom: '1.5rem',
      color: '#000',
      fontWeight: 'bold',
    },
    subheading: {
      fontSize: '1.2rem',
      marginBottom: '1.5rem',
      fontWeight: 'bold',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    input: {
      width: '93%',
      padding: '12px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '1rem',
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#4285F4',
      color: 'white',
      padding: '10px',
      fontSize: '1rem',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    message: {
      marginTop: '1rem',
      fontWeight: 'bold',
      color: '#4CAF50',
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}><u>Forgot Password</u></h1>
        <h2 style={styles.subheading}>Reset Your Password</h2>
        <form onSubmit={handleReset} style={styles.form}>
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Send Reset Link</button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}
