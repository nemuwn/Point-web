import { CardContent, CardSubContainer } from "@/components/CardContent";
import { Container } from "@/components/Container";
import styled from "styled-components";
import { accessDatas } from "@/utils/datas";
import { AccessContain } from "@/components/AccesContain";
const Image = styled.img`
  height: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 100px;
  z-index: 0;
  -webkit-transition: all 1s ease-out;
  -moz-transition: all 1s ease-out;
  -o-transition: all 1s ease-out;
  -ms-transition: all 1s ease-out;
  transition: all 1s ease-out;
  @media (max-width: 900px) {
    position: relative;
    width: 100%;
  }
`;

export const Access = () => {
  return (
    <Container>
      <CardContent>
        <CardSubContainer>
          <p className="access">ACCESS</p>
          <h1>Elavete your spend.</h1>
          <p className="enjoy">
            Enjoy limited-time offers from a revolving selection of curated
            brands you’ll love.*
          </p>
          <div className="SubContain">
            {accessDatas.map((data) => (
              <AccessContain
                img={data.img}
                text={data.text}
                sizeText={data.sizeText}
              />
            ))}
          </div>
          <p className="footertext">
            'Access offers are subject to change. Points are redeemable for cash
            instantly. Points never expire. There is no cap. 1 point = $0.01.
          </p>
        </CardSubContainer>
      </CardContent>
      <Image src="https://assets-global.website-files.com/5ee7f9eb35bb1852519f534e/615cb1802d0abee19ba1da5e_AccessUI_LLAmazonWF_P3_100521.jpg" />
    </Container>
  );
};
