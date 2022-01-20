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
`;

const Text = styled.div`
  padding-right: 50px;
`;

const InnerBG = styled.div`
  z-index: -1;
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  width: 20%;
  height: 100%;
  margin-left: auto;
  background-color: #fff;
  @media (max-width: 899px) {
    display: none;
  }
`;

const Apply: NextPage = () => {
  return (
    <Layout>
      <Container>
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
                        of the world, the first of its kind. PointCard™ Titan is
                        designed to balance style and performance. With an
                        unparalleled form factor, its underlying technology is
                        built to align incentives for card and cardholder alike
                        — the way your card should be.
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
              <h2>Захиалга</h2>
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
