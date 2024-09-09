import React, { useEffect } from "react";
import { NavBar } from "../layouts/layouts";
import { Container, Button, Loader } from "../components/components";
import i from "../assets/images/i.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useCheckAuth from "../hooks/CheckAuth";
export default function Home() {
  const { setLoading, loading } = useCheckAuth();

  const navigate = useNavigate();
  useEffect(() => {
    const user = async () => {
      try {
        const response = await axios.get(`${process.env.API_URL}/api/user`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        setLoading(false);
      } catch (error) {
        if (error.response.status === 401) {
          localStorage.removeItem("authToken");
          navigate("/login");
        } else {
          setError(
            "There was an issue fetching user data. Please try again later."
          );
        }
      }
    };
    user();
  }, []);

  return (
    <Container className={"h-screen flex flex-col items-center"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <NavBar />
          <Container variant="xCenter" className={`w-full h-full mt-20`}>
            <Container
              variant="xCenter"
              className={`w-[1200px] relative h-[800px] rounded-xl  shadow-lg shadow-gray-500`}>
              <Container className={`w-full h-full overflow-hidden`}>
                <div className="bg-gradient-to-t from-amber-500/40 via-30% to-90% via-amber-400/40 to-transparent w-full rounded-xl h-full absolute z-10"></div>
                <img
                  src={i}
                  alt=""
                  className="aspect-video w-full right-0 h-full scaleX(-1) absolute rounded-xl"
                />
              </Container>
              <Container
                className={`z-20 bg-white shadow-lg shadow-gray-500 w-11/12 h-52 bottom-0 rounded-xl absolute translate-y-1/2`}
                variant="xCenter"></Container>
            </Container>
          </Container>
        </>
      )}
    </Container>
  );
}
