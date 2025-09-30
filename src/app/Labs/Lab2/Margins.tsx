import styles from './index.module.css';

export default function Margins() {
  return (
    <div id={styles["wd-css-margins"]}>
      <h2>Margins</h2>
      <div
        className={`${styles["wd-margin-bottom"]} ${styles["wd-padded-top-left"]} ${styles["wd-border-fat"]}
                    ${styles["wd-border-red"]} ${styles["wd-border-solid"]} ${styles["wd-bg-color-yellow"]}`}>
        Margin bottom </div>
      <div
        className={`${styles["wd-margin-right-left"]} ${styles["wd-padded-bottom-right"]} ${styles["wd-border-fat"]}
                    ${styles["wd-border-blue"]} ${styles["wd-border-solid"]} ${styles["wd-bg-color-yellow"]}`}>
        Margin left right </div>
      <div
        className={`${styles["wd-margin-all-around"]} ${styles["wd-padding-fat"]} ${styles["wd-border-fat"]}
                    ${styles["wd-border-yellow"]} ${styles["wd-border-solid"]} ${styles["wd-bg-color-blue"]} ${styles["wd-fg-color-white"]}`}>
        Margin all around </div>
    </div>

  );
}