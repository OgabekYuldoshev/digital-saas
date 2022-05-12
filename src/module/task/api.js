import { http } from "../../services";

export const Create = ({ values }) =>
  http.request.post("/task/task/", {
    description: values.description,
    deadline: values.deadline,
    status: values.status,
    pinned_to: values.pinned_to
  });

export const Update = ({ values, id }) =>
  http.request.put(`/task/task/${id}`, {
    description: values.description,
    deadline: values.deadline,
    status: values.status,
    pinned_to: values.pinned_to
  });

export const List = () => http.request.get("/task/task/");

export const Delete = ({ id }) => http.request.delete(`/task/task/${id}/`);
