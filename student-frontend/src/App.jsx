import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import CourseList from "./components/CourseList";
import TeacherList from "./components/TeacherList";

import { getStudents, addStudent, updateStudent, deleteStudent } from "./api/studentApi";
import { getCourses } from "./api/courseApi";
import { getTeachers } from "./api/teacherApi";

function App() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  // ---------- FETCH DATA ----------
  const fetchStudents = async () => {
    try {
      const data = await getStudents();
      setStudents(data);
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };

  const fetchCourses = async () => {
    try {
      const data = await getCourses();
      setCourses(data);
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  const fetchTeachers = async () => {
    try {
      const data = await getTeachers();
      setTeachers(data);
    } catch (err) {
      console.error("Error fetching teachers:", err);
    }
  };

  useEffect(() => {
    fetchStudents();
    fetchCourses();
    fetchTeachers();
  }, []);

  // ---------- ADD OR UPDATE STUDENT ----------
const handleStudentAdded = async (student) => {
  try {
    if (editingStudent) {
      await updateStudent(student.id, student); // ✅ FIX
      setEditingStudent(null);
    } else {
      await addStudent(student);
    }
    fetchStudents();
  } catch (err) {
    console.error("Error saving student:", err);
    alert("Failed to save student");
  }
};


  // ---------- DELETE STUDENT ----------
  const handleStudentDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await deleteStudent(id);
        fetchStudents();
      } catch (err) {
        console.error("Error deleting student:", err);
        alert("Failed to delete student");
      }
    }
  };

  // ---------- EDIT STUDENT ----------
  const handleStudentEdit = (student) => {
    setEditingStudent(student);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4">
        <h1 className="text-3xl font-bold text-center text-indigo-600">
          Student Management System
        </h1>
      </header>

      {/* NAV */}
      <nav className="flex justify-center gap-6 mt-6">
        <Link to="/students/add" className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          Add Student
        </Link>
        <Link to="/students/list" className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          Student List
        </Link>
        <Link to="/courses/list" className="px-5 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
          Course List
        </Link>
        <Link to="/teachers/list" className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Teacher List
        </Link>
      </nav>

      {/* MAIN CONTENT */}
      <main className="max-w-4xl mx-auto mt-8 bg-white p-8 rounded-xl shadow">
        <Routes>
          <Route path="/" element={<Navigate to="/students/list" />} />

          <Route
            path="/students/add"
            element={
              <StudentForm
                onStudentAdded={handleStudentAdded}
                editingStudent={editingStudent}
              />
            }
          />

          <Route
            path="/students/list"
            element={
              <StudentList
                students={students}
                onEdit={handleStudentEdit}
                onDelete={handleStudentDelete}
              />
            }
          />

          <Route path="/courses/list" element={<CourseList courses={courses} />} />
          <Route path="/teachers/list" element={<TeacherList teachers={teachers} />} />

          <Route path="*" element={<p className="text-center text-gray-500">Select a page</p>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
