import { CardSubContainer } from "@/components/CardContent";
import { Container as Layout } from "@/components/Container";
import styled from "styled-components";
import { accessDatas } from "@/utils/datas";
import { AccessContain } from "@/components/AccesContain";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
const Image = styled.img`
  height: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 100px;
  z-index: 0;
  transition: all 1s ease-out;
  @media (max-width: 900px) {
    position: relative;
    width: 100%;
    top: 0px;
    height: auto;
    object-position: 50px 60px;
    object-fit: contain;
  }
`;
const TopText = styled.div`
  .SubContain {
    padding: 100px 0px;
  }
  .footertext {
    font-weight: 500;
    font-size: 0.625em;
    line-height: 1.2em;
    width: 310px;
  }
  flex-direction: column;
  .access {
    color: white;
    font-weight: 600;
    margin-bottom: 10px;
  }
  h1 {
    color: white;
    font-weight: 500;
    margin-bottom: 20px;
    line-height: 1.1833333333333333em;
    font-size: 3.75em;
  }
  .enjoy {
    font-size: 1.125em;
    line-height: 1.23em;
    width: 330px;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 899px) {
    width: 100%;
    height: auto;
    h1 {
      margin-bottom: 0px;
      font-size: 28px;
    }
    .access {
      margin-bottom: 0px;
      font-size: 15px;
      font-weight: 400;
    }
    .enjoy {
      margin-top: 10px;
      font-size: 15px;
      font-weight: 400;
    }
    .SubContain {
      padding: 0;
    }
    .footertext {
      font-size: 15px;
      font-weight: 400;
      padding-right: 10px;
    }
  }
`;
export const Access = () => {
  return (
    <Layout>
      <Container>
        <TopText>
          <Grid container alignItems="center" spacing={3}>
            <Grid item xs={12} md={6}>
              <div className="access">ACCESS</div>
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
                    key={data.id}
                  />
                ))}
              </div>
              <p className="footertext">
                'Access offers are subject to change. Points are redeemable for
                cash instantly. Points never expire. There is no cap. 1 point =
                $0.01.
              </p>
            </Grid>
            <Grid item xs={12} md={6}>
              <Image src="https://assets-global.website-files.com/5ee7f9eb35bb1852519f534e/615cb1802d0abee19ba1da5e_AccessUI_LLAmazonWF_P3_100521.jpg" />
            </Grid>
          </Grid>
        </TopText>
      </Container>
    </Layout>
  );
};
