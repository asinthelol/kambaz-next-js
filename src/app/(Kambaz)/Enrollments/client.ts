import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const ENROLLMENTS_API = `${HTTP_SERVER}/api`;

export const enrollInCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.post(
    `${ENROLLMENTS_API}/users/${userId}/courses/${courseId}/enroll`
  );
  return response.data;
};

export const unenrollFromCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.delete(
    `${ENROLLMENTS_API}/users/${userId}/courses/${courseId}/unenroll`
  );
  return response.data;
};

export const fetchEnrollmentsForUser = async (userId: string) => {
  const response = await axiosWithCredentials.get(
    `${ENROLLMENTS_API}/users/${userId}/enrollments`
  );
  return response.data;
};

export const fetchEnrollmentsForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${ENROLLMENTS_API}/courses/${courseId}/enrollments`
  );
  return response.data;
};

export const fetchAllEnrollments = async () => {
  const response = await axiosWithCredentials.get(`${ENROLLMENTS_API}/enrollments`);
  return response.data;
};
