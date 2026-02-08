import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import { getStudents, addStudent, updateStudent, deleteStudent } from "./api/studentApi";

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const fetchStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleStudentAdded = async (student) => {
    await addStudent(student);
    fetchStudents();
  };

  const handleUpdate = async (student) => {
    await updateStudent(student.id, student);
    setEditingStudent(null);
    fetchStudents();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      await deleteStudent(id);
      fetchStudents();
    }
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">Student Management</h1>

      <nav className="flex justify-center gap-4 mb-8">
        <Link to="/add" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Add Student</Link>
        <Link to="/list" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Student List</Link>
      </nav>

      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
        <Routes>
          <Route path="/add" element={
            <StudentForm
              onStudentAdded={handleStudentAdded}
              editingStudent={editingStudent}
              onUpdate={handleUpdate}
            />
          } />
          <Route path="/list" element={
            <StudentList
              students={students}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          } />
          <Route path="*" element={<p className="text-gray-500">Select a page from above</p>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
