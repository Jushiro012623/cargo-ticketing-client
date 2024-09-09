import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function useCheckAuth() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        try {
          const response = await axios.get(`${process.env.API_URL}/api/user`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (response.status === 200) {
            navigate("/profile");
          }
        } catch (error) {
          console.error("Token validation failed", error);
        }
      }
    };
    checkAuth();
  }, []);
  return { setLoading, loading };
}
