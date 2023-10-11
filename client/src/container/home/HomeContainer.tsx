import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Home from "../../components/home/Home";
import { useDispatch, useSelector } from "react-redux";
import {
  getList,
  getPopularList,
  initSort,
  unloadForm,
} from "../../modules/register/action";
import { RootState } from "../../modules";

const HomeContainer: React.FC = () => {
  const dispatch = useDispatch();
  // const { mainSort, detailSort, search } = useSelector((state: RootState) => ({
  //   mainSort: state.register.list.sort.mainSort,
  //   detailSort: state.register.list.sort.detailSort,
  //   search: state.register.list.sort.search,
  // }));

  // useEffect(() => {
  //   // dispatch(unloadForm());
  //   console.log("ㅇㅇㅇ", mainSort, detailSort, "sss", search);
  //   dispatch(
  //     getList({
  //       mainSort,
  //       detailSort: {
  //         time: detailSort?.time,
  //         view: detailSort?.view,
  //         like: detailSort?.like,
  //       },
  //       search,
  //     })
  //   );
  //   dispatch(getPopularList());
  // }, [
  //   dispatch,
  //   detailSort?.like,
  //   detailSort?.time,
  //   detailSort?.view,
  //   mainSort,
  // ]);
  React.useEffect(() => {
    console.log("uuuuuuuuuuuuuuuuuuuuuuu");
    dispatch(unloadForm());
  }, []);

  return (
    <div>
      <Home
      // userData={userData}
      // boardData={boardData}
      // registerData={registerData}
      />
    </div>
  );
};

export default HomeContainer;
