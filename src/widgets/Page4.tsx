import { useState } from "react";
import { Layout8 } from "@/components/Container";
import styled from "styled-components";
import { Page4Datas } from "@/utils/datas";
import { NavCard } from "@/components/NavCard";
import { Container } from "@mui/material";

const LeftContent = styled.div`
  z-index: 1;
  width: 55%;
  padding-right: 4.5rem;
  justify-content: space-between;
  align-items: stretch;
  color: #000;

  @media (max-width: 899px) {
    padding-right: 0;
    justify-content: center;
    width: 100%;
  }
`;

const RightContent = styled.div`
  position: absolute;
  left: auto;
  top: 0%;
  right: 0%;
  bottom: 0%;
  width: 45%;

  img {
    width: 100%;
    position: absolute;
    right: 0px;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 899px) {
    padding-top: 30px;
    position: static;
    overflow: hidden;
    width: 100%;
    height: 500px;
    img {
      object-fit: contain;
      height: auto;
    }
  }
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
    font-weight: 600;
    margin-bottom: 20px;
    font-family: "Sequel Sans (Display)", sans-serif;
    color: #000;
  }

  @media (max-width: 899px) {
    padding-top: 0px;
    padding-bottom: 20px;
    .subheading {
      font-size: 15px;
      font-weight: 400;
    }
    .heading {
      font-size: 28px;
    }
  }
`;

const BenefBtn = styled.a`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;

  text-decoration: none;
  cursor: pointer;
  width: 240px;
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
    filter 500ms ease;
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

  &:hover {
    background-color: #000;
    .link-text {
      color: #ffffff;
    }
    .arrow-right-black {
      color: #ffffff;
      fill: currentColor;
    }
    svg path {
      fill: #fff;
    }
  }
`;

export function Page4() {
  const [active, setActive] = useState(Page4Datas[0].img);
  return (
    <Layout8>
      <Container>
        <LeftContent>
          <Title>
            <div className="subheading">BENEFITS</div>
            <h2 className="heading">Peace of mind included.</h2>
          </Title>
          {Page4Datas.map((values) => (
            <NavCard
              title={values.title}
              desc={values.desc}
              submit={() => setActive(values.img)}
              opacity={values ? true : false}
              key={values.id}
            />
          ))}
          <BenefBtn>
            <p className="link-text">SEE ALL BENEFITS</p>
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              className="arrow-right-black"
            >
              <path
                d="M214.783 343L216.071 341.614 213.443 338.964 220 338.964 220 337.036 213.443 337.036 216.071 334.386 214.783 333 210 338z"
                transform="matrix(-1 0 0 1 220 -333)"
                fill="#000"
              />
            </svg>
          </BenefBtn>
        </LeftContent>
        <RightContent>
          <img src={active} />
        </RightContent>
      </Container>
    </Layout8>
  );
}
