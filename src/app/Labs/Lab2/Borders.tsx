import styles from './index.module.css';

export default function Borders() {
  return (
    <div id={styles["wd-css-borders"]}>
      <h2>Borders</h2>
      <p className={styles["wd-border-fat"] + " " + styles["wd-border-red"] + " " + styles["wd-border-solid"]}>
        Solid fat red border
      </p>
      <p className={styles["wd-border-thin"] + " " + styles["wd-border-blue"] + " " + styles["wd-border-dashed"]}>
        Dashed thin blue border
      </p>
    </div>
  );
}