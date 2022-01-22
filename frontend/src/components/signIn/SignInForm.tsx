// import { useFormik } from "formik";
// import * as Yup from "yup";
import Button from "../global/Button/Button";
import { FormContainer } from "./styles";

const SignInForm = () => {
  return (
    <FormContainer>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Enter your email"
      />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
      />
      <Button title="Sign In" fontSize={1} />
    </FormContainer>
  );
};

export default SignInForm;
