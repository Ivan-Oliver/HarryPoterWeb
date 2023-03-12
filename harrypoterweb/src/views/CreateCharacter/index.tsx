import { FC, memo, useCallback } from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormButton,
  FormContainer,
  Input,
  BackButton,
  Error,
  InputContainer,
} from "./styles";
import { Formik, Field } from "formik";
import { initialValues, validationSchema } from "./constants";
import { createCharacter } from "../../services/api/characters";
import { Character } from "../../models/characters";


const CreateForm: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  // const handleCreateCharacter = useCallback(async (values: Omit<Character, "id" | 'characterId'>) => {
  //   await createCharacter(values);
  //   navigate("/characters"); 
  // }, [])

  const handlegoToBack = useCallback(() => {
    navigate("/characters");
  }, [navigate]);
  return (
    <FormContainer>
      {/* <Formik
        validationSchema={validationSchema}
        onSubmit={handleCreateCharacter}
        initialValues={initialValues}
      >
        <Form>
        <Field name="image">
            {({ field, meta }: { field: any; meta: any }) => (
              <InputContainer>
                <Input $hasError={!!meta?.error} type="url" placeholder="IMAGEN"
                  {...field} />
                {meta?.error && <Error>{meta.error}</Error>}
              </InputContainer>
            )}
          </Field>
          <Field name="name">
            {({ field, meta }: { field: any; meta: any }) => (
              <InputContainer>
                <Input $hasError={!!meta?.error} type="text" placeholder="Write your name on..."
                  {...field} />
                {meta?.error && <Error>{meta.error}</Error>}
              </InputContainer>
            )}
          </Field>
          <Field name="house">
            {({ field, meta }: { field: any; meta: any }) => (
              <InputContainer>
                <Input $hasError={!!meta?.error}
                  placeholder="Write your house..."
                  {...field} type="text" />
                {meta?.error && <Error>{meta.error}</Error>}
              </InputContainer>
            )}
          </Field>
          <FormButton type="submit">Create</FormButton>
          {<BackButton onClick={handlegoToBack}>Back</BackButton>}
        </Form>
      </Formik> */}
    </FormContainer>
  );
};

export default memo(CreateForm);
