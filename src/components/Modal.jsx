import React from "react";
import undDev from "../images/undDev.jpg";
import ModalStyle from "../styles/ModalStyle.css";

export const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onclick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <img src={undDev} alt="" />
        <div className="modalRight">
          <p onClick={onClose} className="closeBtn">
            X
          </p>
          <div className="content">
            <p>Website Under Development</p>
          </div>
        </div>
      </div>
    </div>
  );
};
