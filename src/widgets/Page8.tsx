import { Container4 } from "@/components/Container";
import styled from "styled-components";
import { CardContent, CardSubContainer } from "@/components/CardContent";
import { ApplyButton } from "@/components/LearnMoreBtn";

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
  position: relative;
  left: 0%;
  top: auto;
  right: auto;
  bottom: 0%;
  z-index: 2;
  display: block;
  width: 100%;
  height: auto;

  padding-top: 100px;
`;

const Subheading = styled.div`
  color: #000;
  font-size: 1.125em;
  line-height: 1.222em;
  font-weight: 600;
  text-transform: uppercase;

  margin-bottom: 10px;
`;

const Heading = styled.h2`
  font-size: 3.75em;
  line-height: 1.1833333333333333em;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Desc = styled.div`
  width: 515px;
  p {
    width: 540px;
    max-width: none;
    margin-bottom: 30px;
    line-height: 1.23em;
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
            <p>
              With an RFID transponder embedded in its core, PointCard enables
              you to pay with a quick touch-free wave. And for those times when
              you’re without your card, there’s also Apple Pay and Google Pay.
            </p>
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
        <img src="https://assets-global.website-files.com/5ee7f9eb35bb1852519f534e/61a94dcc8579837119a96fe6_1687_ContactlessOrange_P3_wide_2x.jpg" />
      </CardImg>
    </Container4>
  );
}
