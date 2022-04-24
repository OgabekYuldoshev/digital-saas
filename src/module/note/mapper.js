import { get } from "lodash";

export const Note = (item) => {
  return {
    id: get(item, "id") || null,
    createdAt: get(item, "title") || "",
    description: get(item, "description") || "",
    author: get(item, "author") || null,
  };
};
