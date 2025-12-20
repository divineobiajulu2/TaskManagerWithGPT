import "../styles/ThreeWayToggle.css";

function ThreeWayToggle({ options, value, onChange }) {
  return (
    <div className="toggle-container">
      <div className="toggle">
        {options.map((opt, index) => (
          <div key={opt.value} style={{ flex: 1, position: "relative" }}>
            <input
              type="radio"
              id={opt.value}
              name="three-way-toggle"
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
            />
            <label htmlFor={opt.value}>{opt.label}</label>
          </div>
        ))}

        {/* Sliding Indicator */}
        <div
          className="slider"
          style={{
            left: `${(options.findIndex(o => o.value === value) * 100) / options.length}%`,
            width: `${100 / options.length}%`
          }}
        />
      </div>
    </div>
  );
}

export default ThreeWayToggle;
