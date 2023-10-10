import { GetListType, RegisterState } from "./type";
import { createRequestActionTypes } from "../../lib/createRequestSaga";

export const UNLOAD_FORM = "register/UNLOAD_FORM" as const;
export const CHANGE_FORM = "register/CHANGE_FORM" as const;
export const CHANGE_SORT_FORM = "register/CHANGE_SORT_FORM" as const;
export const CHANGE_DETAIL_SORT_FORM =
  "register/CHANGE_DETAIL_SORT_FORM" as const;
export const [GET_LIST, GET_LIST_SUCCESS, GET_LIST_FAILURE] =
  createRequestActionTypes("register/GET_LIST");
export const [POST_FORM, POST_FORM_SUCCESS, POST_FORM_FAILURE] =
  createRequestActionTypes(" register/POST_FORM");

export const unloadForm = () => ({
  type: UNLOAD_FORM,
  payload: {},
});

export const changeForm = ({ key, value }: { key: string; value: string }) => ({
  type: CHANGE_FORM,
  payload: {
    key,
    value,
  },
});

export const changeSort = ({ key, value }: { key: string; value: string }) => ({
  type: CHANGE_SORT_FORM,
  payload: {
    key,
    value,
  },
});
export const changeDetailSort = ({
  key,
  value,
}: {
  key: string;
  value: string;
}) => ({
  type: CHANGE_DETAIL_SORT_FORM,
  payload: {
    key,
    value,
  },
});

export const getList = (data: GetListType) => ({
  type: GET_LIST,
  payload: {
    data,
  },
});

export const postForm = (form: RegisterState) => ({
  type: POST_FORM,
  payload: {
    form,
  },
});
