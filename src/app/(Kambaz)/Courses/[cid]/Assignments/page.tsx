'use client';


import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import Link from "next/link";
import styles from '../../../styles.module.css';
import LessonControlButtons from "./LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentControls from "./AssignmentControls";
import { useParams } from "next/navigation";
import * as db from "@/app/(Kambaz)/Database";

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const assignments = db.assignments.filter(a => a.course === cid);
  return (
    <div id="wd-assignments">
      <div className="d-flex align-items-center mb-3">
        <input
          placeholder="Search..."
          id="wd-search-assignment"
          className="form-control me-2"
          style={{ flex: "1 1 auto", maxWidth: "300px" }}
        />
        <AssignmentControls />
      </div><br />
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className={`${styles["bg-secondary"]} wd-title p-3 ps-2 bg-secondary`}>
            <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS <AssignmentControlButtons />
            <span className="float-end fs-6" style={{ border: "solid thin gray", padding: "0.25rem 0.75rem", borderRadius: "2rem", display: "inline-block" }}>40% of Total</span>
          </div>
          <ListGroup className="wd-lessons rounded-0">
            {assignments.map((assignment) => (
              <ListGroupItem className="wd-lesson p-3 ps-1" key={assignment._id}>
                <BsGripVertical className="me-2 fs-3" />
                <Link
                  href={`/Courses/${cid}/Assignments/${assignment._id}`}
                  className="text-reset text-decoration-none"
                >
                  {assignment.title}
                </Link>
                <LessonControlButtons />
                <div className="text-muted small ms-5">
                  <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am |<br />
                  <b>Due</b> May 13 at 11:59pm | 100 points
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
