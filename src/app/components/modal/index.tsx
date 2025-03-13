import React, { ReactNode } from "react";

interface ModalProps {
  header: string; // Header should be a string
  children: ReactNode; // Children can be any valid React elements
}

const Modal: React.FC<ModalProps> = ({ header, children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-lg text-white w-[90vw] max-w-4xl">
        <h2 className="text-xl font-bold mb-4">{header}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
