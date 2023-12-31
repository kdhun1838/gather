import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "styled-components";
import Responsive from "../../styled/Responsive";
import { Title, TitleBox } from "../community/CommunityPopularPosts";
import Button from "../../styled/Button";
import { ListDetailType } from "../../modules/register/type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faVolleyball,
  faGamepad,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { deadline } from "../../lib/function/date";

interface OwnProps {
  goWrite: () => void;
  popularList: ListDetailType[];
  onClickPost: (postId: number) => void;
}

const HomePopularList: React.FC<OwnProps> = (props) => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <TitleBox>
        <Title>🔥 이번주 인기글</Title>
        <ButtonBlock>
          <Button onClick={() => props.goWrite()}>글쓰기</Button>
        </ButtonBlock>
      </TitleBox>
      <Center>
        <CustomSlider {...settings}>
          {props.popularList &&
            props.popularList.map((item: ListDetailType, index) => (
              <Item
                key={index}
                onClick={() => props.onClickPost(item.registerNum)}
              >
                <ItemFirst>
                  <Category>
                    {item.category && item.category === "운동" && (
                      <FontAwesomeIcon
                        icon={faVolleyball}
                        style={{ color: "blue" }}
                      />
                    )}
                    {item.category && item.category === "스터디" && (
                      <FontAwesomeIcon
                        icon={faPencil}
                        style={{ color: "red" }}
                      />
                    )}
                    {item.category && item.category === "게임" && (
                      <FontAwesomeIcon
                        icon={faGamepad}
                        style={{ color: "green" }}
                      />
                    )}
                    {item.category && item.category === "기타" && (
                      <FontAwesomeIcon
                        icon={faEllipsis}
                        style={{ color: "black" }}
                      />
                    )}
                    <div>{item.category}</div>
                  </Category>
                  <Deadline>{deadline(item.period)}</Deadline>
                </ItemFirst>
                <ItemSecond>마감일 | {item.period}</ItemSecond>
                <ItemThird>{item.title}</ItemThird>
                <ItemFourth>👀 조회수 {item.view}회</ItemFourth>
              </Item>
            ))}
        </CustomSlider>
      </Center>
    </Wrapper>
  );
};
const Center = styled.div`
  display: flex;
  justify-content: center;
  /* width: 100%; */
  /* min-width: 1280px; */
`;

const Item = styled.div`
  color: black;
  display: flex;
  width: 340px;
  padding: 20px 25px;
  gap: 10px;
  border-radius: 20px;
  border: 2px solid rgb(209, 209, 209);
  background: rgb(255, 255, 255);
  cursor: pointer;
  transition: transform 0.3s;
  margin: 1rem 0 1rem 0;

  &:hover {
    -webkit-transform: scale(1.03);
    transform: scale(1.03);
  }
`;

const ItemFirst = styled.div`
  display: flex;
  height: 26px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 4px 12px;
  background: #efefef;
  color: #656565;

  > div {
    margin-left: 0.4rem;
  }
`;

const Deadline = styled.div`
  padding: 2px 8px;
  border-radius: 20px;
  border: 1px solid rgb(234, 114, 111);
  color: rgb(234, 114, 111);
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.56px;
`;

const ItemSecond = styled.div`
  color: rgb(153, 153, 153);
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  margin-top: 20px;
`;

const ItemThird = styled.div`
  margin: 10px 0px 0px;
  color: rgb(0, 0, 0);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -1px;
  min-height: 50px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-break: break-all;
  overflow: hidden;
`;

const ItemFourth = styled.div`
  margin-top: 15px;
  color: rgb(78, 78, 78);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: -0.56px;
  text-align: end;
`;

const Wrapper = styled(Responsive)``;

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CustomSlider = styled(Slider)`
  /* padding: 1rem 0 0 1rem; */
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  max-width: 95%;
  width: 90%;
  min-width: 100px;
  /* height: 15rem; */
  .slick-next:before,
  .slick-prev:before {
    color: black;
    font-size: 2rem;
    margin: 0 1rem;
    /* z-index: 1; */
  }

  .slick-list {
    margin: 0 6% 0 6%;
    width: 90%;
    /* display: flex; */
  }
  .slick-slide {
    padding-left: 0.5rem;
    /* width: 100% !important; */
  }
  .slick-slider {
    display: flex;
    justify-content: center;
    width: 90%;
  }
`;

export default HomePopularList;
