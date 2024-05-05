import React, { useRef, useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "../../Style";
import { CustomFormInput } from "../input/CustomInput";
import Text from "./Text";
import { CustomInputButton } from "../buttons/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth, useProfile } from "../../context/Context";

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { setProfileData } = useProfile();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // Add state for error handling

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, []);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { email, password } = values;
    try {
      const response = await axios.post(
        "https://prakem-api.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );
      console.log("User details :", response);
      const res = response.data;
      if (res.status === true) {
        localStorage.setItem("commerce", JSON.stringify(res.user));
        console.log("User details stored:", res.user);
        setProfileData(res.user);
        navigate("/dashboard");
        login();
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      setError("an error occur suring login");
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Text />
      <div style={Container}>
        <form
          onSubmit={handleSubmit}
          className="w-full m-auto p-6 shadow-2xl my-6 md:w-2/5"
        >
          <CustomFormInput
            name={"email"}
            label={"Email*"}
            placeholder={"customer@demo.com"}
            type={"email"}
            onChange={(e) => handleChange(e)}
          />
          <CustomFormInput
            name={"password"}
            label={"Password*"}
            placeholder={"Mata03"}
            type={"password"}
            onChange={(e) => handleChange(e)}
          />
          <CustomInputButton type="submit">
            {isLoading ? "Signing In..." : "SIGNIN"}
          </CustomInputButton>
          {error && <p>{error}</p>}

          <div className="flex gap-3 py-3">
            <NavLink
              to="/signup"
              className=" w-full text-center justify-center flex m-auto text-base py-3 text-white bg-black hover:bg-design4  hover:text-design2"
            >
              CREATE AN ACCOUNT
            </NavLink>
            <NavLink
              to="/login"
              className=" w-full text-center justify-center flex m-auto text-base py-3 text-black bg-design4 hover:bg-black hover:text-white"
            >
              FORGOTTEN PASSWORD
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
