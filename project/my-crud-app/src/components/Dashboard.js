import { Link } from "react-router-dom";
import LogoutButton from "../components/LogoutButton"; // Ensure correct path

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>Manage your items here:</p>
      <Link to="/crud">
        <button>Go to CRUD App</button>
      </Link>
      <LogoutButton /> {/* Placing the Logout button within the dashboard */}
    </div>
  );
};

export default Dashboard;