import styled from "styled-components";

const LearnMoreBtn = styled.div<{
  borderColor: string;
  backgroundColor: string;
  textColor: string;
}>`
  z-index: 99;
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    text-decoration: none;
    cursor: pointer;
    width: 100%;
    z-index: 1;
    height: 60px;
    margin-right: 0px;
    margin-bottom: 30px;
    margin-top: 30px;
    align-items: center;
    border-color: ${(props) => props.borderColor};
    border: 1px solid;
    border-radius: 10px;
    background-color: ${(props) => props.backgroundColor};

    transition: border-color 500ms ease, background-color 500ms ease,
      filter 500ms ease, -webkit-filter 500ms ease;
    .link-text {
      margin-top: 8px;
      margin-bottom: 8px;
      color: ${(props) => props.textColor};
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
    background-color: #fff;
    .link-text {
      color: #000;
    }
    svg path {
      fill: #000;
    }
  }
`;

export const ApplyButton = ({
  backgroundColor,
  borderColor,
  textColor,
  text,
}: {
  backgroundColor: string;
  borderColor: string;
  textColor: string;
  text: string;
}) => {
  return (
    <LearnMoreBtn
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      textColor={textColor}
    >
      <a href="#Benefits" className="learn-more">
        <p className="link-text">{text}</p>
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          className="svgimg"
        >
          <path
            d="M214.783 343L216.071 341.614 213.443 338.964 220 338.964 220 337.036 213.443 337.036 216.071 334.386 214.783 333 210 338z"
            transform="matrix(-1 0 0 1 220 -333)"
            fill="#fff"
          />
        </svg>
      </a>
    </LearnMoreBtn>
  );
};
