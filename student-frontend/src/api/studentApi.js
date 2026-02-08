import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api/students/";

export const getStudents = async () => {
  const res = await axios.get(API_BASE_URL);
  return res.data;
};

export const addStudent = async (student) => {
  const res = await axios.post(API_BASE_URL, student);
  return res.data;
};

export const updateStudent = async (id, student) => {
  const res = await axios.put(`${API_BASE_URL}${id}/`, student);
  return res.data;
};

export const deleteStudent = async (id) => {
  const res = await axios.delete(`${API_BASE_URL}${id}/`);
  return res.data;
};
