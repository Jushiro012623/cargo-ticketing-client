import React, { useState, useEffect } from "react";
import {
  Button,
  Checkbox,
  Container,
  FormInput,
  Label,
  Logo,
  Text,
  Loader,
} from "../components/components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useCheckAuth from "../hooks/CheckAuth";
import * as yup from "yup";
import { ClipLoader } from "react-spinners";
export default function Register() {
  const { setLoading, loading } = useCheckAuth();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <Container className={`w-full h-screen relative bg-gradient-to-br `}>
      {loading ? (
        <Loader />
      ) : (
        <Container
          variant={"absoluteCenter"}
          className={`w-[500px] bg-white px-12 py-14 rounded-lg shadow-gray-800/40 shadow-md`}>
          <Container className="mb-10">
            <Logo />
            <Text variant="subtitle" className="pt-4">
              Register
            </Text>
            <Text variant="small">
              Let's get started, book your cargo online with ease and
              confidence!{" "}
            </Text>
          </Container>
          <Form />
          <Text className="text-center mt-3" variant="small">
            Already have an account ?{" "}
            <Link
              className="font-bold text-primary hover:text-primary-hover"
              to="/login">
              Login
            </Link>
          </Text>
        </Container>
      )}
    </Container>
  );
}
const Form = () => {
  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);
  const [error, setError] = useState({});
  const schema = yup.object().shape({
    name: yup.string().required().min(8, "Name must be at least 8 characters"),
    email: yup.string().email().required("Email is a required field"),
    contact: yup
      .string()
      .required()
      .min(11, "Contact number is invalid")
      .max(11, "Contact number is invalid"),
    address: yup
      .string()
      .required()
      .min(15, "Address must be at least 15 characters"),
    password: yup
      .string()
      .required()
      .min(8, "Password must be at least 8 characters")
      .max(25, "Password must be at most 25 characters"),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password")], "Confirm passwords must match password")
      .required("Please confirm your password"),
    agree: yup.boolean().oneOf([true], "You must agree to the terms"),
  });
  const createUser = async (event) => {
    event.preventDefault();
    let formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      contact: event.target.contact.value,
      address: event.target.address.value,
      password: event.target.password.value,
      password_confirmation: event.target.password_confirmation.value,
      agree: event.target.agreeToTerms.checked,
    };
    try{
      setLoader(true)
      await schema.validate(formData, { abortEarly: false });
      await axios.post(`${process.env.API_URL}/api/register` , formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      navigate("/login");
    }catch(error){
      const newError = {};
      if (error.inner) {
        error.inner.forEach((err) => {
          newError[err.path] = err.message;
          console.error("Unable to submit the form: " + err.message);
        });
      } else {
        console.error("An unexpected error occurred: ", error);
      }
      setError(newError);
    }finally{
      setLoader(false);
    }
  };
  const formInputs = [
    { name: "name", label: "Name", type: "text" },
    { name: "email", label: "Email Address", type: "email" },
    { name: "contact", label: "Contact Number", type: "text" },
    { name: "address", label: "Address", type: "text" },
    { name: "password", label: "Password", type: "password" },
    {
      name: "password_confirmation",
      label: "Confirm Password",
      type: "password",
    },
  ];
  return (
    <form onSubmit={createUser} className="flex flex-col gap-5">
      {formInputs.map((input, index) => (
        <FormInput
          key={index}
          name={input.name}
          label={input.label}
          type={input.type}
          error={error[input.name]}
          variant={error[input.name] ? "danger" : "primary"}
          onChange={() => {
            setError((prevErrors) => ({ ...prevErrors, [input.name]: null }));
          }}
        />
      ))}

      <Container variant="topNav">
        <div className="flex items-center gap-3 ">
          <Checkbox name="agreeToTerms" className="cursor-pointer" />
          <Text variant="small" className={`translate-y-[1px]`}>
            I agree to the{" "}
            <Link className="font-semibold text-primary hover:text-primary-hover">
              terms of use
            </Link>{" "}
            and{" "}
            <Link className="font-semibold text-primary hover:text-primary-hover">
              privacy policy
            </Link>
          </Text>
        </div>
      </Container>

      <Button className={`min-h-9 flex items-center justify-center`}>
        {!loader ? "Register" : <ClipLoader color="#ffffff" size={15} />}
      </Button>
    </form>
  );
};
