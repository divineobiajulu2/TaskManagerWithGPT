import "../styles/ThreeWayToggle.css"; // reuse the same styles

function TwoWayToggle({ value, onChange }) {
  return (
    <div className="toggle-container">
      <div className="toggle">
        {/* Student */}
        <div style={{ flex: 1 }}>
          <input
            type="radio"
            id="student"
            name="user-role"
            checked={value === "student"}
            onChange={() => onChange("student")}
          />
          <label htmlFor="student">Student</label>
        </div>

        {/* Instructor */}
        <div style={{ flex: 1 }}>
          <input
            type="radio"
            id="instructor"
            name="user-role"
            checked={value === "instructor"}
            onChange={() => onChange("instructor")}
          />
          <label htmlFor="instructor">Instructor</label>
        </div>

        {/* Slider */}
        <div
          className="slider"
          style={{
            left: value === "student" ? "0%" : "50%",
            width: "50%"
          }}
        />
      </div>
    </div>
  );
}

export default TwoWayToggle;
