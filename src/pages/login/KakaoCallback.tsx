import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const KakaoCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tempKey = params.get('tempKey');

    if (tempKey) {
      // 전역 상태나 localStorage에 저장
      localStorage.setItem('tempKey', tempKey);
      navigate('/onboarding/nickname');
    } else {
      navigate('/login'); // fallback
    }
  }, [location, navigate]);

  return null;
};

export default KakaoCallback;
