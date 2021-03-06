import { useFormik } from "formik";
import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
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
import Header, { HeaderFrame, HeaderLogo } from "../components/header/Header";
import { HOME, SIGN_UP } from "../constants/routes";
import { FirebaseContext } from "../context/firebase";
import FooterComponent from "./Footer";
import { useLocation, useNavigate } from "react-router-dom";

const SignInComponent: React.FC<{}> = ({ children, ...restProps }) => {
  const { auth } = useContext(FirebaseContext);
  const [formError, setFormError] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation() as any;
  const from = location.state?.from?.pathname || HOME;

  const signInHandler = async (email: string, password: string) => {
    if (auth != null) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigate(from, { replace: true });
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
    },
    onSubmit: (values) => {
      signInHandler(values.email, values.password);
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
    <>
      <Header bg={true} minHeight="100vh">
        <HeaderFrame>
          <HeaderLogo
            to={HOME}
            logo={require("../assets/logo.png")}
            alt="netflix"
          />
        </HeaderFrame>
        <Form>
          <FormBase>
            <FormTitle>Sign In</FormTitle>
            {formError && <FormError>{formError}</FormError>}
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
            <FormSubmit title="Sign In" onClick={formik.handleSubmit} />
            <FormBreak mtb="4em" />
            <FormPane>
              <FormIcon
                icon={require("../assets/icons/facebook-icon.png")}
                alt=""
              ></FormIcon>
              <FormLink to={HOME}>Login with facebook</FormLink>
            </FormPane>
            <FormText>
              New to Netflix?<FormLink to={SIGN_UP}>Sign up now.</FormLink>
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
export default SignInComponent;
