import React from "react";

const StudentList = ({ students, deleteStudent }) => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 flex-column">
      <h2>Student List</h2>
      <ul className="list-unstyled">
        {students.map((student) => (
          <li key={student.id} className="d-flex align-items-center mb-2">
            {student.image && (
              <img
                src={`http://localhost:5000${student.image}`}
                alt="Student"
                width="50"
                className="me-2"
              />
            )}
            <strong>{student.name}</strong> - {student.course}
            <button
              onClick={() => deleteStudent(student.id)}
              className="btn btn-danger btn-sm ms-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;