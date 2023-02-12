import "./modal.styles.css";
import Card from "../card/card.component";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import { useModalContext } from "../../contexts/modal.context.js";

const Modal = ({ className, children }) => {
  const { showModal, closeModalHandler } = useModalContext();
  return (
    <Fragment>
      {showModal &&
        ReactDOM.createPortal(
          <>
            <section id="backdrop" onClick={closeModalHandler}></section>
            <Card className={className} >{children}</Card>
          </>,
          document.querySelector("#overlays")
        )}
    </Fragment>
  );
};

export default Modal;
