import styled from "styled-components";
import React, { Component, useState } from "react";
import { RewardSlider } from "@/components/RewardSlider";
import { RewardDatas } from "@/utils/datas";
import { Container, Grid } from "@mui/material";

const Layout = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  z-index: 1;

  @media (max-width: 899px) {
    width: 100%;
    display: block;
    height: auto;
  }
`;

const Slider = styled.div`
  text-align: left;
  position: static;
  display: block;
  height: 1024px;
  justify-content: space-around;

  .tab-image {
    object-fit: cover;
    object-position: 60% 50%;
    position: static;
    left: 0px;
    display: block;
    width: 100%;
    height: 1024px;
    max-width: none;
  }
  .slide {
    transition-duration: 1s ease;
    opacity: 0;
  }
  .slide.active {
    opacity: 1;
    transition-duration: 1s;
  }

  @media (max-width: 899px) {
    height: 100%;
    .tab-image {
      object-position: 46% 50%;
    }
  }
`;

export const Bullet = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 10px;
  width: 80px;
  height: 80px;

  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 100px;

  h3 {
    font-size: 1.5em;
    line-height: 1.208em;
    font-weight: 600;
  }
  &:hover {
    background-color: #000;
    h3 {
      color: #ffffff;
    }
    transition: color 500ms ease;
    transition: background-color 500ms ease;
  }

  @media (max-width: 899px) {
    width: 60px;
    height: 60px;
  }
`;

export const CarouselBtn = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 800px;
  z-index: 20;
  width: 100%;
  justify-content: center;

  .cBtns {
    width: 85%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;

    .indicat {
      display: flex;
    }
    .arrows {
      display: flex;
    }
    .sArrow {
      border-color: #fff;
      background-color: rgba(0, 0, 0, 0.4);
      opacity: 1;
      &:hover {
        filter: invert(100%);
        transition: filter 500ms ease, -webkit-filter 500ms ease;
      }
    }
    .arrLeft {
      transform: rotate(-180deg);
    }
  }

  @media (max-width: 899px) {
    .cBtns {
      justify-content: center;
    }
    .indicat {
      padding-top: 40px;
      padding-bottom: 40px;
      align-items: center;
    }
    .sArrow {
      display: none;
    }
    .cBtns.arrows {
      display: none;
      margin-left: 0;
    }
  }
`;

export function Rewards({ slides }: { slides: any }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const moveDot = (index: number) => {
    setCurrent(index);
  };

  return (
    <Layout>
      <Slider>
        {RewardDatas.map((values, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <RewardSlider
                  title={values.title}
                  description={values.description}
                  img={values.img}
                  key={index}
                />
              )}
            </div>
          );
        })}
      </Slider>
      <CarouselBtn>
        <div className="cBtns">
          <div className="indicat" data-aos="fade-right">
            {RewardDatas.map((values, index) => (
              <Bullet
                onClick={() => moveDot(index)}
                key={index}
                className={current === index + 1 ? "dot active" : "dot"}
              >
                <h3>{values.btn}</h3>
              </Bullet>
            ))}
          </div>
          <div className="arrows" data-aos="fade-left">
            <Bullet className="sArrow arrLeft" onClick={prevSlide}>
              <img src="MediumArrow.svg" />
            </Bullet>
            <Bullet className="sArrow arrRight" onClick={nextSlide}>
              <img src="MediumArrow.svg" />
            </Bullet>
          </div>
        </div>
      </CarouselBtn>
    </Layout>
  );
}
