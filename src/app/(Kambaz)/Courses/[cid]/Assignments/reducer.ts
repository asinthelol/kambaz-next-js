import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../../Database";

interface Assignment {
  _id: string;
  title: string;
  course: string;
  description: string;
  points: number;
  dueDate?: string;
  availableFromDate?: string;
  availableUntilDate?: string;
  availableDate?: string;
  editing?: boolean;
}

const initialState = {
  assignments: assignments as Assignment[],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, { payload: assignment }) => {
      state.assignments = [...state.assignments, assignment];
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === assignment._id ? assignment : a
      );
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === assignmentId
          ? { ...assignment, editing: true }
          : assignment
      );
    },
  },
});

export const {
  setAssignments,
  addAssignment,
  deleteAssignment,
  updateAssignment,
  editAssignment,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
