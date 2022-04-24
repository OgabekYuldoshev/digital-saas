import * as Api from "../api";
import { useMutation } from "react-query";
import { message } from "antd";

export const useDelete = () => {
  const mutation = useMutation(
    async ({ id }) => {
      const { data } = await Api.Delete({ id });
      return data;
    },
    {
      onError: () => message.error("Internal Error!"),
      onSuccess: () => message.success("Successfuly deleted!"),
    }
  );
  return { mutation };
};
