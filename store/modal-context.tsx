'use client';
import { createContext, useState } from 'react';

export const ModalContext = createContext({
  isModalOpen: false,
  openModalHandler: () => {},
  closeModalHandler: () => {},
});

const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModalHandler = () => {
    setModalOpen(true);
  };
  const closeModalHandler = () => {
    setModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{ isModalOpen, openModalHandler, closeModalHandler }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export default ModalContextProvider;
