import type { ReactNode } from 'react';

interface BaseModalProps {
  children: ReactNode;
}

const BaseModal = ({ children }: BaseModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {children}
    </div>
  );
};

export default BaseModal;
