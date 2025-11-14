import axios from "axios";

interface Assignment {
  _id?: string;
  title: string;
  description?: string;
  points?: number;
  dueDate?: string;
  availableDate?: string;
  course: string;
}

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const COURSES_API = `${HTTP_SERVER}/api/courses`;

export const fetchAssignmentsForCourse = async (courseId: string) => {
  const { data } = await axios.get(`${COURSES_API}/${courseId}/assignments`);
  return data;
};

export const createAssignment = async (courseId: string, assignment: Partial<Assignment>) => {
  const { data } = await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment);
  return data;
};

export const updateAssignment = async (assignment: Assignment) => {
  const { data } = await axios.put(`${COURSES_API}/${assignment.course}/assignments/${assignment._id}`, assignment);
  return data;
};

export const deleteAssignment = async (courseId: string, assignmentId: string) => {
  const { data } = await axios.delete(`${COURSES_API}/${courseId}/assignments/${assignmentId}`);
  return data;
};
