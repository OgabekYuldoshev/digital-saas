import { http } from "../../services";

export const Login = ({ values }) =>
  http.request.post(`/v1/oauth/login`, {
    email: values.email,
    password: values.password,
  });
  
export const Register = ({ values }) =>
  http.request.post(`/v1/oauth/reg`, {
    firstName: values.firstName,
    lastName: values.lastName,
    phone: values.phone,
    email: values.email,
    password: values.password,
    conformationPassword: values.conformationPassword,
  });

export const Profile = () => http.request.get(`/v1/oauth/check-token`);
