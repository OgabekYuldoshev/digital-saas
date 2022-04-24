import React from "react";
import * as yup from "yup";
import { Form, Formik } from "formik";
import * as Api from "../api";
import { useMutation } from "react-query";
import useAuth from "../../auth/hooks/useAuth";


const Create = ({
    onSuccess,
    onError,
    onSettled,
    children,
}) => {
    const { profile } = useAuth()

    const mutation = useMutation(
        async (values) => {
            const { data } = await Api.Create({ values, author: profile?.id });
            return data;
        },
        {
            onSuccess,
            onError,
            onSettled,
        }
    );

    const handleSubmit = (
        values,
        { isSubmitting, setSubmitting }
    ) => {
        if (!isSubmitting) {
            setSubmitting(true);
            mutation.mutate(values, {
                onError: () => setSubmitting(false)
            });
        }
    };

    const validationSchema = yup.object().shape({
        title: yup.string().required(),
        description: yup.string().required(),
    });

    return (
        <Formik
            onSubmit={handleSubmit}
            initialValues={{
                title: "",
                description: "",
            }}
            enableReinitialize
            {...{ validationSchema }}>
            {(props) => <Form>{children(props)}</Form>}
        </Formik>
    );
};

export default Create;
