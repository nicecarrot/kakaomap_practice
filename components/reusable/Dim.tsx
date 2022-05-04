import React, { Dispatch, SetStateAction } from "react";
import { createPortal } from "react-dom";
import styles from "../../styles/reusable/_dim.module.scss";

interface Props {
  children: JSX.Element;
  setIsShow: Dispatch<React.SetStateAction<boolean>>;
}

// 모바일이나 태블릿일 경우 사용.
const Dim = ({ children, setIsShow }: Props) => {
  const portal = document.getElementById("portal")!;
  return createPortal(
    <div
      className={styles.dimWrapper}
      onClick={() => setIsShow((prev) => !prev)}
    >
      {children}
    </div>,
    portal
  );
};

export default Dim;
