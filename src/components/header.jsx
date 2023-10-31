import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Define the Header component.
export default function Header() {
  // Get the current location from the router.
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Get the navigate function from the router.
  const navigate = useNavigate();

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [auth]);
  // Function to check if a given route matches the current location's path.
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  // Render the Header component.

  console.log(
    location.pathname === "/profile" || location.pathname === "/sign-in"
  );
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          {/* Logo */}
          <img
            src="https://i.ibb.co/3r2pWrD/logo.png"
            alt="logo"
            className="h-8 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          {/* Navigation links */}
          <div className="flex space-x-10">
            {/* Home link */}
            <Link
              to="/"
              className={`hidden sm:inline-block cursor-pointer py-3 text-sm font-semibold border-b-[3px]  ${
                pathMatchRoute("/")
                  ? "text-black border-b-red-500"
                  : "border-b-transparent text-gray-400 "
              }`}
            >
              Home
            </Link>
            {/* Home link */}
            <Link
              to="/about"
              className={`hidden sm:inline-block cursor-pointer py-3 text-sm font-semibold border-b-[3px]  ${
                pathMatchRoute("/about")
                  ? "text-black border-b-red-500"
                  : "border-b-transparent text-gray-400 "
              }`}
            >
              About
            </Link>
            {/* Offers link */}
            <Link
              to="/offers"
              className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px]  ${
                pathMatchRoute("/offers")
                  ? "text-black border-b-red-500"
                  : "border-b-transparent text-gray-400"
              } `}
            >
              Offers
            </Link>
            {/* Profile and SignIn */}
            <Link
              to={isLoggedIn ? "/profile" : "sign-in"}
              className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${
                pathMatchRoute("/profile") || pathMatchRoute("/sign-in")
                  ? "text-black border-b-red-500"
                  : "border-b-transparent text-gray-400 "
              } `}
            >
              {isLoggedIn ? "Profile" : "Sign in"}
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
