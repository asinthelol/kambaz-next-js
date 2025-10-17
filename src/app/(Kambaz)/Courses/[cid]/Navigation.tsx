import Link from "next/link";
import styles from '../../styles.module.css';

export default function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className={`wd ${styles['list-group']} list-group fs-5 rounded-0`}>
      {links.map((link, index) => (
        <Link key={index} href={`/Courses/1234/${link}`} id={`wd-course-${link.toLowerCase()}-link`}
          className={`list-group-item ${index === 0 ? 'active' : 'text-danger'} border-0`}>
          {link}
        </Link>
      ))}
    </div>
  );
}
