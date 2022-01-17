import styled from "styled-components";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Container } from "@/components/Container";
import { CardContent2 } from "@/components/CardContent";
import { ApplyButton } from "@/components/LearnMoreBtn";
import { PrevBtn, NexBtn } from "@/components/Button";
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
    height: 100%;
    max-width: none;
  }
`;

// const CardContent = styled.div`
//   position: absolute;
//   left: 0%;
//   top: 0px;
//   right: 0%;
//   bottom: auto;
//   display: flex;
//   width: 85%;
//   height: auto;
//   max-width: 1200px;
//   margin: auto;
//   justify-content: flex-start;
//   align-items: flex-start;
// `;

const CardContentDesc = styled.div`
  position: relative;
  z-index: 2;
  display: block;
  width: auto;
  height: auto;
  max-width: 1440px;
  padding-top: 100px;
  flex-direction: column;
  justify-content: flex-start;
  flex: 0 auto;

  .subheading {
    margin-bottom: 10px;
    color: #000;
    font-size: 1.125em;
    line-height: 1.222em;
    font-weight: 600;
    text-transform: uppercase;
  }
  h2 {
    line-height: 1.1833333333333333em;
    font-size: 3.75em;
    margin-top: 0px;
    margin-bottom: 20px;
    font-family: "Sequel Sans (Display)", sans-serif;
    color: #000;
  }
  .desc {
    width: 515px;
    p {
      /* max-width: 47ch; */
      margin-top: 10px;
      font-family: "Sequel Sans (Display)", sans-serif;
      color: #75787b;
      font-size: 1.125em;
      line-height: 1.1666666666666667em;
      font-weight: 400;
      margin-bottom: 10px;
    }
  }
`;

const LearnMoreBtn = styled.div`
  .learn-more {
    display: flex;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
    width: 240px;
    height: 60px;

    margin-right: 0px;
    margin-bottom: 30px;
    margin-top: 30px;
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
    svg {
      color: #ffffff;
      fill: currentColor;
    }
    .svgimg {
      fill: red;
    }
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

export function Rewards() {
  return (
    <>
      <Container>
        <Slider>
          <CardContent2>
            <CardContentDesc>
              <div className="subheading">Rewards</div>
              <h2>
                5x points on <br /> subscriptions
              </h2>
              <div className="desc">
                <p>
                  Earn exceptional rewards, including bonus cash-back on your
                  subscriptions like Netflix, Spotify, HBO Max, Hulu, and more.
                </p>
              </div>
              <LearnMoreBtn>
                <a href="#Benefits" className="learn-more">
                  <p className="link-text">See all the benefits</p>
                  <img src="arrow.svg" alt="" className="arrow-right-black" />
                </a>
              </LearnMoreBtn>

              {/* <ApplyButton
                backgroundColor="transparent"
                borderColor="#fff"
                text="APPLY"
                textColor="#000000"
              /> */}
            </CardContentDesc>
          </CardContent2>
          <img
            src="https://assets-global.website-files.com/5ee7f9eb35bb1852519f534e/618952d55a5afd3e9b617555_1654_subscriptions_P3_wide_2x-76.jpg"
            height=""
            alt="A woman"
            className="tab-image"
          />
        </Slider>
        <CarouselBtn>
          <div className="cBtns">
            <div className="indicat">
              <Bullet className="in1">
                <h3>5X</h3>
              </Bullet>
              <Bullet className="in2">
                <h3>3X</h3>
              </Bullet>
              <Bullet className="in3">
                <h3>1X</h3>
              </Bullet>
            </div>
            <div className="arrows">
              <Bullet className="sArrow arrLeft">
                <img
                  src="https://assets-global.website-files.com/5ee7f9eb35bb1852519f534e/5f318accd2b9306aa790f06e_Medium-Arrow-regular_20x20.svg"
                  alt=""
                />
              </Bullet>
              <Bullet className="sArrow arrRight">
                <img
                  src="https://assets-global.website-files.com/5ee7f9eb35bb1852519f534e/5f318accd2b9306aa790f06e_Medium-Arrow-regular_20x20.svg"
                  alt=""
                />
              </Bullet>
            </div>
          </div>
        </CarouselBtn>
      </Container>
    </>
  );
}
