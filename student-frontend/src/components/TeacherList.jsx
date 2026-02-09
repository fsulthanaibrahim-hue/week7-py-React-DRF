import React from "react";

function TeacherList({ teachers = [] }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Teachers</h2>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Course</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map(t => (
            <tr key={t.id}>
              <td className="p-2 border">{t.name}</td>
              <td className="p-2 border">{t.email}</td>
              <td className="p-2 border">{t.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeacherList;
