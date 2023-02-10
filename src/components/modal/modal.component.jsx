import "./modal.styles.css";
import Card from "../card/card.component";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const Modal = ({ className, children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <>
          <section id="backdrop"></section>
          <Card className={className}>{children}</Card>
        </>,
        document.querySelector("#overlays")
      )}
    </Fragment>
  );
};

export default Modal;
