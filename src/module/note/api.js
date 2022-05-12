import { http } from "../../services";

export const Create = ({ values, author }) =>
  http.request.post("/task/note/", {
    description: values.description,
  });

export const List = () => http.request.get("/task/note/");
export const Delete = ({ id }) => http.request.delete(`/task/note/delete/${id}`);
