import "./App.css";
import React from "react";
import { useContext } from "react";
import { AuthenticationContext } from "./core/AuthenticationBoundary.tsx";
import Navbar from "./core/components/navigation/Navbar.tsx";
import { Outlet } from "react-router";

function App() {
  const context = useContext(AuthenticationContext);
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
