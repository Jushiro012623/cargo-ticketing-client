import React, { useState, useEffect } from "react";
import {
  Button,
  Checkbox,
  Container,
  FormInput,
  Label,
  Logo,
  Text,
} from "../components/components";
import { PropagateLoader } from "react-spinners"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Container className={`w-full h-screen relative bg-gradient-to-br `}>
        {loading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-50">
          <PropagateLoader color="#0284C7" />
        </div>
      ) : (
      <Container
        variant={"absoluteCenter"}
        className={
          "w-[500px] bg-white px-12 py-14 rounded-lg shadow-gray-800/40 shadow-md"
        }>
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
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:8080/api/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.confirmPassword,
      })
      .then((response) => {
        // console.log(response.data);
        navigate("/login");
      })
      .catch((error) => {});
  };

  const formInputs = [
    { name: "name", label: "Name", type: "text" },
    { name: "email", label: "Email Address", type: "email" },
    { name: "password", label: "Password", type: "password" },
    { name: "confirmPassword", label: "Confirm Password", type: "password" },
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
        <div className="flex items-center gap-3">
          <Checkbox
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            className="cursor-pointer"
            onChange={handleChange}
          />
          <Label>
            I agree to the{" "}
            <Link className="font-semibold text-sky-600 hover:text-sky-700">
              terms of use
            </Link>{" "}
            and{" "}
            <Link className="font-semibold text-sky-600 hover:text-sky-700">
              privacy policy
            </Link>
          </Label>
        </div>
      </Container>
      <Button>Register</Button>
    </form>
  );
};

const FormHeader = () => {
  return (
    <Container className="mb-10">
      <Logo />
      <Text variant="subtitle" className="mb-2  pt-4 mt-4 ">
        Register
      </Text>
      <Text>
        Let's get started, book your cargo online with ease and confidence!{" "}
      </Text>
    </Container>
  );
};

const FormFooter = () => {
  return (
    <Text className="text-center mt-5">
      Already have an account ?{" "}
      <Link className="font-bold text-sky-600 hover:text-sky-700" to="/login">
        Login
      </Link>
    </Text>
  );
};
