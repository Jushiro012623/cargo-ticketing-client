import axios from "axios";
import React, { useState, useEffect } from "react";
import { PropagateLoader } from "react-spinners";
import Container from "../components/Container";
import { Link, useNavigate } from "react-router-dom";
import useCheckAuth from "../hooks/CheckAuth";
export default function User() {
  const { setLoading, loading } = useCheckAuth();
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    const user = async () => {
      try {
        const response = await axios.get(`${process.env.API_URL}/api/user`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        setUser({
          name: response.data.name,
          email: response.data.email,
          contact: response.data.contact,
          address: response.data.address,
        });
      } catch (error) {
        if (error.response.status === 401) {
          localStorage.removeItem("authToken");
          navigate("/login");
        } else {
          setError("There was an issue fetching user data. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };
    user();
  }, []);
  const logoutUser = async (event) =>{
    event.preventDefault();
    try {
      await axios.post(`${process.env.API_URL}/api/logout`,{},{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          Accept: "application/json"
        },
      }).then(response =>{navigate('/login')})
    }catch(e) {
      console.log(e);
    }
  }
  return (
    <Container
      className={"w-full h-screen gap-5 flex-col"}
      variant="flexCenter">
      {loading ? (
        <PropagateLoader color="#0284C7" />
      ) : (
        <Container className={"rounded-lg text-left space-y-5 border p-10"}>
          <div className="capitalize">My name is {user.name}</div>
          <div>Email: {user.email}</div>
          <div>Contact: {user.contact}</div>
          <div>Address: {user.address}</div>
          <Container variant="topNav">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link onClick={logoutUser}>Logout</Link>
          </Container>
        </Container>
      )}
    </Container>
  );
}
