import { Navigate } from "react-router-dom";
import { useBodyPart } from "./BodyPartContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useBodyPart(); // Access name to check if user is authenticated

  if (!user) {
    console.log("Unauthorized! Redirecting to Login...");
    return <Navigate to="/login" replace />;
  }

  return children; // If authenticated, allow access
};

export default ProtectedRoute;
