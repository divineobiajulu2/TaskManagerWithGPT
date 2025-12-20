import { useState } from "react";
`import { FaUserTie } from "react-icons/fa";     // Instructor icon
import { FaUserGraduate } from "react-icons/fa"; // Student icon
`
const RoleToggle = ({ role, setRole }) => {
  const isInstructor = role === "instructor";

  return (
    <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem"
      }}>
        
        {/* Instructor Label */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          fontWeight: isInstructor ? "bold" : "normal",
          opacity: isInstructor ? 1 : 0.5
        }}>
          <FaUserTie size={20} />
          Instructor
        </div>

        {/* iOS Toggle */}
        <label className="ios-toggle">
          <input
            type="checkbox"
            checked={!isInstructor}
            onChange={() =>
              setRole(isInstructor ? "student" : "instructor")
            }
          />
          <span className="slider"></span>
        </label>

        {/* Student Label */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          fontWeight: !isInstructor ? "bold" : "normal",
          opacity: !isInstructor ? 1 : 0.5
        }}>
          <FaUserGraduate size={20} />
          Student
        </div>

      </div>
    </div>
  );
};

export default RoleToggle;
