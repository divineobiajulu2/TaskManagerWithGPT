import RoleToggle from "./RoleToggle"; 
import LandscapeCard from "./LandscapeCard";
import { useNavigate } from "react-router-dom";
import bg from "/images/class1.jpg";

export default function SignupRoleSelect() {
  const navigate = useNavigate();

  

return (
  <LandscapeCard img={bg}>
    <h2>Select Account Type</h2>

    <RoleToggle role={role} setRole={setRole} />

    <button 
      style={{ marginTop: "2rem" }} 
      onClick={() => navigate(`/signup/${role}`)}
    >
      Continue
    </button>

    <div className="centered-theme-toggle">
      <ThemeToggle />
    </div>
  </LandscapeCard>
);

}
