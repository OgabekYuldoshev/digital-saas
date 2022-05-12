import React from "react";
import * as yup from "yup";
import { Form, Formik } from "formik";
import * as Api from "../api";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";

const Create = ({ onSuccess, onError, onSettled, children, values }) => {
  const { id } = useParams();

  const mutation = useMutation(
    async (values) => {
      const { data } = await Api.Create({ values, id });
      return data;
    },
    {
      onSuccess,
      onError,
      onSettled,
    }
  );

  const handleSubmit = (values, { isSubmitting, setSubmitting }) => {
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
        description: values.description || "",
        deadline: values.deadline || "",
        status: values.status || "",
        pinned_to: values.penned_to || "",
      }}
      enableReinitialize
      {...{ validationSchema }}
    >
      {(props) => <Form>{children(props)}</Form>}
    </Formik>
  );
};

export default Create;
