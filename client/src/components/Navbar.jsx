import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <Link to="/" className="font-bold text-xl">
        EventBook
      </Link>

      <div className="space-x-4">
        {!user && <Link to="/login">Login</Link>}
        {!user && <Link to="/register">Register</Link>}
        {user && <Link to="/dashboard">Dashboard</Link>}
        {user && (
          <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;