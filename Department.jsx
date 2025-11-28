// src/Department.jsx
import React from "react";

export default function Department() {
  // static data (edit as needed)
  const departments = [
    {
      id: 1,
      name: "Computer Science & Engineering",
      hod: "Dr. Asha Reddy",
      facultyCount: 38,
      description: "Focuses on algorithms, systems, AI and software engineering."
    },
    {
      id: 2,
      name: "Electronics & Communication Engineering",
      hod: "Dr. Ramesh Kumar",
      facultyCount: 42,
      description: "Focuses on embedded systems, VLSI, communication engineering."
    },
    {
      id: 3,
      name: "Mechanical Engineering",
      hod: "Dr. S. Narayan",
      facultyCount: 30,
      description: "Focuses on thermodynamics, manufacturing and CAD/CAE."
    }
  ];

  return (
    <div style={{ padding: 24, fontFamily: "Arial, sans-serif" }}>
      <h1>KL University — Departments</h1>

      <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
        {departments.map((dept) => (
          <div
            key={dept.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: 12,
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
            }}
          >
            <h2 style={{ margin: "0 0 6px 0" }}>{dept.name}</h2>
            <p style={{ margin: "0 0 4px 0" }}>
              <strong>HOD:</strong> {dept.hod}
            </p>
            <p style={{ margin: "0 0 8px 0" }}>
              <strong>Faculty:</strong> {dept.facultyCount}
            </p>
            <p style={{ margin: 0 }}>{dept.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
