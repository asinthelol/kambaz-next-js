import styles from './index.module.css';

export default function Padding() {
  return (
    <div id={styles["wd-css-paddings"]}>
      <h2>Padding</h2>
      <div className={`${styles["wd-padded-top-left"]} ${styles["wd-border-fat"]} 
          ${styles["wd-border-red"]} ${styles["wd-border-solid"]} ${styles["wd-bg-color-yellow"]}`}>
        Padded top left </div>
      <div className={`${styles["wd-padded-bottom-right"]} ${styles["wd-border-fat"]} 
          ${styles["wd-border-blue"]} ${styles["wd-border-solid"]} ${styles["wd-bg-color-yellow"]}`}>
        Padded bottom right </div>
      <div className={`${styles["wd-padding-fat"]} ${styles["wd-border-fat"]} 
          ${styles["wd-border-yellow"]} ${styles["wd-border-solid"]} ${styles["wd-bg-color-blue"]} ${styles["wd-fg-color-white"]}`}>
        Padded all around
      </div>
    </div>

  );
}