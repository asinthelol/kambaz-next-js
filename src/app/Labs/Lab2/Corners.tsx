import styles from './index.module.css';

export default function Corners() {
  return (
    <div id={styles["wd-css-borders"]}>
      <h3>Rounded corners</h3>
      <p className={`${styles["wd-rounded-corners-top"]} ${styles["wd-border-thin"]} 
        ${styles["wd-border-blue"]} ${styles["wd-border-solid"]} ${styles["wd-padding-fat"]}`}>
        Rounded corners on the top </p>
      <p className={`${styles["wd-rounded-corners-bottom"]} ${styles["wd-border-thin"]} 
        ${styles["wd-border-blue"]} ${styles["wd-border-solid"]} ${styles["wd-padding-fat"]}`}>
        Rounded corners at the bottom </p>
      <p className={`${styles["wd-rounded-corners-all-around"]} ${styles["wd-border-thin"]} 
        ${styles["wd-border-blue"]} ${styles["wd-border-solid"]} ${styles["wd-padding-fat"]}`}>
        Rounded corners all around </p>
      <p className={`${styles["wd-rounded-corners-inline"]} ${styles["wd-border-thin"]} 
        ${styles["wd-border-blue"]} ${styles["wd-border-solid"]} ${styles["wd-padding-fat"]}`}>
        Different rounded corners </p>
    </div>

  );
}