import * as Api from "../api";
import { useMutation } from "react-query";
import { message } from "antd";

const useUpdate = () => {
    const {mutate} = useMutation(
        async ({ email }) => {
            const { data } = await Api.Invited({ email });
            return data;
        },
        {
            onError: () => message.error("Internal Error!"),
            onSuccess: () => message.success("Successfuly changed!"),
        }
    );
    return { mutate };
};

export default useUpdate
