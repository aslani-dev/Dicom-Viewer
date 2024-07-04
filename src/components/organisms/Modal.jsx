import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { setView } from "../../store";

function Modal({ children, ...rest }) {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(setView(""));
    document.body.style.overflow = "auto";
  };

  return createPortal(
    <div onClick={handleClick} className="modal " {...rest}>
      {children}
    </div>,
    document.body
  );
}

export default Modal;
