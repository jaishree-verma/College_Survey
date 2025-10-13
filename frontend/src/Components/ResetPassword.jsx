// import { useState } from 'react';
// import { useNavigate, useSearchParams } from 'react-router-dom';

// export default function ResetPassword() {
//   const [searchParams] = useSearchParams();
//   const token = searchParams.get('token');
//   const [newPassword, setNewPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleReset = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:5000/api/reset-password', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ token, newPassword }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         setMessage(data.msg || 'Password reset successful');
//         setTimeout(() => navigate('/login'), 2000); // redirect after success
//       } else {
//         setMessage(data.msg || 'Reset failed');
//       }
//     } catch {
//       setMessage('Server error during password reset');
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
//       <div style={styles.heading}><u>Reset Password</u></div>
//       <div style={styles.container}>
//         <div style={styles.subheading}><u>Enter New Password</u></div>
//         <form onSubmit={handleReset} style={styles.form}>
//           <input
//             type="password"
//             placeholder="New Password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             required
//             style={styles.input}
//           />
//           <button type="submit" style={styles.button}>Reset</button>
//         </form>
//         <p style={styles.message}>{message}</p>
//       </div>
//     </div>
//   );
// }
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    const cleanPassword = (newPassword || '').trim();

    try {
      const res = await fetch('http://localhost:5000/api/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, newPassword: cleanPassword }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.msg || 'Password reset successful');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setMessage(data.msg || 'Reset failed');
      }
    } catch {
      setMessage('Server error during password reset');
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
        <h1 style={styles.heading}><u>Reset Password</u></h1>
        <h2 style={styles.subheading}><u>Enter New Password</u></h2>
        <form onSubmit={handleReset} style={styles.form}>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Reset</button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}
