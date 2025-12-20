import { useNavigate } from "react-router-dom";
import LandscapeCard from "./LandscapeCard";
import bg from "/images/class2.jpg";

export default function Login() {
  const navigate = useNavigate();

  return (
    <LandscapeCard img={bg}>
      <h2>Login</h2>

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button>Login</button>
      <div className="centered-theme-toggle">
       <ThemeToggle />
      </div>


      <p style={{ marginTop: "1rem" }}>
        Don't have an account?{" "}
        <span
          style={{ color: "#FFD700", cursor: "pointer" }}
          onClick={() => navigate("/signup")}
        >
          Create one
        </span>
      </p>
    </LandscapeCard>
  );
}
