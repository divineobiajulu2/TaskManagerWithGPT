import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-gray-900 shadow">
      <Link to="/" className="text-xl font-semibold dark:text-white">
        EduPlatform
      </Link>

      <div className="flex gap-4 items-center">
        <Link to="/dashboard" className="dark:text-white">
          Dashboard
        </Link>

        <ThemeToggle />
      </div>
    </nav>
  );
}
