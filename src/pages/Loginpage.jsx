import { useState } from "react";

const LoginPage = () => {
  // States for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="bg-[url('/images/Loginpageimage.jpg')] bg-cover bg-center min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold text-blue-900">Quick Bill</h1>
        </div>
      </header>

      {/* Login Section */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Sign In</h2>

          {/* Username Input */}
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username} // Bind state to the input
            onChange={(e) => setUsername(e.target.value)} // Update state on change
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
          />

          {/* Password Input */}
          <label htmlFor="password" className="block text-sm font-medium text-gray-600 mt-4">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password} // Bind state to the input
            onChange={(e) => setPassword(e.target.value)} // Update state on change
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />

          {/* Remember Me */}
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
              Remember me
            </label>
          </div>

          {/* Sign In Button */}
          <button
            className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={handleSubmit} // Handle form submission
          >
            Sign in
          </button>

          {/* Footer Links */}
          <div className="text-sm text-center mt-4">
            <a href="#" className="text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>
          <div className="text-sm text-center mt-2">
             Don&apos;t have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Register here 
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;




