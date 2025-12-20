import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import SignupRoleSelect from "./components/SignupRoleSelect";
import MultiStepSignup from "./components/MultiStepSignup";
import ProtectedRoute from "./components/ProtectedRoute";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page is public */}
        <Route path="/" element={<LandingPage />} />

        {/* Login route */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard (Student) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Signup routes */}
        <Route path="/signup" element={<SignupRoleSelect />} />
        <Route path="/signup/student" element={<MultiStepSignup role="student" />} />
        <Route path="/signup/instructor" element={<MultiStepSignup role="instructor" />} />

        {/* Instructor dashboard */}
        <Route
          path="/instructor-dashboard"
          element={
            <ProtectedRoute allowedRoles={["instructor"]}>
              <Dashboard /> {/* Replace with instructor dashboard later */}
            </ProtectedRoute>
          }
        />

        {/* Admin dashboard */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Dashboard /> {/* Replace with admin dashboard later */}
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

