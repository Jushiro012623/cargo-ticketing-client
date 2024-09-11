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
  Loader
} from "../components/components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useCheckAuth from "../hooks/CheckAuth";
import * as yup from "yup";
const bg =
  "bg-gradient-to-br  from-indigo-300  via-indigo-400 via-10% to-indigo-700";
export default function Login() {
  const { setLoading, loading } = useCheckAuth();
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },1000)
  },[])
  return (
    <Container className="w-full h-screen relative bg-gradient-to-br">
      {loading ? (<Loader />
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
  const [error,setError] = useState({});
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup.string().email().required('Email is a required field'),
    password: yup.string().required().min(8, 'Password must be at least 8 characters').max(25, 'Password must be at most 25 characters'),
  })
  const loginUser =  async (event) => {
    event.preventDefault();
    const formData = {
      email: event.target.email.value,
      password: event.target.password.value,
      remember: event.target.remember.checked,
    };
    try{
      await schema.validate(formData, {abortEarly: false});
      axios.post(`${process.env.API_URL}/api/login`,
        formData, 
        { headers: { Accept: "application/json" } }
      ).then((response) => {
        const token = response.data.data.token;
        localStorage.setItem("authToken", token);
        navigate("/profile");
      }).catch((error) => {
        console.error('Unable to login, please try again later' + error.message)
      });
    }catch(error){
      const newError = {}
      error.inner.forEach(err => {
        newError[err.path] = err.message;
        console.error('Unable to submit the form: ' + err.message)
      });
      setError(newError);
    }
  };
  const formInputs = [
    { name: "email", label: "Email Address", type: "email" },
    { name: "password", label: "Password", type: "password" },
  ];
  return (
    <form onSubmit={loginUser} className="flex flex-col gap-6">
      {formInputs.map((input) => (
        <FormInput
          key={input.name}
          name={input.name}
          label={input.label}
          type={input.type}
          error={error[input.name]}
          variant={error[input.name] ? 'danger' : 'primary'}
        />
      ))}
      <Container variant="topNav">
        <Container className="flex items-center gap-3 w-full">
          <Checkbox
            name="remember"
            className="cursor-pointer"
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
    <Container variant="sideNav">
      <Text className="mt-5">
        Don't have an account yet ?{" "}
        <Link
          className="font-bold text-sky-600 hover:text-sky-700"
          to="/register">
          Register
        </Link>
      </Text>
      {/* <Text className="text-center font-bold text-gray-800/50 my-6">
        or
      </Text>
      <Container variant="flexCenter" className={'cursor-pointer py-2 flex gap-2 border border-gray-800 text-gray-800rounded-lg w-full '}><Text className="text-2xl text-sky-600"><FaGoogle /></Text><Text className="text-md">Google</Text></Container> */}
    </Container>
  );
};
