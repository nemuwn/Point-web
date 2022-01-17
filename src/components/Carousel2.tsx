import styled from "styled-components";
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 2560px;
  img {
    position: relative;
    -webkit-transform: translate(15%, 0px);
    -ms-transform: translate(15%, 0px);
    transform: translate(15%, 0px);
    -o-object-position: 50% 50%;
    object-position: 50% 50%;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;
export const CarouselImage2 = ({ imgpath }: { imgpath: string }) => {
  return (
    <ImageContainer>
      <img src={imgpath} alt="aa" />
    </ImageContainer>
  );
};
