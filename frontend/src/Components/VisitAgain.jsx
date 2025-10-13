import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './VisitAgain.css';

export default function VisitAgain() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/'), 1500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="visit-again-wrapper">
      <div className="visit-content">
        <span className="emoji">👋</span>
        <h1>Visit Again !!</h1>
      </div>
    </div>
  );
}
