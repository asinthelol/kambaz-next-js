import styles from './Classes.module.css';
export default function Classes() {
  const color = 'blue';
  const dangerous = true;
  return (
    <div>
      <h2>Classes</h2>
      <div className={`${styles['wd-bg-yellow']} ${styles['wd-fg-black']} ${styles['wd-padding-10px']}`}>
        Yellow background  </div>
      <div className={`${styles['wd-bg-blue']} ${styles['wd-fg-black']} ${styles['wd-padding-10px']}`}>
        Blue background    </div>
      <div className={`${styles['wd-bg-red']} ${styles['wd-fg-black']} ${styles['wd-padding-10px']}`}>
        Red background     </div>
      <div className={`${styles[`wd-bg-${color}`]} ${styles['wd-fg-black']} ${styles['wd-padding-10px']}`}>
        Dynamic Blue background
      </div>
      <div className={`${dangerous ? styles['wd-bg-red'] : styles['wd-bg-green']} ${styles['wd-fg-black']} ${styles['wd-padding-10px']}`}>
        Dangerous background
      </div>
      <hr/>
    </div>
  )
};
