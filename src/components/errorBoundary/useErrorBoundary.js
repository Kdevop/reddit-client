import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useErrorBoundary() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const errorHandler = (errorEvent) => {
      setError(errorEvent.error);
      navigate('/error');
    };
    window.addEventListener('error', errorHandler);
    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, [navigate]);

  return error;
}

export default useErrorBoundary;