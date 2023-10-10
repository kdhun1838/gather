import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Home from "../../components/home/Home";
import { useDispatch, useSelector } from "react-redux";
import { getList, unloadForm } from "../../modules/register/action";
import { RootState } from "../../modules";

const HomeContainer: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mainSort, detailSort, search } = useSelector((state: RootState) => ({
    mainSort: state.register.list.sort.mainSort,
    detailSort: state.register.list.sort.detailSort,
    search: state.register.list.sort.search,
  }));

  const fetchData = async () => {
    try {
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    dispatch(unloadForm());
    console.log("ㅇㅇㅇ", mainSort, detailSort, "sss", search);
    dispatch(
      getList({
        mainSort,
        detailSort: {
          time: detailSort?.time,
          view: detailSort?.view,
          like: detailSort?.like,
        },
        search,
      })
    );
  }, [
    dispatch,
    detailSort?.like,
    detailSort?.time,
    detailSort?.view,
    mainSort,
    detailSort,
    search,
  ]);

  const goWrite = () => {
    navigate("/register");
  };

  return (
    <div>
      <Home
        goWrite={goWrite}
        // userData={userData}
        // boardData={boardData}
        // registerData={registerData}
      />
    </div>
  );
};

export default HomeContainer;
