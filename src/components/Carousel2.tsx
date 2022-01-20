import styled from "styled-components";
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 2560px;
  img {
    position: relative;
    transform: translate(15%, 0px);
    object-position: 50% 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 899px) {
    transform: translate(-15%, -20px);
  }
`;
export const CarouselImage2 = ({ imgpath }: { imgpath: string }) => {
  return (
    <ImageContainer>
      <img src={imgpath} alt="aa" />
    </ImageContainer>
  );
};
