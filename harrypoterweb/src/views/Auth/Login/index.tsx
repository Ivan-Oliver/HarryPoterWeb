import { FC, memo, useCallback } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';


import {
  Form,
  FormButton,
  FormContainer,
  Input,
  Label,
  Error,
  InputContainer,
  Return,
  StyledLink,
} from "./styles";
import { Formik, Field } from "formik";
import { initialValues, validationSchema } from "./constants";
import { login } from "../../../services/api/auth";

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (values: typeof initialValues) => {
    const loginError = await login(values);

    if (!loginError) {
      navigate("/categories");
    } else {
      setError(loginError);
    }
  };

  return (
    <FormContainer>
      <Formik
        validationSchema={validationSchema}
        onSubmit={handleLogin}
        initialValues={initialValues}
      >
        <Form>
          <Field name="email">
            {({ field, meta }: { field: any; meta: any }) => (
              <InputContainer>
                <Label><MdEmail/> Email</Label>
                <Input $hasError={!!meta?.error} type="text" {...field} />
                {meta?.error && <Error>{meta.error}</Error>}
              </InputContainer>
            )}
          </Field>
          <Field name="password">
            {({ field, meta }: { field: any; meta: any }) => (
              <InputContainer>
                <Label><RiLockPasswordFill/> Password</Label>
                <Input $hasError={!!meta?.error} {...field} type="password" />
                {meta?.error && <Error>{meta.error}</Error>}
              </InputContainer>
            )}
          </Field>
          <FormButton type="submit">Login</FormButton>
          <Return>
            New here? <StyledLink href="/signup">Go to register 👈 </StyledLink>
          </Return>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default memo(LoginForm);
