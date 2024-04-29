import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        data
      );
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.userId);
      localStorage.setItem("isLoggedIn", true);
      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[900] h-[500] flex rounded-lg shadow-lg">
        <div className="flex flex-col items-center justify-center flex-2 bg-white rounded-r-2xl p-[80px]">
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <h1 className="mt-0 text-[30px] pb-4">Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="outline-none border-none w-[370px] p-[15px] rounded-[10px] bg-slate-100 my-[5px] text-[15px]"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="outline-none border-none w-[370px] p-[15px] rounded-[10px] bg-slate-100 my-[5px] text-[15px]"
            />
            {error && (
              <div className="w-64 py-4 my-1 text-base bg-red-600 text-white rounded-md text-center">
                {error}
              </div>
            )}
            <button
              type="submit"
              className="text-xl bg-green-400 text-white m-10 border-none outline-none py-3 px-0 rounded-full w-48 font-bold  cursor-pointer hover:bg-green-500"
            >
              Sign In
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 bg-green-500 rounded-r-2xl p-[80px]">
          <h1 className="text-white text-[35px] font-bold mt-0">New Here ?</h1>
          <Link to="/signup">
            <button
              type="button"
              className="mt-5 px-5 py-2 bg-white text-green-500 font-bold rounded-full focus:outline-none"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
