import React from "react";
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from "formik";
import * as Yup from "yup";
import { Link , useNavigate } from "react-router-dom";
import google from "../Images/google.jpg";
import facebook from "../Images/facebook.png";
import axios from "axios";

 const LoginSchema = Yup.object().shape({
    email: Yup.string()
   .email("Invalid email")
   .required("Email is required"),
    password: Yup.string()
   .min(6, "Password must be at least 6 characters")
   .required("Password is required"),
  });
 
  
const Login = () => {

  const navigate = useNavigate();
  
  const onSubmit = async (values, actions) => {
    try {
      const response = await axios.post("http://localhost:3004/auth/login", {
        email: values.email,
        password: values.password,
      });
      // Assuming your backend returns a success message upon successful login
      console.log("Response from server", response.data);
      alert("Login Successful");
  
      const userRole = response.data.role;
      console.log(userRole);
      console.log(response.data);
  
      if (userRole === "admin") {
        navigate("/admin");
      } else {
        // Redirect to home page upon successful login
        navigate('/');
      }
    } catch (error) {
      // Handle error such as displaying error message to the user
      console.error('Login error:', error);
      if (error.response) {
        console.log('Server Error:', error.response.data);
        alert('Login failed. Please check your credentials and try again.');
      } else if (error.request) {
        console.log('Request Error:', error.request);
        alert('Request failed. Please try again later.');
      } else {
        console.log('Other Error:', error.message);
        alert('Login failed. Please try again later.');
      }
    }
  };
  
 
  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={onSubmit}
      >
        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col max-w-md">
          <div className="mb-8 text-3xl font-extrabold text-center text-gray-800">
            Log In
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <Field
              type="text"
              name="email"
              placeholder="Enter Your Email"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-xs italic mt-1"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <Field
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-xs italic mt-1"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            >
              Log In
            </button>
            <div className="flex">
              <Link to="" className="mr-2" type="button">
                <img src={google} alt="Google" className="w-8 h-8 rounded" />
              </Link>
              <Link to="">
                <img src={facebook} alt="Facebook" className="w-8 h-8 rounded" />
              </Link>
            </div>
          </div>
          <div className="flex justify-between">
            <Link
              to="/register"
              className="text-sm text-blue-500 hover:text-blue-800 mx-1"
            >
              Create a new account
            </Link>
            <Link
              to="/forgot-password"
              className="text-sm text-blue-500 hover:text-blue-800"
            >
              Forgot Password?
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
