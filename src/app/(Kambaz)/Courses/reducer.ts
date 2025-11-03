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
   addNewCourse: (state, { payload: course }) => {
     const newCourse: Course = { ...course, _id: uuidv4() };
     state.courses = [...state.courses, newCourse];
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
export const { addNewCourse, deleteCourse, updateCourse } =
 coursesSlice.actions;
export default coursesSlice.reducer;