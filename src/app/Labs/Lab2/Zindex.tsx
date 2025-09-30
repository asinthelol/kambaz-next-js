import styles from './index.module.css';

export default function Zindex() {
  return (
    <div id={styles["wd-z-index"]}>
      <h2>Z index</h2>
      <div className={styles["wd-pos-relative"]}>
        <div className={`${styles["wd-pos-absolute-10-10"]} ${styles["wd-bg-color-yellow"]} ${styles["wd-dimension-portrait"]}`}>
          Portrait </div>
        <div className={`${styles["wd-zindex-bring-to-front"]} ${styles["wd-pos-absolute-50-50"]} ${styles["wd-dimension-landscape"]} ${styles["wd-bg-color-blue"]} ${styles["wd-fg-color-white"]}`}>
          Landscape </div>
        <div className={`${styles["wd-pos-absolute-120-20"]} ${styles["wd-bg-color-red"]} ${styles["wd-dimension-square"]}`}>
          Square </div>
      </div><br /><br /><br /><br /><br /><br /><br />
    </div>

  );
}