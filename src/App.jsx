import { Outlet } from "react-router-dom";
import "./App.css";
import { VerificationProvider } from "./context/VerificationContext";

function App() {
  return (
    <VerificationProvider>
      <div className="bg-blue-700 min-h-screen flex items-center justify-center">
        <Outlet />
      </div>
    </VerificationProvider>
  );
}

export default App;
