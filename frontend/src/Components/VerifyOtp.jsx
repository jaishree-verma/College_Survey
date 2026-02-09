
import { useState, useEffect } from 'react';

export default function VerifyOtp() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const savedEmail = localStorage.getItem('pendingEmail');
    if (savedEmail) setEmail(savedEmail);
  }, []);

  const handleVerify = async (e) => {
    e.preventDefault();
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanOtp = (otp || '').trim();

    try {
      const res = await fetch('http://localhost:5000/api/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail, otp: cleanOtp }),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.removeItem('pendingEmail');
        window.location.href = '/dashboard';
      } else {
        setMessage(data.msg || 'Verification failed');
      }
    } catch {
      setMessage('Error verifying OTP');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#e2f2f8',
      fontFamily: 'Montserrat, sans-serif',
      padding: '1rem',
    }}>
      <div style={{
        maxWidth: '400px',
        width: '100%',
        background: '#ffffffff',
        padding: '2rem',
        borderRadius: '20px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        textAlign: 'center',
      }}>
        <h1 style={{
          fontSize: '2rem',
          marginBottom: '1.5rem',
          color: '#000',
          fontWeight: 'bold',
        }}><u>OTP Verification</u></h1>

        <form onSubmit={handleVerify} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: '12px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontSize: '1rem',
              textAlign: 'center',
            }}
          />
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            style={{
              padding: '12px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontSize: '1rem',
              textAlign: 'center',
            }}
          />
          <button type="submit" style={{
            backgroundColor: '#006efe',
            color: 'white',
            padding: '10px',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}>Verify</button>
        </form>

        {message && (
          <p style={{
            marginTop: '1rem',
            fontWeight: 'bold',
            color: message.includes('Error') || message.includes('failed') ? '#000000ff' : '#000000ff',
          }}>{message}</p>
        )}
      </div>
    </div>
  );
}
