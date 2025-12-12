import axios from "axios";

interface Course {
  _id?: string;
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

interface Module {
  _id?: string;
  name: string;
  description?: string;
  course: string;
}

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const COURSES_API = `${HTTP_SERVER}/api/courses`;
export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API);
  return data;
};
export const createCourse = async (course: Partial<Course>) => {
  const { data } = await axios.post(COURSES_API, course);
  return data;
};
export const updateCourse = async (course: Course) => {
  const { data } = await axios.put(`${COURSES_API}/${course._id}`, course);
  return data;
};
export const deleteCourse = async (id: string) => {
  const { data } = await axios.delete(`${COURSES_API}/${id}`);
  return data;
};
export const findModulesForCourse = async (courseId: string) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/modules`);
    console.log("Response data: ",response.data);
  const data = response.data;
  return Array.isArray(data) ? data : (data.modules || []);
};
export const createModuleForCourse = async (courseId: string, module: Partial<Module>) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return response.data;
};
export const deleteModule = async (courseId: string, moduleId: Module) => {
 const response = await axios.delete(
   `${COURSES_API}/${courseId}/modules/${moduleId}`
 );
 return response.data;
};

export const updateModule = async (courseId: string, module: Module) => {
 const { data } = await axios.put(
   `${COURSES_API}/${courseId}/modules/${module._id}`,
   module
 );
 return data;
};