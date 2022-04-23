import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";

import * as Actions from "../actions";
import * as Api from "../api";

const Auth = ({ children }) => {
  const dispatch = useDispatch();

  const token = useSelector(
    (state) => state.auth.token
  );

  useQuery(
    ["auth", "profile", token],
    async () => {
      const { data } = await Api.Profile();
      return data;
    },
    {
      enabled: !!token,
      onSuccess: (profile) => {
        dispatch(Actions.Profile.request({ profile }));
      },
      onError: () => {
        dispatch(Actions.Logout.request());
      },
      retry: false,
    }
  );

  return children;
};

export default Auth;
