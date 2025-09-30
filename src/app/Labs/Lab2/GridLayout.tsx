import styles from './index.module.css';

export default function GridLayout() {
  return (
    <div id={styles["wd-css-grid-layout"]}>
      <div id={styles["wd-css-left-right-layout"]}>
        <h2>Grid layout</h2>
        <div className={styles["wd-grid-row"]}>
          <div className={`${styles["wd-grid-col-half-page"]} ${styles["wd-bg-color-yellow"]}`}>
            <h3>Left half</h3>      </div>
          <div className={`${styles["wd-grid-col-half-page"]} ${styles["wd-bg-color-blue"]} ${styles["wd-fg-color-white"]}`}>
            <h3>Right half</h3>      </div>
        </div>
      </div>
      <div id={styles["wd-css-left-third-right-two-thirds"]} className={styles["wd-grid-row"]}>
        <div className={`${styles["wd-grid-col-third-page"]} ${styles["wd-bg-color-green"]} ${styles["wd-fg-color-white"]}`}>
          <h3>Left third</h3>    </div>
        <div className={`${styles["wd-grid-col-two-thirds-page"]} ${styles["wd-bg-color-red"]} ${styles["wd-fg-color-white"]}`}>
          <h3>Right two thirds</h3>    </div>
      </div>
      <div id={styles["wd-css-side-bars"]} className={styles["wd-grid-row"]}>
        <div className={`${styles["wd-grid-col-left-sidebar"]} ${styles["wd-bg-color-yellow"]}`}>
          <h3>Side bar</h3>
          <p>This is the left sidebar</p>    </div>
        <div className={`${styles["wd-grid-col-main-content"]} ${styles["wd-bg-color-blue"]} ${styles["wd-fg-color-white"]}`}>
          <h3>Main content</h3>
          <p>
            This is the main content. This is the main content. This is the
            main content.
          </p>    </div>

        <div className={`${styles["wd-grid-col-right-sidebar"]} ${styles["wd-bg-color-green"]} ${styles["wd-fg-color-white"]}`}>
          <h3>Side bar</h3>
          <p>This is the right sidebar</p>
        </div>
      </div>
    </div>
  );
}