import { MouseEvent, ReactNode } from "react";

interface Props {
  isOpen: boolean;
  setIsClose: (e: MouseEvent<HTMLElement>) => void;
  children: ReactNode;
}

export const Modal = ({ children, isOpen, setIsClose }: Props) => {
  const padding = window.outerWidth - document.body.clientWidth + "px";

  if (isOpen) {
    document.body.style.marginRight = padding;
    document.body.style.overflow = "hidden";

    return (
      <div className="modal" onClick={setIsClose}>
        <div className="modal__content">{children}</div>
      </div>
    );
  } else {
    document.body.style.overflow = "";
    document.body.style.marginRight = "";

    return null;
  }
};
