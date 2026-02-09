import React from "react";

function CourseList({ courses = [] }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Courses</h2>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Duration</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(c => (
            <tr key={c.id}>
              <td className="p-2 border">{c.title}</td>
              <td className="p-2 border">{c.duration} months</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CourseList;
