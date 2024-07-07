import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { setView } from "../../Store";

interface ModalProps {
  children: ReactNode; // ReactNode allows any React children to be passed
  [key: string]: any; // Allow any other props to be passed
}

function Modal({ children, ...rest }: ModalProps) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setView(""));
    document.body.style.overflow = "auto";
  };

  return createPortal(
    <div onClick={handleClick} className="modal" {...rest}>
      <div className="modal-content">{children}</div>
    </div>,
    document.body
  );
}

export default Modal;
