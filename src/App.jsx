import { Outlet } from "react-router-dom";
import "./App.css";
import AgeVerificationCard from "./components/AgeVerificationCard";
import EmailVerification from "./components/EmailVerificationCard";
import OTPVerficationCard from "./components/OTPVerficationCard";

function App() {
  return (
    <div className="bg-blue-700 min-h-screen flex items-center justify-center">
      <Outlet />
    </div>
  );
}

export default App;
