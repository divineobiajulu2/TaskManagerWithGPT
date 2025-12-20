import ThemeToggle from "../components/ThemeToggle";

function Dashboard() {
  console.log("Dashboard component loaded");
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to your Dashboard 🚀</h1>
      <p>Your courses will appear here...</p>
      <ThemeToggle />
    </div>
  );
}

export default Dashboard;


