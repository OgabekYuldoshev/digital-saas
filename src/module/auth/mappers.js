import get from "lodash/get";

export const Login = (item) => ({
  token: get(item, "token") || "",
});
