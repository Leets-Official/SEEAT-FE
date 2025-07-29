import type { ReactNode } from 'react';
import ModalLayout from './Modal';

const ModalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <ModalLayout />
    </>
  );
};

export default ModalProvider;
