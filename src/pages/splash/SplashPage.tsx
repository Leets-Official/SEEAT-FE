import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SEEATLogo } from '@/assets';

function SplashPage() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    // 0.2초 후 페이드인 시작
    const fadeInTimer = setTimeout(() => {
      setShow(true);
    }, 200);

    // 2초 후 로그인 페이지로 이동
    const navTimer = setTimeout(() => {
      navigate('/login');
    }, 2000);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(navTimer);
    };
  }, [navigate]);

  return (
    <div className="flex h-screen flex-col items-center justify-start pt-[270px]">
      <div
        className={`transition-opacity duration-[3000ms] ease-out ${
          show ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <SEEATLogo />
      </div>
    </div>
  );
}

export default SplashPage;
