import { createTransform, persistReducer } from "redux-persist";
import persistStorage from "redux-persist/lib/storage";
import * as Constants from "./constants";

const initialState = {
  isAuthenticated: false,
  isFetched: true,
  token: "",
  profile: {
    id: "",
    firstName: "",
    lastName: "",
    middleName: "",
    fullName: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Constants.LOGOUT.REQUEST: {
      return {
        ...state,
        isFetched: false,
      };
    }
    case Constants.LOGOUT.SUCCESS: {
      return {
        ...state,
        ...initialState,
        isAuthenticated: false,
        isFetched: true,
      };
    }
    case Constants.LOGIN.REQUEST: {
      const { token } = action.payload;
      console.log(token);
      return {
        ...state,
        isAuthenticated: true,
        isFetched: false,
        token,
      };
    }
    case Constants.PROFILE.REQUEST: {
      const { profile } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        isFetched: true,
        profile,
      };
    }
    default:
      return state;
  }
};

const isFetchedTransform = createTransform(
  (state) => state,
  (isFetched, key, stored) => {
    const token = JSON.parse(stored.token);

    return !token;
  },
  { whitelist: ["isFetched"] }
);

const persistConfig = {
  key: "auth",
  storage: persistStorage,
  whitelist: ["isFetched", "token", "theme"],
  transforms: [isFetchedTransform],
};

export default persistReducer(persistConfig, reducer);
