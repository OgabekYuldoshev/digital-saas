import { http } from "../../services";

export const Create = ({ values, author }) =>
  http.request.post("/task/note/", {
    title: values.title,
    description: values.description,
    author: author,
  });

export const List = () => http.request.get("/task/note/");
export const Delete = ({ id }) => http.request.delete(`/task/note/${id}/`);