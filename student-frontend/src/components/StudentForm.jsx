import React, { useState, useEffect } from 'react';

function StudentForm({ onStudentAdded, editingStudent, onUpdate }) {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (editingStudent) {
      setName(editingStudent.name);
      setCourse(editingStudent.course);
      setAge(editingStudent.age);
      setEmail(editingStudent.email);
    }
  }, [editingStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !course || !age || !email) return alert("Fill all fields");

    const studentData = { name, course, age, email };

    if (editingStudent) {
      onUpdate({ ...studentData, id: editingStudent.id });
    } else {
      onStudentAdded(studentData);
    }

    setName(''); setCourse(''); setAge(''); setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400" />
        <input type="text" placeholder="Course" value={course} onChange={e => setCourse(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400" />
        <input type="number" placeholder="Age" value={age} onChange={e => setAge(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400" />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400" />
      </div>
      <button type="submit"
        className={`w-full py-2 rounded text-white ${editingStudent ? 'bg-green-600 hover:bg-green-700' : 'bg-indigo-600 hover:bg-indigo-700'}`}>
        {editingStudent ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default StudentForm;
