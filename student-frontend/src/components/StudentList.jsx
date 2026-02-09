import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

function StudentList({ students = [], onEdit, onDelete }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredStudents = students.filter((s) =>
    (s.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
    (s.course || "").toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  const handleEditClick = (student) => {
    onEdit(student);
    navigate("/students/add");
  };

  return (
    <div className="w-full p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Student List</h2>

      <input
        type="text"
        placeholder="Search by name, course, email, or age"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full md:w-1/3 p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      {filteredStudents.length === 0 ? (
        <p className="text-gray-500">No students found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md divide-y divide-gray-200">
            <thead className="bg-indigo-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Course
                </th>
                {(onEdit || onDelete) && (
                  <th className="px-6 py-3 text-center text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                )}
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStudents.map((s, idx) => (
                <tr key={s.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800">{s.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800">{s.course}</td>

                  {(onEdit || onDelete) && (
                    <td className="px-6 py-4 whitespace-nowrap flex justify-center gap-4">
                      {onEdit && (
                        <button
                          onClick={() => handleEditClick(s)}
                          className="text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-md transition-colors"
                          title="Edit"
                        >
                          <FaEdit />
                        </button>
                      )}
                      {onDelete && (
                        <button
                          onClick={() => onDelete(s.id)}
                          className="text-white bg-red-500 hover:bg-red-600 p-2 rounded-md transition-colors"
                          title="Delete"
                        >
                          <FaTrash />
                        </button>
                      )}
                    </td>
                  )}
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
