import React from "react";
import "./Modal.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <article className={`modal ${isOpen && "is-open"} `} onClick={closeModal}>
      <div
        className="modal-container rounded-xl"
        onClick={handleModalContainerClick}
      >
        <button className="modal-close text-yellow-300 " onClick={closeModal}>
          <AiFillCloseCircle className=" h-7 w-7 " />
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
