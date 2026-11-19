import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    alert("Login form submitted! Backend authentication is not connected yet.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center px-5">

      <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-xl">

        <button
          onClick={() => navigate("/")}
          className="text-blue-600 font-bold mb-6 hover:underline"
        >
          ← Back to Home
        </button>

        <h1 className="text-4xl font-extrabold text-blue-600 text-center">
          FLX<span className="text-gray-900">.</span>
        </h1>

        <h2 className="text-2xl font-bold text-gray-800 text-center mt-5">
          Welcome Back!
        </h2>

        <p className="text-gray-500 text-center mt-2">
          Login to explore your marketplace.
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">

          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              required
            />
          </div>

          <button
            type="submit"
            className="animated-button w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700"
          >
            Login →
          </button>

        </form>

        <p className="text-center text-gray-500 mt-6">
          New to FLX?{" "}
          <button
            onClick={() => navigate("/sell")}
            className="text-blue-600 font-semibold hover:underline"
          >
            Start Selling
          </button>
        </p>

      </div>
    </div>
  );
}

export default Login;