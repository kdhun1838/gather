import React from "react";
import { Table } from "antd";
import styled from "styled-components";
import { changeDate } from "../../../community/Community";

interface OwnProps {
  data: any;
}

const AdminCommunityChartTable = (props: OwnProps) => {
  console.log("ddddd", props.data);

  const columns = [
    {
      title: "번호",
      dataIndex: "communityNum",
      key: "communityNum",
      //   width: "10%",
      //   render: (registerNum: number) => <div>{registerNum}</div>,
    },
    {
      title: "카테고리",
      dataIndex: "category",
      key: "category",
      //   width: "50%",
      //   render: (registerDataCount: number) => <div>{registerDataCount} 개</div>,
    },
    {
      title: "제목",
      dataIndex: "title",
      key: "title",
      //   width: "50%",
      //   render: (registerDataCount: number) => <div>{registerDataCount} 개</div>,
    },
    {
      title: "조회수",
      dataIndex: "view",
      key: "view",
      sorter: (a: any, b: any) => {
        return a.view - b.view;
      },
      render: (view: number) => <div>{view} 회</div>,
    },
    {
      title: "작성자",
      dataIndex: "nick",
      key: "nick",
      //   width: "25%",
    },
    {
      title: "작성일",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt: Date) => (
        <div>{changeDate(createdAt.toString())}</div>
      ),
      //   width: "25%",
    },
  ];

  return (
    <Wrapper>
      <Table columns={columns} dataSource={props.data} pagination={false} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export default AdminCommunityChartTable;
