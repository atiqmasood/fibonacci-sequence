import React from "react";
import Button from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white shadow-lg p-8 max-w-lg mx-auto w-[490px] rounded-[10px] py-[34px] px-[25px]">
        <h2 className="text-2xl font-semibold mb-[7px]">{title}</h2>
        <p className="text-base mb-[32px] font-normal text-[#717171]">
          {message}
        </p>
        <div className="flex justify-end">
          {" "}
          <Button onClick={onClose}>Ok</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
