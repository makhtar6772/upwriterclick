import { React } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="w-full mx-auto pr-10 pl-10 py-4 h-16 flex items-center  justify-between font-sans    ">
      <span className="text-4xl font-semibold text-green-700 ml-10">
        <Link to="/">Upwriter</Link>
      </span>
      <ul className="flex gap-10 mr-20 text-xl">
        <li className="link flex justify-center items-center">
          <Link to="/">Home</Link>
        </li>
        <li className="link flex justify-center items-center">
          <a href="/#feature">Features</a>{" "}
        </li>
        <li className="link flex justify-center items-center">
          <a href="#">Pricing</a>
        </li>
        {isLoggedIn ? (
          <>
            <li className="link flex justify-center items-center">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="link flex justify-center items-center">
              <button
                onClick={onLogout}
                className="nav__btn py-2 px-6 text-white bg-green-600 rounded-md transition duration-300 hover:bg-green-500"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <li className="link flex justify-center items-center">
            <Link
              to="/login"
              className="nav__btn py-2 px-6 text-white bg-green-600 rounded-md transition duration-300 hover:bg-green-500"
            >
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
