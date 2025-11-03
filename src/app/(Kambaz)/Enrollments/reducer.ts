import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

const initialState = {
  enrollments: enrollments as Enrollment[],
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },
    enrollUserInCourse: (state, { payload }) => {
      const newEnrollment: Enrollment = {
        _id: new Date().getTime().toString(),
        user: payload.userId,
        course: payload.courseId,
      };
      state.enrollments = [...state.enrollments, newEnrollment];
    },
    unenrollUserFromCourse: (state, { payload }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) =>
          !(enrollment.user === payload.userId && enrollment.course === payload.courseId)
      );
    },
  },
});

export const { setEnrollments, enrollUserInCourse, unenrollUserFromCourse } =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
