import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Make sure your home route leads to login/signup
    } catch (error) {
      console.error("Logout error:", error);
      alert("Logout failed. Try again.");
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;