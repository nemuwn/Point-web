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
  .mobile_h2 {
    display: none;
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
  @media (max-width: 899px) {
    .LogoContainer {
      display: none;
    }
    .mobile_h2 {
      display: block;
      position: absolute;
      left: 0%;
      z-index: 2;
      width: 100%;
      font-size: 28px;
      line-height: 1;
      color: #fff;
      margin-bottom: 20px;
    }
    .p-text {
      padding-top: 50px;
      p {
        max-width: none;
        font-size: 15px;
        font-weight: 400;
        line-height: 1.18em;
      }
      .dBtn {
        display: none;
      }
    }

    .cBtns {
      margin-right: auto;
      margin-left: auto;
      justify-content: center;
      position: static;
      top: 0px;
      bottom: auto;
      height: auto;
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
          <h2 className="mobile_h2">Hand In Hand</h2>
          <div className="p-text">
            <p>
              PointCard and its companion app complete each other — giving you
              clarity, speed, and transparency.
            </p>
            <div className="dBtn">
              <DownloadButton />
            </div>
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
                        key={data.id}
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
