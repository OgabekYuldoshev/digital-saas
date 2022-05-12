// import get from "lodash/get";
import { useQuery } from "react-query";
import * as Api from "../api";
import * as Constants from "../constants";
import * as Mappers from "../mapper";

const useList = () => {
  const { data, ...args } = useQuery(
    [Constants.ENTITY, "list"],
    async () => {
      const { data } = await Api.List();
      return { items: Mappers.Tasks(data) };
    },
    { keepPreviousData: true, retry: false }
  );

  return { ...data, ...args };
};

export default useList;
