import React, { Dispatch, Fragment } from "react";
import styles from "../../styles/reusable/_slide.module.scss";

interface Props {
  setIsShow: Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element;
}

const Slide = ({ setIsShow, children }: Props) => {
  // slide를 눌러도 portal이 안없어지게
  const onClickSlide = (e: any) => {
    e.stopPropagation();
  };

  // close button을 눌렀을 때만 dim이 사라짐.
  const onClickCloseBtn = () => {
    setIsShow((prev) => !prev);
  };
  return (
    <div className={styles.slideWrapper} onClick={onClickSlide}>
      <span className={styles.closeBtn} onClick={onClickCloseBtn}>
        <i className="fa-solid fa-xmark"></i>
      </span>
      {children}
    </div>
  );
};

export default Slide;
