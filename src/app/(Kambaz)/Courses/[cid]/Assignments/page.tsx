import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import Link from "next/link";
import styles from '../../../styles.module.css';
import LessonControlButtons from "./LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentControls from "./AssignmentControls";

export default function Assignments() {
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
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <Link href="/Courses/1234/Assignments/A1" className="text-reset text-decoration-none">
                A1
              </Link>
              <LessonControlButtons />
              <div className="text-muted small ms-5">
                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am |<br />
                <b>Due</b> May 13 at 11:59pm | 100 points
              </div>
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <Link href="/Courses/1234/Assignments/A2" className="text-reset text-decoration-none">
                A2
              </Link>
              <LessonControlButtons />
              <div className="text-muted small ms-5">
                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am |<br />
                <b>Due</b> May 20 at 11:59pm | 100 points
              </div>
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <Link href="/Courses/1234/Assignments/A3" className="text-reset text-decoration-none">
                A3
              </Link>
              <LessonControlButtons />
              <div className="text-muted small ms-5">
                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am |<br />
                <b>Due</b> May 27 at 11:59pm | 100 points
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}

// export default function Assignments() {
//   return (
//     <div id="wd-assignments">
//       <input
//         placeholder="Search for Assignments"
//         id="wd-search-assignment"
//         className="form-control mb-3"
//       />
//       <ListGroup className="rounded-0" id="wd-assignments-list">
//         <ListGroupItem className="wd-assignment p-0 mb-3 fs-5 border-gray">
//           <div className={`${styles["bg-secondary"]} wd-title p-3 ps-2 bg-secondary`}>
//             <BsGripVertical className="me-2 fs-3" /> A1 - ENV + HTML
//           </div>
//           <div className="p-3">
//             Multiple Modules | <b>Not available until</b> May 6 at 12:00am |<br />
//             <b>Due</b> May 13 at 11:59pm | 100 points
//           </div>
//         </ListGroupItem>
//         <ListGroupItem className="wd-assignment p-0 mb-3 fs-5 border-gray">
//           <div className="p-3 ps-2 bg-secondary text-white">
//             <BsGripVertical className="me-2 fs-3" /> A2 - CSS + BOOTSTRAP
//           </div>
//           <div className="p-3">
//             Multiple Modules | <b>Not available until</b> May 13 at 12:00am |<br />
//             <b>Due</b> May 20 at 11:59pm | 100 points
//           </div>
//         </ListGroupItem>
//         <ListGroupItem className="wd-assignment p-0 mb-3 fs-5 border-gray">
//           <div className="p-3 ps-2 bg-secondary text-white">
//             <BsGripVertical className="me-2 fs-3" /> A3 - JAVASCRIPT + REACT
//           </div>
//           <div className="p-3">
//             Multiple Modules | <b>Not available until</b> May 20 at 12:00am |<br />
//             <b>Due</b> May 27 at 11:59pm | 100 points
//           </div>
//         </ListGroupItem>
//       </ListGroup>
//     </div>
//   );
// }




// import Link from "next/link";

// export default function Assignments() {
//   return (
//     <div id="wd-assignments">
//       <input placeholder="Search for Assignments"
//              id="wd-search-assignment" />
//       <button id="wd-add-assignment-group">+ Group</button>
//       <button id="wd-add-assignment">+ Assignment</button>
//       <h3 id="wd-assignments-title">
//         ASSIGNMENTS 40% of Total <button>+</button> </h3>
//       <ul id="wd-assignment-list">
//         <li className="wd-assignment-list-item">
//           <Link href="/Courses/1234/Assignments/123"
//              className="wd-assignment-link" >
//             A1 - ENV + HTML
//           </Link>

//           <br />
//           Multiple Modules | <b>Not available until</b> May 6 at 12:00am |<br />
//           <b>Due</b> May 13 at 11:59pm | 100 points
//         </li>
//         <li className="wd-assignment-list-item">
//           <Link href="/Courses/1234/Assignments/123"
//              className="wd-assignment-link" >
//             A2 - CSS + BOOTSTRAP
//           </Link>

//           <br />
//           Multiple Modules | <b>Not available until</b> May 13 at 12:00am |<br />
//           <b>Due</b> May 20 at 11:59pm | 100 points
//         </li>
//         <li className="wd-assignment-list-item">
//           <Link href="/Courses/1234/Assignments/123"
//              className="wd-assignment-link" >
//             A3 - JAVASCRIPT + REACT
//           </Link>

//           <br />
//           Multiple Modules | <b>Not available until</b> May 20 at 12:00am |<br />
//           <b>Due</b> May 27 at 11:59pm | 100 points
//         </li>
//         <li className="wd-assignment-list-item">
//         </li>
//       </ul>
//     </div>
// );}
