'use client';

import Link from "next/link";
import Image from "next/image";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, FormControl, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse, setCourses } from "../Courses/reducer";
import { enrollUserInCourse, unenrollUserFromCourse } from "../Enrollments/reducer";
import * as coursesClient from "../Courses/client";
import * as userClient from "../Account/client";

interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
  description: string;
  author?: string;
  image?: string;
}

interface User {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  role: string;
}

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

interface RootState {
  coursesReducer: { courses: Course[] };
  accountReducer: { currentUser: User | null };
  enrollmentsReducer: { enrollments: Enrollment[] };
}

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  
  const [course, setCourse] = useState<Course>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    department: "D123", credits: 4,
    image: "/images/react.png", description: "New Description"
  });
  
  const [showAllCourses, setShowAllCourses] = useState(false);

  const fetchCourses = async () => {
    try {
      const allCourses = await coursesClient.fetchAllCourses();
      dispatch(setCourses(allCourses));
    } catch (error) {
      console.error(error);
    }
  };

  const createCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    dispatch(addNewCourse(newCourse));
  };

  const updateExistingCourse = async () => {
    const updatedCourse = await coursesClient.updateCourse(course);
    dispatch(updateCourse(updatedCourse));
  };

  const removeCourse = async (courseId: string) => {
    await coursesClient.deleteCourse(courseId);
    dispatch(deleteCourse(courseId));
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const isEnrolled = (courseId: string) => {
    return enrollments.some(
      (enrollment) =>
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

  const enrolledCourses = courses.filter((course) => isEnrolled(course._id));
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
                    onClick={createCourse} > Add </button>
            <button className="btn btn-warning float-end me-2"
                    id="wd-update-course-click"
                    onClick={updateExistingCourse} > Update </button>
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
          {displayedCourses.map((course, index) => {
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
                        <button onClick={() => removeCourse(course._id)}
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
