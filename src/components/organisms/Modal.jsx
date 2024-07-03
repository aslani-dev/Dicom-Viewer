import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { clear } from "../../store/index";

function Modal({ children, ...rest }) {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(clear());
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
