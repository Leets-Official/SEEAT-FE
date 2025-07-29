import Toast from './Toast';

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Toast />
    </>
  );
};

export default ToastProvider;
