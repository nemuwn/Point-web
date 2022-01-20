import { Container4 } from "@/components/Container";
import styled from "styled-components";
import { CardContent, CardSubContainer } from "@/components/CardContent";
import { ApplyButton } from "@/components/LearnMoreBtn";
import { Container, Grid } from "@mui/material";

const CardCont = styled.div`
  position: absolute;
  width: 85%;
  height: auto;
  max-width: 1200px;
  display: flex;
  align-items: flex-start;
`;

const Content = styled.div`
  position: relative;
  z-index: 4;
  left: 0%;
  top: auto;
  right: auto;
  bottom: 0%;
  z-index: 2;
  display: block;
  width: 100%;
  height: auto;
  padding-top: 100px;
  @media (max-width: 899px) {
    padding-top: 0px;
  }
`;

const Subheading = styled.div`
  color: #000;
  font-size: 1.125em;
  line-height: 1.222em;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;
  @media (max-width: 899px) {
    font-size: 15px;
    font-weight: 400;
  }
`;

const Heading = styled.h2`
  font-size: 3.75em;
  line-height: 1.18em;
  font-weight: 600;
  margin-bottom: 10px;

  @media (max-width: 899px) {
    font-size: 28px;
    line-height: 1.2em;
  }
`;

const Desc = styled.p`
  width: 540px;
  max-width: none;
  margin-bottom: 30px;
  line-height: 1.23em;

  @media (max-width: 899px) {
    font-size: 15px;
    font-weight: 400;
    width: 100%;
    margin-bottom: 0px;
    line-height: 19px;
    max-width: 480px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const CardImg = styled.div`
  position: static;
  display: block;
  overflow: visible;
  width: 85%;
  height: 100%;
  max-width: 1200px;
  img {
    object-position: -440px 50%;
    position: relative;
    left: -40px;
    display: block;
    width: auto;
    height: 100%;
    max-width: none;
    object-fit: cover;
  }
  .mobile {
    display: none;
  }
  @media (max-width: 899px) {
    display: block;
    width: 100%;

    .desktop {
      display: none;
    }
    .mobile {
      display: block;
      width: auto;
      height: 100%;
      object-fit: cover;
      object-position: -220px 50%;
    }
  }
`;

const Pay = styled.div`
  display: block;
  margin-top: 20px;
  img {
    margin-right: 20px;
  }
`;

export function Page8() {
  return (
    <Container4>
      <CardCont>
        <Content>
          <Subheading data-aos="fade-up">Contactless</Subheading>
          <Heading data-aos="fade-right">Hold me near.</Heading>
          <Desc data-aos="fade-left">
            With an RFID transponder embedded in its core, PointCard enables you
            to pay with a quick touch-free wave. And for those times when you’re
            without your card, there’s also Apple Pay and Google Pay.
          </Desc>
          <Pay data-aos="fade-down">
            <img
              src="https://assets-global.website-files.com/5ee7f9eb35bb1852519f534e/5f07b89b09cb6038a9369bbc_fill-1.svg"
              alt="apple pay"
            />
            <img
              src="https://assets-global.website-files.com/5ee7f9eb35bb1852519f534e/5f07b89baf42acd87f4f1476_clip-10.svg"
              alt="google pay"
            />
          </Pay>
        </Content>
      </CardCont>
      <CardImg>
        <img
          src="https://assets-global.website-files.com/5ee7f9eb35bb1852519f534e/61a94dcc8579837119a96fe6_1687_ContactlessOrange_P3_wide_2x.jpg"
          className="desktop"
        />
        <img
          src="https://assets-global.website-files.com/5ee7f9eb35bb1852519f534e/61a94dc7a2dbfe5cc04ee938_1687_Contactless_P3_mobile_2x.jpg"
          className="mobile"
        />
      </CardImg>
    </Container4>
  );
}
