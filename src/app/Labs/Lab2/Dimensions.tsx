import styles from './index.module.css';

export default function Dimensions() {
  return (
    <div id={styles["wd-css-dimensions"]}>
      <h2>Dimension</h2>
      <div>
        <div className={`${styles["wd-dimension-portrait"]} ${styles["wd-bg-color-yellow"]}`}>
          Portrait
        </div>
        <div className={`${styles["wd-dimension-landscape"]} ${styles["wd-bg-color-blue"]} ${styles["wd-fg-color-white"]}`}>
          Landscape
        </div>
        <div className={`${styles["wd-dimension-square"]} ${styles["wd-bg-color-red"]}`}>
          Square
        </div>
      </div>
    </div>

  );
}