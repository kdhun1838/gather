import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import { RegisterState } from "../../modules/register/type";

const H1 = styled.h1`
  font-size: 34px;
`;

const StyleForm = styled.div`
  padding: 50px;
  width: 100%;
  border: 1px solid #ddd;
`;

const TitleForm = styled.div`
  width: 100%;
  margin-bottom: 50px;

  h3 {
    margin-bottom: 10px;
  }

  input {
    padding: 10px;
    width: 100%;
    font-size: 18px;
  }
`;

const OptionForm = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const InputForm = styled.div`
  width: calc(50% - 20px);
  margin-bottom: 25px;
  h3 {
    margin-bottom: 10px;
  }
  input,
  select {
    width: 100%;
    padding: 10px;
    font-size: 18px;
  }

  &:nth-child(2n + 1) {
    margin-right: 40px;
  }
  &.textForm {
    width: 100%;
    textarea {
      display: block;
      padding: 10px;
      width: 100% !important;
      font-size: 18px;
      resize: none;
    }
  }
`;

const ButtonForm = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  button {
    width: 200px;
    font-size: 20px;
    font-weight: bold;
    background: #fff;
    border: 2px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;

    &:first-child {
      margin-right: 20px;
      border: 2px solid #59d5f0;
      color: #59d5f0;
    }
  }
`;

const ModalWrap = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);

  .modalForm {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 200px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);

    h3 {
      margin-bottom: 30px;
    }

    button {
      width: 100px;
      padding: 10px 20px;
      background: #fff;
      border: 2px solid;
      font-size: 18px;
      font-weight: bold;
      border-radius: 5px;
      cursor: pointer;

      &:first-child {
        margin-right: 10px;
        border-color: #59d5f0;
        color: #59d5f0;
      }
    }
  }
`;

type RegisterProp = {
  onChangeForm: (data: { key: string; value: string | number }) => void;
  onPostForm: (form: RegisterState) => void;
  onIsPost: (e: FormEvent) => void;
  onCancle: () => void;
  isPost: boolean;
  form: RegisterState;
};

const personner = Array.from({ length: 10 }, (_, index) => index + 1);

const Register: React.FC<RegisterProp> = ({
  onChangeForm,
  onPostForm,
  onIsPost,
  onCancle,
  isPost,
  form,
}) => {
  return (
    <>
      <StyleForm>
        <TitleForm>
          <h3>제목</h3>
          <input
            type="text"
            onChange={(e) =>
              onChangeForm({ key: "title", value: e.target.value })
            }
          />
        </TitleForm>
        <OptionForm>
          <InputForm>
            <h3>카테고리</h3>
            <select
              onChange={(e) =>
                onChangeForm({ key: "category", value: e.target.value })
              }
            >
              <option value="">카테고리</option>
              <option value="sport">운동</option>
              <option value="game">게임</option>
              <option value="study">스터디</option>
              <option value="etc">기타</option>
            </select>
          </InputForm>
          <InputForm>
            <h3>인원</h3>
            <select
              onChange={(e) =>
                onChangeForm({ key: "personnel", value: e.target.value })
              }
            >
              <option value="0">인원</option>
              {personner.map((option) => (
                <option key={option} value={option}>
                  {option} 명
                </option>
              ))}
              <option value="11">10명 이상</option>
            </select>
          </InputForm>
          <InputForm>
            <h3>온·오프라인</h3>
            <select
              onChange={(e) =>
                onChangeForm({ key: "online", value: e.target.value })
              }
            >
              <option value="">온·오프라인</option>
              <option value="online">온라인</option>
              <option value="offline">오프라인</option>
            </select>
          </InputForm>
          <InputForm>
            <h3>포지션</h3>
            <input
              type="text"
              onChange={(e) =>
                onChangeForm({ key: "position", value: e.target.value })
              }
            />
          </InputForm>
          <InputForm>
            <h3>연락 방법</h3>
            <input
              type="text"
              onChange={(e) =>
                onChangeForm({ key: "contact", value: e.target.value })
              }
            />
          </InputForm>
          <InputForm className="textForm">
            <h3>모임 설명</h3>
            <textarea
              rows={25}
              onChange={(e) =>
                onChangeForm({ key: "content", value: e.target.value })
              }
            />
          </InputForm>
        </OptionForm>
        <ButtonForm>
          <button onClick={(e) => onIsPost(e)}>등록</button>
          <button>취소</button>
        </ButtonForm>
      </StyleForm>
      {isPost === true && (
        <ModalWrap>
          <div className="modalForm">
            <h3>정말 등록하시겠습니까?</h3>
            <div>
              <button onClick={(e) => onPostForm(form)}>확인</button>
              <button onClick={() => onCancle()}>취소</button>
            </div>
          </div>
        </ModalWrap>
      )}
    </>
  );
};

export default Register;
