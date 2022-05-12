import { get } from "lodash";

export const Note = (item) => {
  return {
    id: get(item, "id") || null,
    createdAt: get(item, "created_at") || "",
    description: get(item, "description") || ""
  };
};
