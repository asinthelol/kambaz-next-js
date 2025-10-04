import styles from './index.module.css';

export default function Flex() {
  return (
    <>
    <div id={styles["wd-css-flex"]}>
      <h2>Flex</h2>
      <div className={styles["wd-flex-row-container"]}>
        <div className={styles["wd-bg-color-yellow"]}>Column 1</div>
        <div className={styles["wd-bg-color-blue"]}>Column 2</div>
        <div className={styles["wd-bg-color-red"]}>Column 3</div>
      </div>
    </div>

    <div id={styles["wd-css-flex"]}>
      <h2>Flex</h2>
      <div className={styles["wd-flex-row-container"]}>
        <div className={styles["wd-bg-color-yellow"]}>
          Column 1</div>
        <div className={styles["wd-bg-color-blue"]}>
          Column 2</div>
        <div className={`${styles["wd-bg-color-red"]} ${styles["wd-flex-grow-1"]}`}>
          Column 3</div>
      </div>
    </div>

    <div id={styles["wd-css-flex"]}>
      <h2>Flex</h2>
      <div className={styles["wd-flex-row-container"]}>
        <div className={`${styles["wd-bg-color-yellow"]} ${styles["wd-width-75px"]}`}>
          Column 1</div>
        <div className={styles["wd-bg-color-blue"]}>
          Column 2</div>
        <div className={`${styles["wd-bg-color-red"]} ${styles["wd-flex-grow-1"]}`}>
          Column 3</div>
      </div>
    </div>
    </>
  );
}