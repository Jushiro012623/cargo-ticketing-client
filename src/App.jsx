import React from "react";
import { Login, Register, User, Home} from "./pages/pages";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<User />} />
      </Routes>
    </>
  );
}
