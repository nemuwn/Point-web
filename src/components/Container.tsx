import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  display: flex;
  overflow: hidden;
  width: 100%;
  height: 1024px;
  padding-top: 100px;

  flex-direction: row;
  @media (max-width: 900px) {
    width: 100vh;
  }
  justify-content: center;

  align-items: center;
  background-color: #000;
  z-index: 1;
`;

export const Container2 = styled.div<{ bgColor: string }>`
  position: relative;

  display: flex;
  overflow: hidden;
  width: 100%;
  height: 1024px;
  padding-top: 100px;
  flex-direction: column;
  /* background-color: ${(props) => props.bgColor}; */

  background-image: url(${(props) => props.bgColor});
  background-size: 100%;
  transition: background-image 0.2s ease-in-out;
  background-repeat: no-repeat, repeat;
  text-align: center;
  z-index: 1;
`;

export const Container3 = styled.div`
  position: relative;

  display: flex;
  overflow: hidden;
  width: 100%;
  height: 1024px;
  padding-top: 100px;

  flex-direction: row;

  justify-content: center;

  align-items: center;
  background-color: #fff;
  z-index: 1;
`;
export const Container4 = styled.div`
  position: relative;

  display: flex;
  overflow: hidden;
  width: 100%;
  height: 1024px;

  flex-direction: row;

  justify-content: center;

  background-color: #f8f8f8;
  z-index: 1;
`;

export const Container6 = styled.div`
  position: relative;

  display: flex;
  overflow: hidden;
  width: 100%;
  height: 1024px;
  padding-top: 100px;
  flex-direction: column;

  background-size: 100%;

  z-index: 1;
`;

export const Container7 = styled.div`
  position: relative;
  background-color: #fff;
  z-index: 99;
`;

export const Container8 = styled.div`
  position: relative;

  display: flex;
  overflow: hidden;
  width: 100%;
  height: 1024px;

  flex-direction: row;

  justify-content: center;

  background-color: #fff;
  z-index: 1;
`;

export const SwitchButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 17.68px;
  justify-content: center;
`;
export const ContainerSub2 = styled.div`
  display: flex;
`;

export const FixedContainer = styled.div`
  position: fixed;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  background-color: #000;
  overflow: hidden;
  z-index: 30;
`;

export const ApplyTopContainer = styled.div`
  justify-items: left;
  justify-content: flex-start;
  .text {
    display: flex;
    h1 {
      color: #000;
      font-size: 62px;
      line-height: 1;
      font-weight: 300;
    }
  }
  .bannerimg {
    margin-top: 100px;
    margin-bottom: 100px;
    img {
      width: 100%;
      margin-top: 32px;
      margin-bottom: 16px;
    }
  }
`;

export const ContainerPh = styled.div`
  position: relative;
  border-bottom: 1px solid #222222;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 1024px;
  padding-top: 100px;

  flex-direction: row;

  justify-content: center;

  align-items: center;
  background-color: #000;
  z-index: 1;
`;
