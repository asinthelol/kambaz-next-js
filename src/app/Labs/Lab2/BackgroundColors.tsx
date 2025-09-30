import styles from './index.module.css';

export default function ForegroundColors() {
  return (
    <div id={styles["wd-css-background-colors"]}>
      <h3 className={styles["wd-bg-color-blue"] + " " + styles["wd-fg-color-white"]}>Background color</h3>
      <p className={styles["wd-bg-color-red"] + " " + styles["wd-fg-color-black"]}>
        This background of this paragraph is red but
        <span className={styles["wd-bg-color-green"] + " " + styles["wd-fg-color-white"]}>
      the background of this text is green and the foreground white
        </span>
      </p>
    </div>
  )
}