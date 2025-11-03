'use client';

import Link from "next/link";
import Image from "next/image";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, FormControl, Row } from "react-bootstrap";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { enrollUserInCourse, unenrollUserFromCourse } from "../Enrollments/reducer";

export default function Dashboard() {
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/react.png", description: "New Description"
  });
  
  const [showAllCourses, setShowAllCourses] = useState(false);

  const isEnrolled = (courseId: string) => {
    return enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser?._id && enrollment.course === courseId
    );
  };

  const handleEnroll = (courseId: string) => {
    if (currentUser) {
      dispatch(enrollUserInCourse({ userId: currentUser._id, courseId }));
    }
  };

  const handleUnenroll = (courseId: string) => {
    if (currentUser) {
      dispatch(unenrollUserFromCourse({ userId: currentUser._id, courseId }));
    }
  };

  const enrolledCourses = courses.filter((course: any) => isEnrolled(course._id));
  const displayedCourses = showAllCourses ? courses : enrolledCourses;
  const isFaculty = currentUser?.role === "FACULTY";

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      
      {isFaculty && (
        <>
          <h5>New Course
            <button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={() => dispatch(addNewCourse(course))} > Add </button>
            <button className="btn btn-warning float-end me-2"
                    id="wd-update-course-click"
                    onClick={() => dispatch(updateCourse(course))} > Update </button>
          </h5><br />
          <FormControl value={course.name} className="mb-2"
                       onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <FormControl as="textarea" value={course.description} rows={3}
                       onChange={(e) => setCourse({ ...course, description: e.target.value })} />
          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">
        Published Courses ({displayedCourses.length})
        <button 
          className="btn btn-primary float-end"
          id="wd-enrollments-btn"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "Show Enrolled" : "Enrollments"}
        </button>
      </h2> 
      <hr />
      
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((course: any, index: number) => {
            const enrolled = isEnrolled(course._id);
            
            return (
              <Col key={index} className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                  <Link href={`/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                    <CardImg src="/images/react.png" variant="top" width="100%" height={160} />
                  </Link>
                  <CardBody className="card-body">
                    <Link href={`/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark" >
                      <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {course.name} 
                      </CardTitle>
                      <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                        {course.description} 
                      </CardText>
                    </Link>
                    
                    {enrolled && !showAllCourses && (
                      <Link href={`/Courses/${course._id}/Home`}>
                        <Button variant="primary"> Go </Button>
                      </Link>
                    )}
                    
                    {showAllCourses && (
                      enrolled ? (
                        <button
                          onClick={() => handleUnenroll(course._id)}
                          className="btn btn-danger"
                          id="wd-unenroll-course-click"
                        >
                          Unenroll
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEnroll(course._id)}
                          className="btn btn-success"
                          id="wd-enroll-course-click"
                        >
                          Enroll
                        </button>
                      )
                    )}

                    {isFaculty && !showAllCourses && (
                      <>
                        <button onClick={() => dispatch(deleteCourse(course._id))}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click">
                          Delete
                        </button>

                        <button id="wd-edit-course-click"
                          onClick={() => setCourse(course)}
                          className="btn btn-warning me-2 float-end" >
                          Edit
                        </button>
                      </>
                    )}
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
