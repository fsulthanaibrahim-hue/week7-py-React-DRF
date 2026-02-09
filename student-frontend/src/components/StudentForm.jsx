import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function StudentForm({ onStudentAdded, editingStudent }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const navigate = useNavigate(); // ✅ FIX 1

  useEffect(() => {
    if (editingStudent) {
      setName(editingStudent.name || "");
      setCourse(editingStudent.course || "");
    } else {
      setName("");
      setCourse("");
    }
  }, [editingStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onStudentAdded({
      id: editingStudent?.id, // ✅ FIX 2
      name,
      course,
    });

    navigate("/students/list"); // ✅ FIX 3
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-100 p-6">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg border p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          {editingStudent ? "Update Student" : "Add Student"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg"
            required
          />

          <input
            type="text"
            placeholder="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="w-full p-3 border rounded-lg"
            required
          />

          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 py-3 rounded-lg text-white bg-indigo-600"
            >
              {editingStudent ? "Update" : "Add"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/students/list")}
              className="flex-1 py-3 rounded-lg border"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StudentForm;
