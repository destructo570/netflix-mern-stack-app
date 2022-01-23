import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../global/Button/Button";
import { FormContainer, Input, ErrorText } from "./styles";

const SignInForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("Submittting...");
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter a valid email address.")
        .required("Required"),
      password: Yup.string()
        .min(6, "Password is too short.")
        .required("Required"),
    }),
  });

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <div>
        <Input
          type="text"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errors={formik.errors.email}
          touched={formik.touched.email}
        />
        {formik.touched.email && formik.errors.email && (
          <ErrorText>Please enter a valid email address.</ErrorText>
        )}
      </div>
      <div>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errors={formik.errors.password}
          touched={formik.touched.password}
        />
        {formik.touched.password && formik.errors.password && (
          <ErrorText>
            Your password must contain between 4 and 60 characters.
          </ErrorText>
        )}
      </div>
      <Button title="Sign In" fontSize={1} />
    </FormContainer>
  );
};

export default SignInForm;
