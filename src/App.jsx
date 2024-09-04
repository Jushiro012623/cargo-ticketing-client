import React, { useState } from "react";
import { Login, Register, User} from "./pages/pages";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
export default function App() {
  // const [name, setName] =useState()
  // // const token = localStorage.getItem("authToken");
  // //   axios.get("http://127.0.0.1:8080/api/user",{
  // //     headers: {
  // //       Authorization: `Bearer ${token}`,
  // //     },
  // //   }).then(response => {
  // //     console.log(response.data);
  // //     setName(response.data.name)
  // // })
  // // .catch(error => {
  // //     console.log(error);
  // //     console.log(localStorage.getItem("token"))
  // // });
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<User />} />
      </Routes>
    </>
  );
}
