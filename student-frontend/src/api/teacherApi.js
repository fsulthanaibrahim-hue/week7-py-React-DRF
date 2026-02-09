import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/teachers/";

export const getTeachers = () => axios.get(API_URL).then(res => res.data);
