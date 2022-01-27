import { CardContent, CardSubContainer } from "@/components/CardContent";
import {
  Container2,
  SwitchButtonContainer,
  ContainerSub2,
} from "@/components/Container";
import { CarouselImage } from "@/components/Carousel";
import { Btn } from "@/components/Button";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Page6Datas, PagButton, ColorSwitch } from "@/utils/datas";
import { SwitchButton } from "@/components/Button";
import { CarouselBtn2 } from "@/components/Carousel";
import { Grid } from "@mui/material";
const SubContain = styled.div`
  display: flex;
  padding-bottom: 100px;
  .editon {
    margin-right: 175px;
    text-align: left;
    font-size: 1.125em;
    font-weight: 600;
    margin-bottom: 10px;
    color: black;
  }
  h3 {
    margin-right: 40px;
    margin-bottom: 10px;
    color: black;
  }
  @media (max-width: 899px) {
    display: none;
  }
`;
const Description = styled.div`
  padding-top: 200px;
  .switch {
    align-self: flex-end;
    padding: 17.68px;
    align-items: center;
  }
  width: 40%;
  h2 {
    margin-bottom: 20px;
    font-size: 3.75em;
    line-height: 1.183em;
    text-align: left;
  }
  p {
    max-width: 640px;
    margin-bottom: 10px;
    font-family: "Sequel Sans (Display)", sans-serif;
    color: rgba(0, 0, 0, 0.5);
    font-size: 1.125em;
    line-height: 1.23em;
    font-weight: 400;
    text-align: left;
    text-decoration: none;
  }
  @media (max-width: 899px) {
    padding-top: 0px;
    width: 100%;
    h2 {
      font-size: 28px;
    }
    p {
      width: auto;
      font-size: 15px;
      font-weight: 400;
      line-height: 1.23em;
    }
  }
`;
const MobileImage = styled.div`
  display: none;
  @media (max-width: 899px) {
    display: block;
  }
`;
const ParentContainer = styled.div`
  position: relative;
  width: 100%;
  height: 1024px;
`;
export const Page6 = () => {
  const [active, setActive] = useState(0);
  const [zIndices, setZIndices] = useState([1, 0, 0, 0]);
  const [carouselImage, setcarouselImage] = useState(0);
  const selectCard = (newIndex: number) => {
    const oldActive = active;
    const newIndices = [...zIndices];
    newIndices[newIndex] = zIndices[oldActive] + 1;
    setActive(newIndex);
    setZIndices(newIndices);
  };

  return (
    <ParentContainer>
      {ColorSwitch.map((values, index) => (
        <Container2
          bgColor={values.img}
          active={index === active}
          zIndex={zIndices[index]}
        >
          <CardContent>
            <div className="headersection">
              <SubContain>
                <div className="editon">Editions</div>
                <h3>N-1</h3>
                <h3>RUNWAY YELLOW</h3>
              </SubContain>

              <CarouselImage
                img={values.img2[carouselImage] ?? ""}
                big={carouselImage === 2}
              />
            </div>

            <Description>
              <h2>{values.header}</h2>
              <p>{values.description}</p>
            </Description>
            <MobileImage>
              <CarouselImage img={values.img} />
            </MobileImage>
          </CardContent>

          <CarouselBtn2 data-aos="fade-up">
            <div className="cBtns">
              <div className="indicat">
                {PagButton.map((buttonValue) => (
                  <Btn
                    submit={() => setcarouselImage(buttonValue.id)}
                    // submit={() => setActive(Page6Datas[index].img[values.id])}
                    id={buttonValue.id}
                    text={buttonValue.text}
                    key={buttonValue.id}
                  />
                ))}
              </div>
              <div className="arrows">
                <SwitchButtonContainer>
                  {ColorSwitch.map((data) => (
                    <SwitchButton
                      onClick={() => {
                        selectCard(data.id);
                      }}
                      backColor={data.color}
                      key={data.id}
                    />
                  ))}
                </SwitchButtonContainer>
              </div>
            </div>
          </CarouselBtn2>
        </Container2>
      ))}
    </ParentContainer>
  );
};
