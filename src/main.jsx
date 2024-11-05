import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AgeVerificationCard from "./components/AgeVerificationCard.jsx";
import EmailVerification from "./components/EmailVerificationCard.jsx";
import OTPVerficationCard from "./components/OTPVerficationCard.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="/age" />} />
          <Route path="age" element={<AgeVerificationCard />} />
          <Route path="email" element={<EmailVerification />} />
          <Route path="otp" element={<OTPVerficationCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
