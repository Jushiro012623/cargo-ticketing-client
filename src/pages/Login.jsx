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
  Loader,
} from "../components/components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useCheckAuth from "../hooks/CheckAuth";
import * as yup from "yup";
import { ClipLoader } from "react-spinners";
const bg =
  "bg-gradient-to-br  from-indigo-300  via-indigo-400 via-10% to-indigo-700";
export default function Login() {
  const { setLoading, loading } = useCheckAuth();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <Container className="w-full h-screen relative bg-gradient-to-br">
      {loading ? (
        <Loader />
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
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState({});
    const [loginErr, setLoginErr] = useState();
    const navigate = useNavigate();
    const newError = {};
    const schema = yup.object().shape({
        email: yup.string().email().required("Email is a required field"),
        password: yup
        .string()
        .required()
        .min(8, "Password must be at least 8 characters")
        .max(25, "Password must be at most 25 characters"),
    });
    const loginUser = async (event) => {
        event.preventDefault();
        const formData = {
        email: event.target.email.value,
        password: event.target.password.value,
        remember: event.target.remember.checked,
        };
        try {
            setLoader(true);
            await schema.validate(formData, { abortEarly: false });
            const response = await axios.post(
                `${process.env.API_URL}/api/login`,
                formData,
                {
                    headers: { Accept: "application/json" },
                }
            );
            const token = response.data.data.token;
            localStorage.setItem("authToken", token);
            navigate("/profile");
        } catch (error) {
            if (error.response && error.response.data) {
                setLoginErr(error.response.data.message); // Capture the backend error message
            } else if (error.inner) {
                error.inner.forEach((err) => {
                newError[err.path] = err.message;
                console.error("Login Falied: " + err.message);
                });
                setLoginErr(null);
                setError(newError);
            } else {
                console.error("Login Failed: " + error.message);
                setLoginErr("An error occurred, please try again later.");
            }
        } finally {
            setLoader(false);
        }
    };
    const formInputs = [
        { name: "email", label: "Email Address", type: "email" },
        { name: "password", label: "Password", type: "password" },
    ];
    return (
        <form onSubmit={loginUser} className="flex flex-col gap-5">
        {formInputs.map((input, index) => (
            <React.Fragment>
            <FormInput
                name={input.name}
                label={input.label}
                type={input.type}
                error={loginErr ? loginErr : error[input.name]}
                variant={error[input.name] || loginErr ? "danger" : "primary"}
                onChange={() => {
                setLoginErr();
                setError((prevErrors) => ({ ...prevErrors, [input.name]: null }));
                }}
            />
            {/* {loginErr && <Text className="text-red-500">{loginErr}</Text>} */}
            </React.Fragment>
        ))}
        <Container variant="topNav">
            <Container variant="topNav" className="flex items-center gap-2 w-full">
            <Checkbox name="remember" className="cursor-pointer" />
            <Container variant="topNav" className={"w-full translate-y-[1px]"}>
                <Label>Remember me</Label>
                <Text variant="small">Forgot Password?</Text>
            </Container>
            </Container>
        </Container>

        <Button className={`min-h-9 flex items-center justify-center`}>
            {!loader ? "Login" : <ClipLoader color="#ffffff" size={15} />}
        </Button>
        </form>
    );
    };
    const FormHeader = () => {
    return (
        <Container className="mb-10">
        <Logo />
        <Text variant="subtitle" className="pt-4">
            Login
        </Text>
        <Text variant="small">Continue where you left off with Laravel.</Text>
        </Container>
    );
    };
    const FormFooter = () => {
    return (
        <Container variant="sideNav">
        <Text className="mt-3" variant="small">
            Don't have an account yet ?{" "}
            <Link
            className="font-bold text-primary hover:text-primary-hover"
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
