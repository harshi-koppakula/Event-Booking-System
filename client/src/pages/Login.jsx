import { useState } from "react";
import API from "../services/api";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({});
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const res = await API.post("/auth/login", form);
    login(res.data);
    navigate("/");
  };

  return (
    <form onSubmit={submit} className="max-w-md mx-auto p-6 bg-white shadow mt-10">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input
        placeholder="Email"
        className="border p-2 w-full mb-3"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-3"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button className="bg-black text-white px-4 py-2 w-full">
        Login
      </button>
    </form>
  );
};

export default Login;