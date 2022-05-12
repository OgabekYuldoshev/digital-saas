import React from "react";
import * as yup from "yup";
import { Form, Formik } from "formik";
import * as Api from "../api";
import { useMutation } from "react-query";

const Create = ({ onSuccess, onError, onSettled, children }) => {
  const mutation = useMutation(
    async (values) => {
      const { data } = await Api.Create({ values });
      return data;
    },
    {
      onSuccess,
      onError,
      onSettled,
    }
  );

  const handleSubmit = (values, { isSubmitting, setSubmitting }) => {
    console.log(values);
    if (!isSubmitting) {
      setSubmitting(true);
      mutation.mutate(values, {
        onError: () => setSubmitting(false),
      });
    }
  };

  const validationSchema = yup.object().shape({
    description: yup.string().required(),
    deadline: yup.string().required(),
    status: yup.string().required(),
    pinned_to: yup.string().required(),
  });

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        description: "",
        deadline: "",
        status: "TO_DO",
        pinned_to: "",
      }}
      {...{ validationSchema }}
    >
      {(props) => <Form>{children(props)}</Form>}
    </Formik>
  );
};

export default Create;
