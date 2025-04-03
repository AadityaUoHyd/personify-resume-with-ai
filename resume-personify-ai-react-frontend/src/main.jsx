import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/About";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import GenerateResume from "./pages/GenerateResume";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="generate-resume" element={<GenerateResume />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>
);
