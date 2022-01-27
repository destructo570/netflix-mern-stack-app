import { useFormik } from "formik";
import { useContext, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import * as Yup from "yup";
import Form, {
  FormBase,
  FormError,
  FormIcon,
  FormInput,
  FormLink,
  FormPane,
  FormSubmit,
  FormText,
  FormTextSmall,
  FormTitle,
  FormBreak,
} from "../components/form/Form";
import Header, {
  HeaderButtonLink,
  HeaderFrame,
  HeaderLogo,
} from "../components/header/Header";
import { BROWSE, HOME, SIGN_IN } from "../constants/routes";
import { FirebaseContext } from "../context/firebase";
import FooterComponent from "./Footer";
import { useNavigate } from "react-router-dom";

const SignUpComponent: React.FC<{}> = ({ children, ...restProps }) => {
  const { auth } = useContext(FirebaseContext);
  const [formError, setFormError] = useState<string>("");
  const navigate = useNavigate();

  const signUpHandler = async (
    firstName: string,
    email: string,
    password: string
  ) => {
    if (auth != null) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(userCredential.user, {
            displayName: firstName,
            photoURL: (Math.floor(Math.random() * 5) + 1).toString(),
          }).then((result) => {
            navigate(BROWSE);
          });
        })
        .catch((error) => {
          setFormError(error.message);
        });
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
    },
    onSubmit: (values) => {
      signUpHandler(values.firstName, values.email, values.password);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "First name too short")
        .required("Required"),
      email: Yup.string()
        .email("Please enter a valid email address.")
        .required("Required"),
      password: Yup.string()
        .min(6, "Password is too short.")
        .required("Required"),
    }),
  });

  return (
    <>
      <Header bg={true} minHeight="100vh">
        <HeaderFrame>
          <HeaderLogo
            to={HOME}
            logo={require("../assets/logo.png")}
            alt="netflix"
          />
          <HeaderButtonLink to={SIGN_IN}>Sign In</HeaderButtonLink>
        </HeaderFrame>
        <Form>
          <FormBase>
            <FormTitle>Sign Up</FormTitle>
            {formError && <FormError>{formError}</FormError>}
            <FormInput
              inputId="firstName"
              name="firstName"
              type="firstName"
              value={formik.values.firstName}
              changeHandler={formik.handleChange}
              blurHandler={formik.handleBlur}
              placeholder="Enter first name"
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <FormError>Please enter a valid name.</FormError>
            )}
            <FormInput
              inputId="email"
              name="email"
              type="email"
              value={formik.values.email}
              changeHandler={formik.handleChange}
              blurHandler={formik.handleBlur}
              placeholder="Enter email"
            />
            {formik.touched.email && formik.errors.email && (
              <FormError>Please enter a valid email address.</FormError>
            )}
            <FormInput
              inputId="password"
              name="password"
              type="password"
              value={formik.values.password}
              changeHandler={formik.handleChange}
              blurHandler={formik.handleBlur}
              placeholder="Enter password"
            />
            {formik.touched.password && formik.errors.password && (
              <FormError>
                Your password must contain between 4 and 60 characters.
              </FormError>
            )}
            <FormSubmit title="Sign Up" onClick={formik.handleSubmit} />
            <FormBreak mtb="4em" />
            <FormText>
              Already on Netflix?<FormLink to={SIGN_IN}>Sign in now.</FormLink>
            </FormText>
            <FormTextSmall>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </FormTextSmall>
          </FormBase>
        </Form>
      </Header>
      <FooterComponent />
    </>
  );
};
export default SignUpComponent;
