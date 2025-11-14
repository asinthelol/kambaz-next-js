'use client';

import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";
import styles from '../../../styles.module.css';
import LessonControlButtons from "./LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentControls from "./AssignmentControls";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment, setAssignments } from "./reducer";
import { useEffect } from "react";
import * as assignmentsClient from "./client";

interface Assignment {
  _id: string;
  title: string;
  course: string;
  description: string;
  points: number;
  dueDate?: string;
  availableFromDate?: string;
  availableUntilDate?: string;
}

interface User {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  role: string;
}

interface RootState {
  assignmentsReducer: { assignments: Assignment[] };
  accountReducer: { currentUser: User | null };
}

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const dispatch = useDispatch();

  const fetchAssignments = async () => {
    const assignments = await assignmentsClient.fetchAssignmentsForCourse(cid);
    dispatch(setAssignments(assignments));
  };

  const removeAssignment = async (assignmentId: string) => {
    if (window.confirm("Are you sure you want to remove this assignment?")) {
      await assignmentsClient.deleteAssignment(cid, assignmentId);
      dispatch(deleteAssignment(assignmentId));
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, [cid]);

  const courseAssignments = assignments.filter((a) => a.course === cid);

  const handleDelete = removeAssignment;

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
            {courseAssignments.map((assignment) => (
              <ListGroupItem className="wd-lesson p-3 ps-1" key={assignment._id}>
                <BsGripVertical className="me-2 fs-3" />
                <Link
                  href={`/Courses/${cid}/Assignments/${assignment._id}`}
                  className="text-reset text-decoration-none"
                >
                  {assignment.title}
                </Link>
                {currentUser?.role === "FACULTY" && (
                  <button
                    onClick={() => handleDelete(assignment._id)}
                    className="btn btn-danger btn-sm float-end"
                    id="wd-delete-assignment"
                  >
                    <FaTrash />
                  </button>
                )}
                <LessonControlButtons />
                <div className="text-muted small ms-5">
                  <span className="text-danger">Multiple Modules</span> | <b>Not available until</b>{" "}
                  {assignment.availableFromDate ? new Date(assignment.availableFromDate).toLocaleDateString() : "May 6"} at 12:00am |<br />
                  <b>Due</b> {assignment.dueDate ? new Date(assignment.dueDate).toLocaleDateString() : "May 13"} at 11:59pm | {assignment.points || 100} points
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
