import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("All fields required");
      return;
    }

    try {
      const res = await axios.post(
        "https://ecommerce-vhgs.onrender.com/auth/login",
        {
          email,
          password,
        },
      );

      localStorage.setItem("token", res.data.token);

      localStorage.setItem(
        "user",
        JSON.stringify({
          id: res.data.id,
          name: res.data.name,
          email: res.data.email,
          role: res.data.role,
        }),
      );

      navigate("/");

      alert("Login successful");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <div className="px-12 pt-6">
        <Link to="/" className="text-2xl text-gray-700 hover:text-black">
          <IoArrowBack />
        </Link>
      </div>

      <div className="flex items-center justify-center min-h-[calc(100vh-60px)]">
        <div className="flex flex-col items-center border-2 rounded-2xl border-slate-200 shadow-md w-1/4 p-6">
          <h2 className="text-4xl font-medium">Sign In</h2>

          <form onSubmit={handleSignIn} className="w-full">
            <div className="flex flex-col pt-8">
              <label htmlFor="email">Email:</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 border-slate-300 h-10 ps-2 rounded-full"
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="flex flex-col pt-8">
              <label htmlFor="password">Password:</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 border-slate-300 h-10 ps-2 rounded-full"
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-teal-700 hover:bg-teal-500 transition text-white w-full rounded-full font-medium mt-6 px-4 py-3"
            >
              Sign In
            </button>
          </form>

          <p className="pt-8">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-teal-700 hover:text-teal-500 transition font-medium cursor-pointer"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignIn;
