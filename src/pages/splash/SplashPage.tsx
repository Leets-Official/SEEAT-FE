// src/pages/splash/SplashPage.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2000); // 2초 뒤 이동

    return () => clearTimeout(timer); // cleanup
  }, [navigate]);

  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <h1 className="text-4xl font-bold text-white">SEEAT</h1>
    </div>
  );
}

export default SplashPage;
