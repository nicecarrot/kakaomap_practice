import { createPortal } from "react-dom";
import styles from "../../styles/reusable/_modal.module.scss";

interface Props {
  brand: string;
  event: string;
  img: string;
  name: string;
  price: number;
}
const Modal = ({ brand, event, img, name, price }: Props) => {
  const portal =
    typeof window !== "undefined" &&
    (document.getElementById("portal") as HTMLElement);

  //이벤트 상품하고 모달을 연결.......
  return portal
    ? createPortal(<div className={styles.Modal}>{brand}</div>, portal)
    : null;
};

export default Modal;
