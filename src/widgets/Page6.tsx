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
`;
const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 2;
  max-width: 1240px;
  width: 85%;
  justify-content: space-between;
  .btncontainer2 {
    display: flex;
  }
`;
export const Page6 = () => {
  const [active, setActive] = useState(Page6Datas[0].img[0]);

  const [index, setIndex] = useState(0);

  const [bgColor, setbgColor] = useState(
    "https://assets-global.website-files.com/5ee7f9eb35bb1852519f534e/61a57c9f38981289c6e10dcf_yellow_10x10.jpg"
  );
  useEffect(() => {
    setActive(Page6Datas[index].img[0]);
  }, [index]);
  return (
    <Container2 bgColor={bgColor}>
      <ContainerSub2>
        <CardContent>
          <div className="headersection">
            <SubContain>
              <div className="editon">Editions</div>
              <h3>N-1</h3>
              <h3>RUNWAY YELLOW</h3>
            </SubContain>

            <CarouselImage img={active} />
          </div>

          <Description>
            <h2>Formed for function.</h2>
            <p>
              Designed for function first. Obsessive attention to detail from
              conception to production results in an object that is
              future-forward and distinctive.
            </p>
          </Description>
        </CardContent>

        <CarouselBtn2 data-aos="fade-up">
          <div className="cBtns">
            <div className="indicat">
              {PagButton.map((values) => (
                <Btn
                  submit={() => setActive(Page6Datas[index].img[values.id])}
                  id={values.id}
                  text={values.text}
                />
              ))}
            </div>
            <div className="arrows">
              <SwitchButtonContainer>
                {ColorSwitch.map((data) => (
                  <SwitchButton
                    onClick={() => {
                      setIndex(data.id);
                      setbgColor(data.img);
                    }}
                    backColor={data.color}
                  />
                ))}
              </SwitchButtonContainer>
            </div>
          </div>
        </CarouselBtn2>
      </ContainerSub2>
    </Container2>
  );
};