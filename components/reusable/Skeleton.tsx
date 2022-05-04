import styles from "../../styles/reusable/_skeleton.module.scss";

const Skeleton = () => {
  return (
    <div className={styles.skeletonContainer}>
      <div className={`${styles.emptyBox} ${styles.img}`}></div>
      <div className={`${styles.emptyBox} ${styles.text}`}></div>
      <div className={`${styles.emptyBox} ${styles.text}`}></div>
    </div>
  );
};

export default Skeleton;
