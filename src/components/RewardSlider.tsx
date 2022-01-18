import styled from "styled-components";
import { CardContent2 } from "@/components/CardContent";

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
    max-width: 500px;
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
  }
`;

export const RewardSlider = ({
  title,
  description,
  img,
}: {
  title: string;
  description: string;
  img: string;
}) => {
  return (
    <>
      <CardContent2>
        <CardContentDesc>
          <div className="subheading">Rewards</div>
          <h2>{title}</h2>
          <div className="desc">
            <p>{description}</p>
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
      <img src={img} height="" alt="A woman" className="tab-image" />
    </>
  );
};