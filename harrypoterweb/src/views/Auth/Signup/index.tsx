import { FC, memo, useCallback } from 'react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Form,
  FormButton,
  FormContainer,
  Input,
  Error,
  InputContainer,
  BackButton
} from './styles'
import { Formik, Field } from 'formik'
import { initialValues, validationSchema } from './constants'
import { signup } from '../../../services/api/auth'


const SignupForm: FC = () => {
  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null)

  const handleSignup = async (values: typeof initialValues) => {
    const signupError = await signup(values);

    if (!signupError) {
      navigate('/categories'); 
    } else {
      setError(signupError);
    }
  };

  const handlegoToBack = useCallback(() => {
    navigate('/')
  }, [navigate])


  return (
    <FormContainer>
      <Formik
        validationSchema={validationSchema}
        onSubmit={handleSignup}
        initialValues={initialValues}
      >
        <Form>
          <Field name="email">
            {({ field, meta }: { field: any; meta: any }) => (
              <InputContainer>
                <Input $hasError={!!meta?.error} type="text"
                  placeholder="Write your email on..." {...field} />
                {meta?.error && <Error>{meta.error}</Error>}
              </InputContainer>
            )}
          </Field>
          <Field name="password">
            {({ field, meta }: { field: any; meta: any }) => (
              <InputContainer>
                <Input $hasError={!!meta?.error} {...field} placeholder="Write your password on..."
                  type="password" />
                {meta?.error && <Error>{meta.error}</Error>}
              </InputContainer>
            )}
          </Field>
          <FormButton type="submit">SignUp</FormButton>
          {<BackButton onClick={handlegoToBack}>Back</BackButton>}
        </Form>
      </Formik>
    </FormContainer>
  )
}

export default memo(SignupForm)
