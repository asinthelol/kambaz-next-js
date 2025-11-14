import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";
import { v4 as uuidv4 } from "uuid";

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

const initialState = {
 courses: courses as Course[],
};

const coursesSlice = createSlice({
 name: "courses",
 initialState,
 reducers: {
   setCourses: (state, { payload: courses }) => {
     state.courses = courses;
   },
   addNewCourse: (state, { payload: course }) => {
     state.courses = [...state.courses, course];
   },
   deleteCourse: (state, { payload: courseId }) => {
     state.courses = state.courses.filter(
       (course) => course._id !== courseId
     );
   },
   updateCourse: (state, { payload: course }) => {
     state.courses = state.courses.map((c) =>
       c._id === course._id ? course : c
     );
   },
 },
});
export const { setCourses, addNewCourse, deleteCourse, updateCourse } =
 coursesSlice.actions;
export default coursesSlice.reducer;