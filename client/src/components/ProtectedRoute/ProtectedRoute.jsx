import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (!user || JSON.parse(user).role !== 2995) {
      navigate('/');
    }
  }, [navigate]);

  return <>{children}</>;
};

export default ProtectedRoute;
