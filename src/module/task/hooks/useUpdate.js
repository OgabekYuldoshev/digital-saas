import * as Api from "../api";
import { useMutation } from "react-query";
import { message } from "antd";

const useUpdate = () => {
  const mutation = useMutation(
    async ({ status, id }) => {
      const { data } = await Api.ChangeStatus({ status, id });
      return data;
    },
    {
      onError: () => message.error("Internal Error!"),
      onSuccess: () => message.success("Successfuly changed!"),
    }
  );
  return { mutation };
};

export default useUpdate
