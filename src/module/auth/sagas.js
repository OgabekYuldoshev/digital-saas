import { push } from "connected-react-router";
import { all, put, takeLatest } from "redux-saga/effects";

import * as Actions from "./actions";
import * as Constants from "./constants";

export function* Logout(action) {
  try {
    // eslint-disable-next-line no-empty
  } catch (e) {}
  yield put(push("/"));
  yield put(Actions.Logout.success());
}

export default function* root() {
  yield all([takeLatest(Constants.LOGOUT.REQUEST, Logout)]);
}
