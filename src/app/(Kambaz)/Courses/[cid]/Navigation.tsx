'use client';

import Link from "next/link";
import styles from '../../styles.module.css';
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";

export default function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
    const pathname = usePathname();
    const { cid } = useParams();

  return (
    <div id="wd-courses-navigation" className={`wd ${styles['list-group']} list-group fs-5 rounded-0`}>
      {links.map((link, index) => (
        <Link
          key={index}
          href={`/Courses/${cid}/${link}`}
          id={`wd-course-${link.toLowerCase()}-link`}
          className={`list-group-item border-0 ${
            pathname === `/Courses/${cid}/${link}`
              ? styles.wdActiveLeftBar + ' text-dark bg-white'
              : 'text-danger'
          }`}>
          {link}
        </Link>
      ))}
    </div>
  );
}
