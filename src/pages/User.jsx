import axios from "axios";
import React, { useState, useEffect } from "react";
import { PropagateLoader } from "react-spinners";
import Container from "../components/Container";
export default function User() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8080/api/user", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        setUser({ name: response.data.name, email: response.data.email });
      } catch (error) {
        console.error("Error fetching user data", error);
      } finally {
        setLoading(false);
      }
    };
    user();
  }, []);

  return (
    <Container
      className={"w-full h-screen gap-5 flex-col"}
      variant="flexCenter">
      {loading ? (
        <PropagateLoader color="#0284C7" />
      ) : (
        <>
          <div>My name is {user.name}</div>
          <div>My email is {user.email}</div>
        </>
      )}
    </Container>
  );
}
