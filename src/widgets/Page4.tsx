import { useState } from "react";
import { Container8 } from "@/components/Container";
import styled from "styled-components";
import { CardContent4, CardSubContainer } from "@/components/CardContent";
import { ApplyButton } from "@/components/LearnMoreBtn";
import { Page4Datas } from "@/utils/datas";
import { NavCard } from "@/components/NavCard";

const LeftContent = styled.div`
  z-index: 1;
  width: 55%;
  padding-right: 4.5rem;
  justify-content: space-between;
  align-items: stretch;
  color: #000;
`;

const RightContent = styled.div`
  width: 100%;
  position: absolute;
  left: 700px;
  height: 100%;

  .vid {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
  video {
    position: absolute;
    height: 100%;
    width: auto;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
  img {
    width: 100%;
    position: absolute;
    right: 0px;
    left: 200px;
    height: 100%;
  }
`;
const VideoWrap = styled.div`
  position: absolute;
  left: auto;
  top: 0%;
  right: 0%;
  bottom: 0%;
  z-index: 0;
  display: flex;
  width: 45%;
  height: 100%;
  justify-content: center;
`;

const CarouselImage = styled.div<{ url: string }>`
  width: 100%;
  position: absolute;
  right: 0px;
  left: 300px;
  height: 100%;

  background-position: top left;
  /* background-position: center; */
  /* background-size: 1024px; */

  // background-size: 100% 1024px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  /* background-attachment: fixed;  heregtei*/
  transition: all 2s ease-out;
`;

const Title = styled.div`
  padding-top: 100px;
  .subheading {
    margin-bottom: 10px;
    color: #000;
    font-size: 1.125em;
    line-height: 1.222em;
    font-weight: 600;
    text-transform: uppercase;
  }
  .heading {
    font-size: 3.75em;
    line-height: 1.1833333333333333em;
    font-weight: 500;
    margin-bottom: 20px;
    font-family: "Sequel Sans (Display)", sans-serif;
    color: #000;
  }
`;

const NavList = styled.div``;

const NavLink = styled.a`
  display: flex;
  width: 100%;

  border-top: 1px solid #97999b;
  color: #000;
  text-decoration: none;

  padding-top: 0.95rem;
  padding-bottom: 3.125rem;
`;

const NavHeading = styled.div`
  width: 40%;
  text-align: left;
  display: block;

  h3 {
    margin-bottom: 10px;
    font-family: SequelSans-SemiBoldBody, sans-serif;
    color: #000;
    font-size: 1.5em;
    line-height: 1.208em;
    max-width: 10ch;
    font-family: "Sequel Sans (Display)", sans-serif;
    font-weight: 600;
  }
`;

const NavDesc = styled.div`
  width: auto;
  max-width: 29ch;
  font-size: 1em;
  margin-bottom: 10px;
  font-family: "Sequel Sans (Display)", sans-serif;
  line-height: 1.23em;
  font-weight: 400;
  text-decoration: none;
`;

const BenefBtn = styled.div`
  .learn-more {
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;

    text-decoration: none;
    cursor: pointer;
    width: 50%;
    height: 60px;

    margin-right: 0px;
    margin-bottom: 30px;
    margin-top: 20px;
    align-items: center;
    border-color: rgba(0, 0, 0, 0.65);
    border: 1px solid #000;
    border-radius: 10px;
    background-color: transparent;

    transition: border-color 500ms ease, background-color 500ms ease,
      filter 500ms ease, -webkit-filter 500ms ease;
    .link-text {
      margin-top: 8px;
      margin-bottom: 8px;
      color: #000;
      font-size: 0.75em;
      line-height: 1.166em;
      font-weight: 600;
      text-transform: uppercase;
    }
    .arrow-right-black {
      margin-left: 41px;
      padding-top: 0.5px;
    }
  }
  a:hover {
    background-color: #000;
    .link-text {
      color: #ffffff;
    }
    .arrow-right-black {
      color: #ffffff;
      fill: currentColor;
    }
  }
`;

export function Page4() {
  const [active, setActive] = useState(Page4Datas[0].img);
  return (
    <Container8>
      <CardContent4>
        <LeftContent>
          <Title>
            <div className="subheading">BENEFITS</div>
            <h2 className="heading">Peace of mind included.</h2>
          </Title>
          <NavList>
            {Page4Datas.map((values) => (
              <NavCard
                title={values.title}
                desc={values.desc}
                submit={() => setActive(values.img)}
                opacity={values ? true : false}
              />
            ))}
          </NavList>

          <BenefBtn>
            <a href="#Benefits" className="learn-more">
              <p className="link-text">SEE ALL BENEFITS</p>
              <img src="arrow.svg" alt="" className="arrow-right-black" />
            </a>
          </BenefBtn>
        </LeftContent>
        <RightContent>
          {/* <img
            src="https://d2r6iglqr5ha6g.cloudfront.net/web/images/211124-2_neon-carousel_travel-responsive.jpg"
            alt=""
          /> */}

          <CarouselImage url={active} />

          {/* <VideoWrap>
            <div className="vid">
              <video
                autoPlay
                loop
                muted
                className="benefits-slider--bg-video"
                poster="https://d2r6iglqr5ha6g.cloudfront.net/web/images/211129-1_hand-projection-map-2_website-export_loop.jpg"
              >
                <source src="https://d2r6iglqr5ha6g.cloudfront.net/web/video/benefits/211201-0_hand-projection-map-2_website-export_loop.mp4?raw=1" />
              </video>
            </div>
          </VideoWrap> */}
        </RightContent>
      </CardContent4>
    </Container8>
  );
}
