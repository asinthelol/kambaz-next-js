'use client';

import { redirect } from "next/navigation";
import * as userClient from "./Account/client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as courseClient from "./Courses/client";

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
  password: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  dob?: string;
  role?: string;
}

interface RootState {
  accountReducer: {
    currentUser: User | null;
  };
}

export default function Kambaz() {
  const [courses, setCourses] = useState<Course[]>([]);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(courses);
    setCourses([ ...courses, newCourse ]);
  };
  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };



  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  return (
    redirect("/Account/Signin")
  );
}
