import { Container2 } from "@/components/Container";
import { CardContent2 } from "@/components/CardContent";
import type { NextPage } from "next";
import { ApplyTopContainer } from "@/components/Container";
import { Grid } from "@mui/material";
import { ApplyCard } from "@/components/Card";
const Apply: NextPage = () => {
  return (
    <Container2 bgColor="#fff">
      <CardContent2>
        <Grid container spacing={3}>
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
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <ApplyCard>
                    <p>
                      Here it is. The most modern payment card in the history of
                      the world, the first of its kind. PointCard™ Titan is
                      designed to balance style and performance. With an
                      unparalleled form factor, its underlying technology is
                      built to align incentives for card and cardholder alike —
                      the way your card should be.
                    </p>
                  </ApplyCard>
                </Grid>
                <Grid item md={6} xs={12}>
                  <ApplyCard>
                    <p>
                      The world is at your fingertips, with rewards configured
                      by you, no arbitrary limits or interest, unlimited custom
                      cards for your privacy, complete control over your
                      spending, and benefits that keep up with you. This is not
                      an arrival. It's only the beginning. The next generation
                      of payments for the new economy, starting with you.
                    </p>
                  </ApplyCard>
                </Grid>
              </Grid>
            </ApplyTopContainer>
          </Grid>
          <Grid item md={6} sm={12}>
            <h1>lol</h1>
          </Grid>
        </Grid>
      </CardContent2>
    </Container2>
  );
};
export default Apply;
