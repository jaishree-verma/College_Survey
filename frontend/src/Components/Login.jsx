// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await res.json();

//       if (res.ok) {
//         localStorage.setItem('pendingEmail', email);
//         setMessage(data.msg || 'OTP sent to your email');
//         navigate('/verify-otp');
//       } else {
//         setMessage(data.msg || 'Invalid credentials');
//       }
//     } catch {
//       setMessage('Server error during login');
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
//     link: {
//       marginTop: '1rem',
//       color: '#fb0000ff',
//       textDecoration: 'underline',
//       fontSize: '0.9rem',
//     },
//     message: {
//       marginTop: '1.5rem',
//       fontWeight: 'bold',
//       color: '#ff0015ff',
//     },
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.heading}><u>Login to Continue</u></div>
//       <div style={styles.container}>
//         <div style={styles.subheading}><u>Enter Credentials</u></div>
//         <form onSubmit={handleLogin} style={styles.form}>
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
//           <button type="submit" style={styles.button}>Login</button>
//         </form>

//         <a href="/forgot-password" style={styles.link}>Forgot Password?</a>

//         <button
//           onClick={() => window.location.href = 'http://localhost:5000/api/auth/google'}
//           style={styles.googleButton}
//         >
//           Login with Google
//         </button>

//         <p style={styles.message}>{message}</p>
//       </div>
//     </div>
//   );
// }
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   // Use env for LAN testing; fallback to localhost for dev on laptop
//   const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setMessage('');

//     try {
//       const res = await fetch(`${BASE_URL}/api/login`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//         // Include if your server uses cookies/sessions
//         // credentials: 'include',
//       });

//       // Safely parse JSON (server errors can be HTML/plain sometimes)
//       let data = {};
//       try {
//         data = await res.json();
//       } catch {
//         data = { msg: 'Unexpected server response' };
//       }

//       if (res.ok) {
//         localStorage.setItem('pendingEmail', email);
//         setMessage(data.msg || 'OTP sent to your email');
//         navigate('/verify-otp');
//       } else {
//         setMessage(data.msg || 'Invalid credentials');
//       }
//     } catch (err) {
//       console.error('Login error:', err);
//       setMessage('Server error during login');
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
//     link: {
//       marginTop: '1rem',
//       color: '#fb0000ff',
//       textDecoration: 'underline',
//       fontSize: '0.9rem',
//     },
//     message: {
//       marginTop: '1.5rem',
//       fontWeight: 'bold',
//       color: '#ff0015ff',
//     },
//   };

//   const handleGoogleLogin = () => {
//     // Use the same BASE_URL to work on phone too
//     window.location.href = `${BASE_URL}/api/auth/google`;
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.heading}><u>Login to Continue</u></div>
//       <div style={styles.container}>
//         <div style={styles.subheading}><u>Enter Credentials</u></div>
//         <form onSubmit={handleLogin} style={styles.form}>
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
//           <button type="submit" style={styles.button}>Login</button>
//         </form>

//         <a href="/forgot-password" style={styles.link}>Forgot Password?</a>

//         <button onClick={handleGoogleLogin} style={styles.googleButton}>
//           Login with Google
//         </button>

//         <p style={styles.message}>{message}</p>
//       </div>
//     </div>
//   );
// }
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanPassword = (password || '').trim();

    try {
      const res = await fetch(`${BASE_URL}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail, password: cleanPassword }),
      });

      let data = {};
      try {
        data = await res.json();
      } catch {
        data = { msg: 'Unexpected server response' };
      }

      if (res.ok) {
        localStorage.setItem('pendingEmail', cleanEmail);
        setMessage(data.msg || 'OTP sent to your email');
        navigate('/verify-otp');
      } else {
        setMessage(data.msg || 'Invalid credentials');
      }
    } catch (err) {
      console.error('Login error:', err);
      setMessage('Server error during login');
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${BASE_URL}/api/auth/google`;
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
    googleButton: {
      marginTop: '1rem',
      backgroundColor: '#4285F4',
      color: 'white',
      padding: '10px',
      fontSize: '1rem',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    link: {
      marginTop: '1rem',
      color: '#fb0000',
      textDecoration: 'underline',
      fontSize: '0.9rem',
      display: 'block',
    },
    message: {
      marginTop: '1rem',
      fontWeight: 'bold',
      color: '#ff0015',
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}><u>Login to Continue</u></h1>
        <h2 style={styles.subheading}><u>Enter Credentials</u></h2>
        <form onSubmit={handleLogin} style={styles.form}>
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
          <button type="submit" style={styles.button}>Login</button>
        </form>

        <a href="/forgot-password" style={styles.link}>Forgot Password?</a>

        <button onClick={handleGoogleLogin} style={styles.googleButton}>
          Login with Google
        </button>

        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}
