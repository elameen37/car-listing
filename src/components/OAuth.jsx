import { signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  // Initialize the navigate function from react-router-dom
  const navigate = useNavigate();

  // Function to handle Google authentication
  async function onGoogleClick() {
    try {
      // Get the Firebase authentication instance
      const auth = getAuth();

      // Create a GoogleAuthProvider instance
      const provider = new GoogleAuthProvider();

      // Sign in with Google using a popup window
      const result = await signInWithPopup(auth, provider);

      // Extract user information from the authentication result
      const user = result.user; // The signed-in user info.

      // Check if a document for this user exists in Firestore
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      // If the user does not exist in Firestore, create a new user
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          time: serverTimestamp(),
        });

        // Redirect the user to the homepage
        navigate("/");
      }
    } catch (error) {
      // Handle errors, such as authentication failures.
      toast.error("Error signing in with Google");
      // You can log the error for debugging purposes
      // console.log(error);
    }
  }

  // Render a button for Google OAuth
  return (
    <button
      type="button"
      onClick={onGoogleClick}
      className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg transition duration-150 ease-in-out rounded "
    >
      <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
      Continue with Google
    </button>
  );
}
