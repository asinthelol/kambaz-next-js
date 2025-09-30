import styles from './index.module.css';

export default function ForegroundColors() {
  return (
    <div id={styles["wd-css-colors"]}>
      <h2>Colors</h2>
      <h3 className={styles["wd-fg-color-blue"]}>Foreground color</h3>
      <p className={styles["wd-fg-color-red"]}>
        The text in this paragraph is red but
        <span className={styles["wd-fg-color-green"]}>this text is green</span>
      </p>
    </div>
  );
}