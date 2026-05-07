import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      alert("Password must not be less than 6 characters");
      return;
    }

    try {
      await axios.post("https://ecommerce-vhgs.onrender.com/auth/register", {
        name,
        email,
        password,
      });

      navigate("/signin");

      alert("User registered successfully");
    } catch (err) {
      alert("Registration failed");
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
          <h2 className="text-4xl font-medium">Sign Up</h2>

          <form onSubmit={handleSignUp} className="w-full">
            <div className="flex flex-col pt-8">
              <label htmlFor="text">Name:</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-2 border-slate-300 h-10 ps-2 rounded-full"
                type="text"
                id="text"
                placeholder="Enter your name"
                required
              />
            </div>
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
              Sign Up
            </button>
          </form>

          <p className="pt-8">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-teal-700 hover:text-teal-500 transition font-medium cursor-pointer"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
