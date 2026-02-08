import React from 'react';
import { useNavigate } from 'react-router-dom';

function StudentList({ students, onEdit, onDelete }) {
  const navigate = useNavigate();

  const handleEditClick = (student) => {
    onEdit(student);
    navigate("/add");
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Student List</h2>
      {students.length === 0 ? (
        <p className="text-gray-500">No students yet</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b text-left">Name</th>
                <th className="py-2 px-4 border-b text-left">Course</th>
                <th className="py-2 px-4 border-b text-left">Age</th>
                <th className="py-2 px-4 border-b text-left">Email</th>
                <th className="py-2 px-4 border-b text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map(s => (
                <tr key={s.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{s.name}</td>
                  <td className="py-2 px-4 border-b">{s.course}</td>
                  <td className="py-2 px-4 border-b">{s.age}</td>
                  <td className="py-2 px-4 border-b">{s.email}</td>
                  <td className="py-2 px-4 border-b flex justify-center gap-2">
                    <button onClick={() => handleEditClick(s)}
                      className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500">
                      Edit
                    </button>
                    <button onClick={() => onDelete(s.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default StudentList;
