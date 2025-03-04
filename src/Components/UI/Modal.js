import ReactDOM from "react-dom";
import { Fragment } from "react";
import "./Modal.css";
import { Backdrop } from "./loader";

export const Modal = ({ onClose, children }) => {
  return ReactDOM.createPortal(
    <Fragment>
      <Backdrop onClose={onClose} />
      <div className="modal">
        <button type="button" className="bttn" onClick={onClose}>
          &times;
        </button>
        <div className="content">{children}</div>
      </div>
    </Fragment>,
    document.getElementById("modal-root")
  );
};
