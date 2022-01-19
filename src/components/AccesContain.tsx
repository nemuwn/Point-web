import styled from "styled-components";
const AccesDatas = styled.div`
  color: white;
  display: flex;
  width: 100%;
  .subAccess {
    display: flex;
    width: 100%;
    height: 60px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 10px;
    justify-content: space-between;
    border-style: solid;
    border-width: 1px;
    border-color: hsla(0, 0%, 100%, 0.2) #000 #000;
  }
  .leftcontainer {
    display: flex;

    width: auto;
    justify-content: flex-start;
    p {
      padding-left: 6vw;
    }
  }
  img {
    max-width: 31px;
    min-width: 31px;
  }
`;
export const AccessContain = ({
  img,
  text,
  sizeText,
}: {
  img: string;
  text: string;
  sizeText: string;
}) => {
  return (
    <AccesDatas>
      <div className="subAccess">
        <div className="leftcontainer">
          <img src={img} alt={text} />
          <p>{text}</p>
        </div>
        <div></div>
        <div className="rightcontainer">
          <p>{sizeText}</p>
        </div>
      </div>
    </AccesDatas>
  );
};
