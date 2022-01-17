import styled from "styled-components";
import {
  Container,
  SwitchButtonContainer,
  ContainerPh,
} from "@/components/Container";
import { CardContent2 } from "@/components/CardContent";
import { CarouselImage, CarouselBtn3 } from "@/components/Carousel";
import { Logo } from "@/components/Logo";
import { DownloadButton } from "@/components/DownloadButton";
import { ColorSwitch } from "@/utils/datas";
import { SwitchButton } from "@/components/Button";
import { CarouselImage2 } from "@/components/Carousel2";
import { HandInHandDatas } from "@/utils/datas";
import { useState } from "react";
const HandContainer = styled.div`
  display: flex;
  h2 {
    color: white;
    font-size: 6.28em;
  }
  .LogoContainer {
    position: absolute;
    left: 0%;
    z-index: 2;
    width: 100%;
    max-width: 100%;
  }
  .p-text {
    padding-top: 255px;
    p {
      max-width: 630px;
      border-radius: 0px;
      font-family: "Sequel Sans (Display)", sans-serif;
      color: hsla(0, 0%, 100%, 0.4);
      font-size: 1.5em;
      line-height: 1.15em;
      font-weight: 400;
      margin-bottom: 60px;
    }
  }
`;
export const HandInHand = () => {
  const [active, setActive] = useState(HandInHandDatas[0].imgPath);
  return (
    <ContainerPh>
      <CardContent2>
        <HandContainer>
          <div className="LogoContainer" data-aos="flip-up">
            <Logo />
          </div>
          <div className="p-text">
            <p>
              PointCard and its companion app complete each other — giving you
              clarity, speed, and transparency.
            </p>

            <DownloadButton />
            <CarouselBtn3 data-aos="fade-right">
              <div className="cBtns">
                <div className="indicat">
                  <SwitchButtonContainer>
                    {ColorSwitch.map((data) => (
                      <SwitchButton
                        onClick={() =>
                          setActive(HandInHandDatas[data.id].imgPath)
                        }
                        backColor={data.color}
                      />
                    ))}
                  </SwitchButtonContainer>
                </div>
              </div>
            </CarouselBtn3>
          </div>
        </HandContainer>
      </CardContent2>
      <CarouselImage2 imgpath={active} />
    </ContainerPh>
  );
};
