// import { useState, useEffect } from 'react';

// export default function VerifyOtp() {
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const savedEmail = localStorage.getItem('pendingEmail');
//     if (savedEmail) setEmail(savedEmail);
//   }, []);

//   const handleVerify = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:5000/api/verify-otp', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, otp }),
//       });
//       const data = await res.json();

//      if (res.ok && data.token) {
//   localStorage.setItem('token', data.token);
//   localStorage.setItem('isLoggedIn', 'true'); // ✅ Required for App.jsx
//   localStorage.removeItem('pendingEmail');
//   window.location.href = '/dashboard';
// }
//  else {
//         setMessage(data.msg || 'Verification failed');
//       }
//     } catch {
//       setMessage('Error verifying OTP');
//     }
//   };

//   const styles = {
//     page: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       minHeight: '100vh',
//       backgroundColor: '#000000ff',
//       fontFamily: 'Montserrat, sans-serif',
//     },
//     heading: {
//       fontSize: '2.5rem',
//       marginBottom: '4rem',
//       color: '#fae7c5ff',
//       fontWeight: 'bold',
//       textAlign: 'center',
//     },
//     container: {
//       background: '#fae7c5ff',
//       padding: '2.4em',
//       borderRadius: '20px',
//       boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//       maxWidth: '400px',
//       width: '100%',
//       textAlign: 'center',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//     subheading: {
//       fontSize: '1.5rem',
//       marginBottom: '2rem',
//       fontWeight: 'bold',
//       textAlign: 'center',
//     },
//     form: {
//       width: '70%',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//     input: {
//       width: '100%',
//       padding: '15px',
//       marginBottom: '1.5rem',
//       border: '1px solid #fae7c5ff',
//       borderRadius: '5px',
//       fontSize: '1rem',
//       textAlign: 'center',
//     },
//     button: {
//       backgroundColor: '#fb0000ff',
//       color: 'white',
//       padding: '10px 0px',
//       fontSize: '1rem',
//       border: 'none',
//       borderRadius: '4px',
//       cursor: 'pointer',
//       width: '50%',
//     },
//     message: {
//       marginTop: '1.5rem',
//       fontWeight: 'bold',
//       color: '#4CAF50',
//     },
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.heading}><u>OTP Verification</u></div>
//       <div style={styles.container}>
//         <div style={styles.subheading}><u>Enter OTP</u></div>
//         <form onSubmit={handleVerify} style={styles.form}>
//           <input
//             type="email"
//             placeholder="Your Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={styles.input}
//           />
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             required
//             style={styles.input}
//           />
//           <button type="submit" style={styles.button}>Verify</button>
//         </form>
//         <p style={styles.message}>{message}</p>
//       </div>
//     </div>
//   );
// }
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
      backgroundColor: '#000',
      fontFamily: 'Montserrat, sans-serif',
      padding: '1rem',
    }}>
      <div style={{
        maxWidth: '400px',
        width: '100%',
        background: '#fae7c5',
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
            backgroundColor: '#fb0000',
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
            color: message.includes('Error') || message.includes('failed') ? '#ff0000' : '#4CAF50',
          }}>{message}</p>
        )}
      </div>
    </div>
  );
}
