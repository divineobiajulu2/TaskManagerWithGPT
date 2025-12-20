import LandscapeCard from "./LandscapeCard.jsx";
import bg from "/images/class3.jpg";
import ThemeToggle from "./ThemeToggle.jsx";

export default function MultiStepSignup({ role }) {
  return (
    <LandscapeCard img={bg}>
      <h2>{role === "student" ? "Student Signup" : "Instructor Signup"}</h2>

      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email Address" />

      <button>Next</button>
    </LandscapeCard>
  );
}
<div className="centered-theme-toggle">
  <ThemeToggle />
</div>
