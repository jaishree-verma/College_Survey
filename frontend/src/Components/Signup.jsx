// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Signup() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:5000/api/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await res.json();

//       if (res.ok) {
//         localStorage.setItem('pendingEmail', email);
//         navigate('/verify-otp');
//       } else {
//         setMessage(data.msg || 'Signup failed');
//       }
//     } catch {
//       setMessage('Server error during signup');
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
//     googleButton: {
//       marginTop: '1rem',
//       backgroundColor: '#4285F4',
//       color: 'white',
//       padding: '10px 20px',
//       fontSize: '1rem',
//       border: 'none',
//       borderRadius: '4px',
//       cursor: 'pointer',
//     },
//     message: {
//       marginTop: '1.5rem',
//       fontWeight: 'bold',
//       color: '#ff0015ff',
//     },
//     link: {
//       marginTop: '1rem',
//       color: '#fb0000ff',
//       textDecoration: 'underline',
//       fontSize: '0.9rem',
//     },
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.heading}><u>Signup to Continue</u></div>
//       <div style={styles.container}>
//         <div style={styles.subheading}><u>Enter Details</u></div>
//         <form onSubmit={handleSignup} style={styles.form}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={styles.input}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={styles.input}
//           />
//           <button type="submit" style={styles.button}>Register</button>
//         </form>

//         <a href="/forgot-password" style={styles.link}>Forgot Password?</a>
//         <a href="http://localhost:5000/api/auth/google"></a>

//         <button
//           onClick={() => window.location.href = 'http://localhost:5000/api/auth/google'}
//           style={styles.googleButton}
//         >
//           Sign up with Google
//         </button>

//         <p style={styles.message}>{message}</p>
//       </div>
//     </div>
//   );
// }
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanPassword = (password || '').trim();

    try {
      const res = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail, password: cleanPassword }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('pendingEmail', cleanEmail);
        navigate('/verify-otp');
      } else {
        setMessage(data.msg || 'Signup failed');
      }
    } catch {
      setMessage('Server error during signup');
    }
  };

  const styles = {
    page: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#000',
      fontFamily: 'Montserrat, sans-serif',
      padding: '1rem',
    },
    heading: {
      fontSize: '2.5rem',
      marginBottom: '2rem',
      color: '#fae7c5',
      fontWeight: 'bold',
      textAlign: 'center',
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
    subheading: {
      fontSize: '1.5rem',
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
      padding: '15px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '1rem',
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#fb0000',
      color: 'white',
      padding: '10px 0',
      fontSize: '1rem',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      width: '100%',
    },
    googleButton: {
      marginTop: '1rem',
      backgroundColor: '#4285F4',
      color: 'white',
      padding: '10px 0',
      fontSize: '1rem',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      width: '100%',
    },
    message: {
      marginTop: '1rem',
      fontWeight: 'bold',
      color: '#ff0015',
    },
    link: {
      marginTop: '1rem',
      color: '#fb0000',
      textDecoration: 'underline',
      fontSize: '0.9rem',
      display: 'block',
    },
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}><u>Signup to Continue</u></h1>
      <div style={styles.container}>
        <h2 style={styles.subheading}><u>Enter Details</u></h2>
        <form onSubmit={handleSignup} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Register</button>
        </form>

        <a href="/forgot-password" style={styles.link}>Forgot Password?</a>

        <button
          onClick={() => window.location.href = 'http://localhost:5000/api/auth/google'}
          style={styles.googleButton}
        >
          Sign up with Google
        </button>

        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}
