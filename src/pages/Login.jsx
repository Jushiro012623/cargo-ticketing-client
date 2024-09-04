import React, { useState, useEffect } from "react";
import {
  Button,
  Checkbox,
  Input,
  Label,
  Text,
  Container,
  Logo,
  FormInput,
} from "../components/components";
import { PropagateLoader } from "react-spinners"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const bg =
  "bg-gradient-to-br  from-indigo-300  via-indigo-400 via-10% to-indigo-700";
export default function Login() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Container className="w-full h-screen relative bg-gradient-to-br">
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-50">
          <PropagateLoader color="#0284C7" />
        </div>
      ) : (
        <Container
          variant={"absoluteCenter"}
          className="w-[500px] bg-white px-12 py-14 rounded-lg shadow-gray-800/40 shadow-md">
          <FormHeader />
          <Form />
          <FormFooter />
        </Container>
      )}
    </Container>
  );
}

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:8080/api/login", {
        email: formData.email,
        password: formData.password,
      })
      .then((response) => {
        const token = response.data.data.token;
        localStorage.setItem("authToken", token);
        navigate("/profile");
      })
      .catch((error) => {});
  };

  const formInputs = [
    { name: "email", label: "Email Address", type: "email" },
    { name: "password", label: "Password", type: "password" },
  ];

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {formInputs.map((input) => (
        <FormInput
          key={input.name}
          name={input.name}
          value={formData[input.name]}
          label={input.label}
          type={input.type}
          onChange={handleChange}
        />
      ))}
      <Container variant="topNav">
        <Container className="flex items-center gap-3 w-full">
          <Checkbox
            name="remember"
            checked={formData.remember}
            className="cursor-pointer"
            onChange={handleChange}
          />
          <Container variant="topNav" className={"w-full"}>
            <Label>Remember me</Label>
            <Text>Forgot Password?</Text>
          </Container>
        </Container>
      </Container>
      <Button>Login</Button>
    </form>
  );
};
const FormHeader = () => {
  return (
    <Container className="mb-10">
      <Logo />
      <Text variant="subtitle" className="mb-2  pt-4 mt-4">
        Login
      </Text>
      <Text>Continue where you left off with Laravel.</Text>
    </Container>
  );
};
const FormFooter = () => {
  return (
    <Text className="text-center mt-5">
      Don't have an account yet ?{" "}
      <Link
        className="font-bold text-sky-600 hover:text-sky-700"
        to="/register">
        Register
      </Link>
    </Text>
  );
};
