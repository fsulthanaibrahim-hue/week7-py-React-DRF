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

export const updateStudent = (id, student) => {
  return axios.put(`http://127.0.0.1:8000/api/students/${id}/`, student);
};


export const deleteStudent = async (id) => {
  const res = await axios.delete(`${API_BASE_URL}${id}/`);
  return res.data;
};
