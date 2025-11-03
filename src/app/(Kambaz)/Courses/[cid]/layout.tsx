'use client';

import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import CourseEnrollmentGuard from "./CourseEnrollmentGuard";
import { FaAlignJustify } from "react-icons/fa6";
import { courses } from "../../Database/"
import { usePathname, useParams } from "next/navigation";
import { useSelector } from "react-redux";

export default function CoursesLayout(
  { children }: Readonly<{ children: ReactNode }>) {

  const { cid } = useParams();
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const course = courses.find((course: any) => course._id === cid);
  const pathname = usePathname();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  
  return (
    <CourseEnrollmentGuard>
      <div id="wd-courses">
        
        <h2 className="text-danger">
          <FaAlignJustify className="me-4 fs-4 mb-1" />
      {course?.name} <span>&gt; {links.find(link => pathname.toLowerCase().includes(link.toLowerCase()))}</span>
        </h2>

        <hr />

        <div className="d-flex">
          <div className="d-none d-md-block">
            <CourseNavigation />
          </div>
          <div className="flex-fill">
            {children}
          </div>
        </div>
      </div>
    </CourseEnrollmentGuard>
  );
}