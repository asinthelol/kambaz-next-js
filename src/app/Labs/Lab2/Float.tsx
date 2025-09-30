import styles from './index.module.css';

export default function Float() {
  return (
    <div id={styles["wd-float-divs"]}>
      <h2>Float</h2>
      <div>
        <img className={styles["wd-float-right"]}
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"/>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic ...
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic ...
        <img className={styles["wd-float-left"]}
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"/>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic ...
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic ...
        <img className={styles["wd-float-right"]}
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"/>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic ...
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic ...
        <img className={styles["wd-float-left"]}
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"/>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic ...
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic ...
        <div className={styles["wd-float-done"]}></div>
      </div>
    </div>

  );
}