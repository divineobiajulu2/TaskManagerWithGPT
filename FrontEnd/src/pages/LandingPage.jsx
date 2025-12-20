import { motion } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "../components/ThemeToggle.jsx";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const words = [
    { start: "NOT", end: "PRICE" },
    { start: "NOR", end: "REWARD" }
  ];

  return (
    <div className="landing-container">
      <div className="hero-text-box">
        <div className="focus-line">
          {/* Segment 1 */}
          <div className="text-window start-word">
            <motion.span
              key={`start-${index}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="weight-light"
            >
              {words[index].start}
            </motion.span>
          </div>

          <span className="weight-light for-static">FOR</span>

          {/* Segment 2 */}
          <div className="text-window end-word">
            <motion.span
              key={`end-${index}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="weight-bold accent-gold"
            >
              {words[index].end}
            </motion.span>
          </div>
        </div>

        {/* Continuous Progress Bar */}
        <div className="progress-bg">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 8, // Total cycle time
              repeat: Infinity, 
              ease: "linear" 
            }}
            onUpdate={(latest) => {
              // Parse the percentage from the width string "X%"
              const val = parseFloat(latest.width);
              if (val < 50 && index !== 0) setIndex(0);
              if (val >= 50 && index !== 1) setIndex(1);
            }}
            className="progress-fill"
          />
        </div>
      </div>

      {/* Optimized Responsive Buttons */}
      <div className="hero-buttons-container">
        <button className="btn-primary" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="btn-secondary" onClick={() => navigate("/signup")}>
          Create Account
        </button>
      </div>
      <div className="centered-theme-toggle">
        <ThemeToggle />
     </div>

      <div className="theme-toggle">
        <div className="toggle">
            <input type="radio" id="light" name="theme" />
            <label for="light">Light</label>

            <input type="radio" id="system" name="theme" defaultChecked />
            <label for="system">System</label>

            <input type="radio" id="dark" name="theme" />
            <label for="dark">Dark</label>

           <div className="slider"></div>
        </div>
      </div>

    </div>
  );
}

export default LandingPage;
