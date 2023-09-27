import React from "react";
import "react-quill/dist/quill.snow.css";
import {
  ContainerBox,
  NameTagBox,
  TitleBox,
  SelectBox,
  EditorBox,
  ButtonBox,
  Button,
} from "../../styled/community";
import MyQuillEditor from "../../lib/editor/Editor";

// 전달 받을 props를 타입에 지정해주기(미지정시 타입오류)
type CommunityPropType = {
  onChangeForm: (data: { key: string; value: string }) => void;
  category: string;
  title: string;
  content: string;
  onCancel: () => void;
  onSubmit: () => void;
};

const CommunityWrite: React.FC<CommunityPropType> = ({
  onChangeForm,
  category,
  title,
  content,
  onCancel,
  onSubmit,
}) => {
  const options: string[] = ["선택사항", "후기", "질문", "잡담"];

  // 나중 db에서 가져와 유저가 참여한 프로젝트를 배열로 나열예정
  const enterProjects: string[] = ["야구", "사이트 개발"];

  return (
    <ContainerBox>
      <TitleBox>글쓰기 기본정보를 입력해주세요 .</TitleBox>

      <SelectBox>
        <div>
          <NameTagBox>유형</NameTagBox>
          <select
            name="category"
            onChange={(e) =>
              onChangeForm({ key: e.target.name, value: e.target.value })
            }
          >
            {options.map((option, index) => {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>

        {category === "후기" && (
          <>
            <div>
              <NameTagBox>참여한 프로젝트</NameTagBox>
              <select
                name="detail"
                onChange={(e) =>
                  onChangeForm({ key: e.target.name, value: e.target.value })
                }
              >
                {enterProjects.map((enterProject, index) => {
                  return <option key={index}>{enterProject}</option>;
                })}
              </select>
            </div>
          </>
        )}
      </SelectBox>

      <TitleBox>글쓰기 내용를 입력해주세요 .</TitleBox>

      <EditorBox>
        <NameTagBox>제목</NameTagBox>
        <input
          name="title"
          value={title}
          placeholder="글제목을 입력해주세요."
          onChange={(e) =>
            onChangeForm({ key: e.target.name, value: e.target.value })
          }
        />
        <MyQuillEditor onChangeForm={onChangeForm} content={content} />
      </EditorBox>

      <ButtonBox>
        <Button onClick={onSubmit}>글등록버튼</Button>
        <Button onClick={onCancel}>취소버튼</Button>
      </ButtonBox>
    </ContainerBox>
  );
};

export default CommunityWrite;
