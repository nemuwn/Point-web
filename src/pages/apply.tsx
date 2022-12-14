import type { NextPage } from "next";
import { ApplyTopContainer } from "@/components/Container";
import { Container, Grid } from "@mui/material";
import { ApplyCard } from "@/components/Card";
import styled from "styled-components";
import ApplyWidget from "@/widgets/apply/index";

const Layout = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
  z-index: 1;

  @media (max-width: 899px) {
    .mui {
      padding: 0px 0px;
    }
    .text h1 {
      font-size: 45px;
      margin: auto;
    }
    .bannerimg {
      padding-left: 25px;
    }
  }
`;

const RightContent = styled.div`
  padding-top: 140px;
  padding-bottom: 100px;
  padding-left: 5vw;

  h2 {
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 20px;
  }

  @media (max-width: 899px) {
    padding: 100px 25px;
  }
`;

const Text = styled.div`
  padding-right: 50px;
  @media (max-width: 899px) {
    padding: 0px 25px;
  }
`;

const InnerBG = styled.div`
  z-index: -1;
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  width: 50%;
  height: 100%;
  margin-left: auto;
  background-color: #fff;
  @media (max-width: 899px) {
    display: none;
  }
`;

export const SubmitBtn = styled.div`
  input {
    cursor: pointer;
    font-size: 12px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.15rem;

    width: 80%;
    min-height: 46px;
    margin-top: 24px;
    padding: 10px 15px;

    border-radius: 32px;
    border-width: 1px;
    color: #ffffff;
    background-color: #000000;
    border-color: #000000;
    transition: all 0.5s;
  }
  input:hover {
    background-color: #ffffff;
    border-color: #000000;
    color: #000000;
  }
  @media (max-width: 899px) {
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
  }
`;

const Apply: NextPage = () => {
  return (
    <Layout>
      <Container className="mui">
        <Grid container position="relative">
          <Grid item md={6} sm={12}>
            <ApplyTopContainer>
              <div className="text">
                <h1>Yours by design.</h1>
              </div>
              <div className="bannerimg">
                <img
                  src="https://assets-global.website-files.com/5ee7f9eb35bb1852519f534e/61bcf3109a5ae935b254892e_1683_TITAN_WEB-READY(PP_T-1_Cropped).jpg"
                  alt=""
                />
              </div>
              <Text>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <ApplyCard>
                      <p>
                        Here it is. The most modern payment card in the history
                        of the world, the first of its kind. PointCard??? Titan is
                        designed to balance style and performance. With an
                        unparalleled form factor, its underlying technology is
                        built to align incentives for card and cardholder alike
                        ??? the way your card should be.
                      </p>
                    </ApplyCard>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <ApplyCard>
                      <p>
                        The world is at your fingertips, with rewards configured
                        by you, no arbitrary limits or interest, unlimited
                        custom cards for your privacy, complete control over
                        your spending, and benefits that keep up with you. This
                        is not an arrival. It's only the beginning. The next
                        generation of payments for the new economy, starting
                        with you.
                      </p>
                    </ApplyCard>
                  </Grid>
                </Grid>
              </Text>
            </ApplyTopContainer>
          </Grid>
          <Grid item md={6} sm={12} bgcolor="#fff">
            <RightContent>
              <h2>????????????????</h2>
              <ApplyWidget />
            </RightContent>
          </Grid>
        </Grid>
      </Container>
      <InnerBG />
    </Layout>
  );
};
export default Apply;
