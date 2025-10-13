// import { useState } from 'react';

// export default function ForgotPassword() {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleReset = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:5000/api/forgot-password', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email }),
//       });
//       const data = await res.json();
//       setMessage(data.msg || 'Check your email for reset instructions');
//     } catch {
//       setMessage('Error sending reset email');
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
//       <div style={styles.heading}><u>Forgot Password</u></div>
//       <div style={styles.container}>
//         <div style={styles.subheading}><u>Reset Your Password</u></div>
//         <form onSubmit={handleReset} style={styles.form}>
//           <input
//             type="email"
//             placeholder="Enter your registered email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={styles.input}
//           />
//           <button type="submit" style={styles.button}>Send Reset Link</button>
//         </form>
//         <p style={styles.message}>{message}</p>
//       </div>
//     </div>
//   );
// }
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
      backgroundColor: '#000',
      fontFamily: 'Montserrat, sans-serif',
      padding: '1rem',
    },
    container: {
      background: '#fae7c5',
      padding: '2rem',
      borderRadius: '20px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      maxWidth: '400px',
      width: '100%',
      textAlign: 'center',
    },
    heading: {
      fontSize: '2rem',
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
      width: '100%',
      padding: '12px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '1rem',
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#fb0000',
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
        <h2 style={styles.subheading}><u>Reset Your Password</u></h2>
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
