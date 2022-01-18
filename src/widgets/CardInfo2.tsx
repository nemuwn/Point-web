import styled from "styled-components";
import { Card } from "@/components/Card";
import { cardDatas } from "@/utils/datas";
import { useState } from "react";

import { ApplyButton } from "@/components/LearnMoreBtn";
import { Grid } from "@mui/material";

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;

  height: 1024px;
  margin-top: 100vh;

  flex-direction: column;

  justify-content: center;

  align-items: center;
  background-color: #000;
  z-index: 1;
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
  }
`;
const SubContainer = styled.div`
  display: flex;
  width: 85%;
  max-width: 1200px;
`;

const CarouselImage = styled.div<{ url: string }>`
  width: 100%;
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;

  background-position: 90% -90px;
  background-size: 530px;
  background-attachment: scroll;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;

  transition: all 1s ease-out;
`;
const ContainerWrap = styled.div`
  position: static;

  right: auto;

  display: flex;
  width: 100%;
  height: 740px;
  max-width: none;
  @media (max-width: 740px) {
    display: flex;
    width: 90%;
    flex-direction: column;
    justify-content: flex-start;
    height: auto;
  }
  flex-direction: column;

  justify-content: space-between;
`;
const SubHeader = styled.div`
  color: white;
  margin-bottom: 60px;
  .link-text:hover {
    color: "#000";
  }

  font-size: 1.125em;
  line-height: 1.222em;
  font-weight: 600;
  text-transform: uppercase;
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    flex-direction: row;
  }
`;
export const Cardinfo = () => {
  const [active, setActive] = useState(cardDatas[0].imagePath);

  return (
    <Container>
      <SubContainer>
        <ContainerWrap>
          <SubHeader>
            <p>Designed in Tandem</p>
          </SubHeader>
          <CardContainer>
            {cardDatas.map((values) => (
              <Card
                title={values.title}
                text={values.description}
                submit={() => setActive(values.imagePath)}
                opacity={values ? true : false}
              />
            ))}
          </CardContainer>

          <CarouselImage url={active} />
          <div style={{ width: "40%", zIndex: 11 }}>
            <ApplyButton
              backgroundColor="transparent"
              borderColor="#fff"
              text="APPLY"
              textColor="#fff"
            />
          </div>
        </ContainerWrap>
      </SubContainer>
    </Container>
  );
};
