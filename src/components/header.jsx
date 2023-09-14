// Import necessary hooks from the react-router-dom library.
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Define the Header component.
export default function Header() {
  const [pageState, setPageState] = useState("Sign-in");
  // Get the current location from the router.
  const location = useLocation();

  // Get the navigate function from the router.
  const navigate = useNavigate();

  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign-in");
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
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          {/* Logo */}
          <img
            src="logo.png"
            alt="logo"
            className="h-8 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          {/* Navigation links */}
          <ul className="flex space-x-10">
            {/* Home link */}
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            {/* Offers link */}
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            {/* Sign-in link */}
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
