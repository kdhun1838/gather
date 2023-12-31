import { GetListType, RegisterState } from "./type";
import { createRequestActionTypes } from "../../lib/function/createRequestSaga";

// 액션타입
export const UNLOAD_FORM = "register/UNLOAD_FORM" as const;

export const CHANGE_FORM = "register/CHANGE_FORM" as const;

export const INIT_SORT = "register/INIT_SORT" as const;

export const CHANGE_SORT_FORM = "register/CHANGE_SORT_FORM" as const;

export const CHANGE_DETAIL_SORT_FORM =
  "register/CHANGE_DETAIL_SORT_FORM" as const;
export const CHANGE_RECRUIT = "register/CHANGE_RECRUIT" as const;
export const [GET_LIST, GET_LIST_SUCCESS, GET_LIST_FAILURE] =
  createRequestActionTypes("register/GET_LIST");

export const [
  GET_POPULAR_LIST,
  GET_POPULAR_LIST_SUCCESS,
  GET_POPULAR_LIST_FAILURE,
] = createRequestActionTypes("register/GET_POPULAR_LIST");

export const [POST_FORM, POST_FORM_SUCCESS, POST_FORM_FAILURE] =
  createRequestActionTypes("register/POST_FORM" as const);

export const [GET_FORM, GET_FORM_SUCCESS, GET_FORM_FAILURE] =
  createRequestActionTypes("register/GET_FORM" as const);

export const [POST_CLOSE, POST_CLOSE_SUCCESS, POST_CLOSE_FAILURE] =
  createRequestActionTypes("register/POST_CLOSE" as const);

export const [POST_DELETE, POST_DELETE_SUCCESS, POST_DELETE_FAILURE] =
  createRequestActionTypes("register/POST_DELETE" as const);

export const CHANGE_COMMENT = "register/CHANGE_COMMENT" as const;

export const [POST_COMMENT, POST_COMMENT_SUCCESS, POST_COMMENT_FAILURE] =
  createRequestActionTypes("register/POST_COMMENT" as const);

export const [GET_COMMENT, GET_COMMENT_SUCCESS, GET_COMMENT_FAILURE] =
  createRequestActionTypes("register/GET_COMMENT" as const);

export const UNLOAD_COMMENT = "register/UNLOAD_COMMENT" as const;

export const GET_ORIGINAL_FORM = "register/GET_ORIGINAL_FORM" as const;

export const [MODIFY_FORM, MODIFY_FORM_SUCCESS, MODIFY_FORM_FAILURE] =
  createRequestActionTypes("register/MODIFY_FORM" as const);

export const GET_ORIGINAL_COMMENT = "register/GET_ORIGINAL_COMMENT" as const;
// 디스패치
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

export const initSort = () => ({
  type: INIT_SORT,
  payload: {},
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

export const changeRecruit = () => ({
  type: CHANGE_RECRUIT,
  payload: {},
});

export const getList = (data: GetListType) => ({
  type: GET_LIST,
  payload: {
    data,
  },
});

export const getPopularList = () => ({
  type: GET_POPULAR_LIST,
  payload: {},
});

export const postForm = (form: RegisterState, userNum: number) => ({
  type: POST_FORM,
  payload: {
    form,
    userNum,
  },
});

export const getForm = (postId: Number) => ({
  type: GET_FORM,
  payload: {
    postId,
  },
});

export const postClose = (postId: Number) => ({
  type: POST_CLOSE,
  payload: {
    postId,
  },
});

export const postDelete = (postId: Number) => ({
  type: POST_DELETE,
  payload: {
    postId,
  },
});

export const changeComment = ({
  key,
  value,
}: {
  key: string;
  value: string;
}) => ({
  type: CHANGE_COMMENT,
  payload: {
    key,
    value,
  },
});

export const postComment = (
  comment: string,
  postId: number,
  userNum: number
) => ({
  type: POST_COMMENT,
  payload: {
    comment,
    postId,
    userNum,
  },
});

export const unloadComment = () => ({
  type: UNLOAD_COMMENT,
  payload: {},
});

export const getOriginalForm = (originFormData: object) => ({
  type: GET_ORIGINAL_FORM,
  payload: {
    originFormData,
  },
});

export const modifyForm = (form: RegisterState, postId: number) => ({
  type: MODIFY_FORM,
  payload: {
    form,
    postId
  }
});

export const getOriginalComment = (commentItem: object) => ({
  type: GET_ORIGINAL_COMMENT,
  payload: {
    commentItem
  }
})
