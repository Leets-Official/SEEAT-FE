import { useToast } from '@/hooks/useToast';

const ToastExample = () => {
  const showToast = useToast();

  return <button onClick={() => showToast('seeat 팀에게 의견을 보냈어요.')}>토스트 띄우기</button>;
};

export default ToastExample;
