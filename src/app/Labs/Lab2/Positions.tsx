import styles from './index.module.css';

export default function Positions() {
  return (
    <>
      <div id={styles["wd-css-position-relative"]}>
        <h2>Relative</h2>
        <div className={styles["wd-bg-color-gray"]}>
          <div className={`${styles["wd-bg-color-yellow"]} ${styles["wd-dimension-portrait"]}`}>
            <div className={styles["wd-pos-relative-nudge-down-right"]}>
              Portrait</div></div>
          <div className={`${styles["wd-pos-relative-nudge-up-right"]} ${styles["wd-bg-color-blue"]} ${styles["wd-fg-color-white"]} ${styles["wd-dimension-landscape"]}`}>
            Landscape</div>
          <div className={`${styles["wd-bg-color-red"]} ${styles["wd-dimension-square"]}`}>
            Square</div>
        </div>
      </div>

      <div id={styles["wd-css-position-absolute"]}>
        <h2>Absolute position</h2>
        <div className={styles["wd-pos-relative"]}>
          <div className={`${styles["wd-pos-absolute-10-10"]} ${styles["wd-bg-color-yellow"]} ${styles["wd-dimension-portrait"]}`}>
            Portrait</div>
          <div className={`${styles["wd-pos-absolute-50-50"]} ${styles["wd-bg-color-blue"]} ${styles["wd-fg-color-white"]} ${styles["wd-dimension-landscape"]}`}>
            Landscape</div>
          <div className={`${styles["wd-pos-absolute-120-20"]} ${styles["wd-bg-color-red"]} ${styles["wd-dimension-square"]}`}>
            Square</div>
        </div><br /><br /><br /><br /><br /><br /><br />
      </div>

      <div id={styles["wd-css-position-fixed"]}>
        <h2>Fixed position</h2>
        Checkout the blue square that says &quot;Fixed position&quot; stuck all the way on the right and half way down the page. It doesn't scroll with the rest of the page. Its position is &quot;Fixed&quot;.
        <div className={`${styles["wd-pos-fixed"]} ${styles["wd-dimension-square"]} ${styles["wd-bg-color-blue"]} ${styles["wd-fg-color-white"]}`}>
          Fixed position
        </div>
      </div>

    </>
  );
}