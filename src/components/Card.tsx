import styled from "styled-components";

export const ApplyCard = styled.div`
  p {
    color: rgba(0, 0, 0, 0.4);
    font-size: 0.89rem;
    line-height: 1.3;
    font-weight: 400;
    margin-bottom: 10px;
    text-align: left;
  }
`;

const CardStyled = styled.div<{ opacity: number }>`
  width: 100%;
  display: flex;
  background-color: transparent;
  color: white;
  flex-direction: column;
  border-left: 1px solid ${(props) => (props.opacity ? "#fff" : "#222222")};
  padding: 2px 30px 9px;
  z-index: 1;
  opacity: ${(props) => props.opacity};
  :hover {
    opacity: 1;
    cursor: pointer;
  }
  transition: 0.3s;
  h2 {
    margin-bottom: 30px;
    font-size: 2.6875em;
    line-height: 1.18em;
  }
  #text {
    font-size: 1.125em;
    margin: 10px 0px;
    line-height: 1.1666666666666667em;
    font-weight: 400;
    color: #75787b;
    max-width: 35ch;
  }
  #2ndp {
    font-size: 1em;
    cursor: pointer;
  }
  img {
    margin-top: 1px;
    margin-left: 5px;
    -webkit-filter: invert(100%);
    filter: invert(100%);
  }
  #learndiv {
    display: flex;
    margin: 12px 0px 50px;
  }
  @media (max-width: 899px) {
    border-left: 0;
    border-top: 1px solid ${(props) => (props.opacity ? "#fff" : "#222222")};
    padding: 20px 10px 0 0;
    h2 {
      font-size: 22px;
    }
    #text {
      display: none;
    }
    #learndiv {
      display: none;
    }
  }
`;
export const Card = ({
  title,
  text,
  opacity,
  submit,
}: {
  title: string;
  text: string;
  opacity: boolean;
  submit: () => void;
}) => {
  return (
    <CardStyled onClick={submit} opacity={opacity ? 1 : 0.5}>
      <h2>{title}</h2>
      <p id="text">{text}</p>
      <div id="learndiv">
        <a id="2ndp">LEARN MORE</a>
        <img
          src="https://assets-global.website-files.com/5ee7f9eb35bb1852519f534e/5ee8230aa2c66311cab3d242_copy.svg"
          alt=""
        />
      </div>
    </CardStyled>
  );
};
