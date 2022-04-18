import { useDispatch, useSelector } from "react-redux";

import * as Actions from "../actions";

const useAuth = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isFetched = useSelector((state) => state.auth.isFetched);
  const token = useSelector((state) => state.auth.token);
  const profile = useSelector((state) => state.auth.profile);

  const logout = () => {
    dispatch(Actions.Logout.request());
  };

  return { isAuthenticated, isFetched, token, profile, methods: { logout } };
};

export default useAuth;
