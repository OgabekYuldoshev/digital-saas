// import get from "lodash/get";
import { useQuery } from "react-query";
import * as Api from "../api";
import * as Constants from "../constants";
import * as Mappers from "../mapper";

const useList = ({ id }) => {
  const { data, ...args } = useQuery(
    [Constants.ENTITY, "single", id],
    async () => {
      const { data } = await Api.Single({ id });
      return { item: Mappers.SingleTask(data) };
    },
    { keepPreviousData: true, retry: false, enabled: !!id }
  );

  return { ...data, ...args };
};

export default useList;
