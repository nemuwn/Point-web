import styled from "styled-components";
export const CarouselBtn3 = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  /* align-items: flex-start; */

  top: 800px;
  z-index: 10;
  width: 100%;
  justify-content: flex-start;

  .cBtns {
    width: 85%;
    max-width: 1200px;
    display: flex;
    justify-content: flex-start;
    .indicat {
      display: flex;
      background-color: white;
      align-items: center;
      border-radius: 44.4px;
      background-color: hsla(0, 0%, 100%, 0.2);
      backdrop-filter: saturate(150%) blur(64.0298px);
    }
  }
`;
const ImageContainer = styled.div`
  max-width: 800px;
  justify-content: flex-start;
  vertical-align: middle;
  transition: opacity 0.4s ease-out;
  -webkit-transition: opacity 0.4s ease-out;
  -moz-transition: opacity 0.4s ease-out;
  -ms-transition: opacity 0.4s ease-out;
  -o-transition: opacity 0.4s ease-out;
  opacity: 0;
  opacity: 1;
  z-index: 9;
  @-webkit-keyframes fade {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    33% {
      opacity: 1;
    }
    53% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes fade {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    33% {
      opacity: 1;
    }
    53% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  .normalimg {
    object-fit: contain;
    position: relative;
    left: 0%;
    display: block;
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin-left: 0%;
    background-color: transparent;
    transition: all 2s;
  }
  .imgbig {
    object-fit: contain;
    position: relative;
    left: 0%;
    display: block;
    width: auto;
    height: 100%;

    max-width: 1200px;
    margin-left: 0%;
    background-color: transparent;
    transition: all 3s ease-in-out;
  }
`;
export const CarouselBtn2 = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  /* align-items: flex-start; */

  top: 800px;
  z-index: 10;
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
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 44.4px;
      justify-content: space-between;
      align-items: center;
      backdrop-filter: saturate(150%) blur(64.0298px);
    }
    .sArrow {
      border-color: #fff;
      background-color: rgba(0, 0, 0, 0.4);
      opacity: 1;
    }
  }
`;

export const CarouselImage = ({ img, big }: { img: string; big: boolean }) => {
  return (
    <ImageContainer>
      <img
        className={big ? "imgbig" : "normalimg"}
        src={img}
        alt="a"
        width={800}
      />
    </ImageContainer>
  );
};
