import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/courses/";

export const getCourses = () => axios.get(API_URL).then(res => res.data);
