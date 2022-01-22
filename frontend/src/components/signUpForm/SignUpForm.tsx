import Button from "../global/Button/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  SignUpContainer,
  FormContainer,
  ErrorText,
  EmailInput,
} from "./styles";

const SignUpForm: React.FC<{
  marginLR?: number;
  marginTB?: number;
  paddingLR?: number;
  paddingTB?: number;
}> = ({ marginLR, marginTB, paddingLR, paddingTB }) => {
  const formik = useFormik({
    initialValues: { email: "" },
    onSubmit: (values) => {},
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter a valid email address")
        .required("Required"),
    }),
  });
  return (
    <SignUpContainer
      marginLR={marginLR}
      paddingLR={paddingLR}
      marginTB={marginTB}
      paddingTB={paddingTB}
    >
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <FormContainer onSubmit={formik.handleSubmit}>
        <div>
          <EmailInput
            placeholder="Email address"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            errors={formik.errors.email}
          />

          {formik.touched.email && formik.errors.email && (
            <ErrorText>Please enter a valid email address.</ErrorText>
          )}
        </div>
        <Button title="Get Started" fontSize={1} />
      </FormContainer>
    </SignUpContainer>
  );
};

export default SignUpForm;
