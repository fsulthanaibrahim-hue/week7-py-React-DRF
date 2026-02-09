import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";

// ---------------- STUDENTS ----------------
export const getStudents = () => axios.get(`${BASE_URL}students/`);
export const addStudent = (data) => axios.post(`${BASE_URL}students/`, data);

// ---------------- COURSES ----------------
export const getCourses = () => axios.get(`${BASE_URL}courses/`);

// ---------------- TEACHERS ----------------
export const getTeachers = () => axios.get(`${BASE_URL}teachers/`);
