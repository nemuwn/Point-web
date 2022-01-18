import styled from "styled-components";
import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import { Container } from "@/components/Container";
import { CardContent2 } from "@/components/CardContent";
import { ApplyButton } from "@/components/LearnMoreBtn";
import { PrevBtn, NexBtn } from "@/components/Button";
import { RewardSlider } from "@/components/RewardSlider";
import { RewardDatas } from "@/utils/datas";

const Container = styled.div`
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
`;

export const Bullet = styled.div`
  border-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  width: 80px;
  height: 80px;
  justify-content: center;
  margin-right: 10px;

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

  .dot.active {
    background-color: #000;
    h3 {
      color: #ffffff;
    }
  }
`;

export const CarouselBtn = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  /* align-items: flex-start; */
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
      margin-left: 10px;
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
`;

export function Rewards({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const moveDot = (index) => {
    setCurrent(index);
  };
  return (
    <Container>
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
                />
              )}
            </div>
          );
        })}
      </Slider>
      <CarouselBtn>
        <div className="cBtns">
          <div className="indicat">
            {RewardDatas.map((values, index) => (
              <Bullet
                onClick={() => moveDot(index)}
                className={current === index + 1 ? "dot active" : "dot"}
              >
                <h3>{values.btn}</h3>
              </Bullet>
            ))}
            {/* <Bullet>
              <h3>3X</h3>
            </Bullet>
            <Bullet>
              <h3>1X</h3>
            </Bullet> */}
          </div>
          <div className="arrows">
            <Bullet className="sArrow arrLeft" onClick={prevSlide}>
              <img
                src="https://assets-global.website-files.com/5ee7f9eb35bb1852519f534e/5f318accd2b9306aa790f06e_Medium-Arrow-regular_20x20.svg"
                alt=""
              />
            </Bullet>
            <Bullet className="sArrow arrRight" onClick={nextSlide}>
              <img
                src="https://assets-global.website-files.com/5ee7f9eb35bb1852519f534e/5f318accd2b9306aa790f06e_Medium-Arrow-regular_20x20.svg"
                alt=""
              />
            </Bullet>
          </div>
        </div>
      </CarouselBtn>
    </Container>
  );
}
