import { Container, Grid } from "@mui/material";
import styled from "styled-components";

const Layout = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: 1;
  display: block;
  @media (max-width: 899px) {
    position: relative;
    min-height: auto;
    max-width: auto;
    width: 100%;
    height: auto;
  }
`;
const HomeVideo = styled.video`
  height: 100vh;
  width: 100%;
  object-fit: cover;
  @media (max-width: 899px) {
    height: 100vh;
  }
`;

const BottomLayout = styled.div`
  position: absolute;
  left: 0%;
  top: auto;
  right: 0%;
  bottom: 0%;
  z-index: 6;
  backdrop-filter: blur(60px);
  background-color: hsla(0, 0%, 87.5%, 0.6);
  opacity: 1;
  padding: 60px 0;
  @media (max-width: 899px) {
    padding: 30px 0;
  }
  .mTitle {
    display: flex;
    margin-right: 1px;
    align-self: center;
  }
  .h-mTitle {
    margin-top: 0px;
    font-size: 3.58em;
    line-height: 1;
    font-weight: 400;
    color: #000000;
    @media (max-width: 899px) {
      font-size: 22px;
    }
  }
  .h-mTitle-wrap {
    position: relative;
    overflow: hidden;
    padding-left: 5px;
  }
  .background-clip {
    background-size: 800%;
    background-position: 0% 0%;
    animation: animatedBg 40s ease-in-out infinite;
    animation-direction: alternate-reverse;
    animation-delay: 2s;
  }
  .mDesc {
    width: auto;
    height: 100%;
    margin-right: 20px;
    margin-left: 20px;
    color: rgba(0, 0, 0, 0.5);
    font-size: 1.3em;
    line-height: 1.35;
    @media (max-width: 899px) {
      margin: 0;
      font-size: 15px;
    }
  }
`;

const LearnMoreBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  text-decoration: none;
  cursor: pointer;
  width: 180px;
  height: 60px;

  align-items: center;
  background-color: #000;
  border: 1px solid #000;
  border-radius: 10px;

  transition: border-color 500ms ease, background-color 500ms ease,
    filter 500ms ease, -webkit-filter 500ms ease;
  .link-text {
    margin-top: 8px;
    margin-bottom: 8px;
    color: #ffffff;
    fill: #ffffff;
    font-size: 0.75em;
    line-height: 1.166em;
    font-weight: 600;
    text-transform: uppercase;
  }
  .arrow-right-black {
    margin-left: 41px;
    padding-top: 0.5px;
  }
  &:hover {
    background-color: transparent;
    svg path {
      fill: #000;
    }
    .link-text {
      color: #000000;
    }
  }
`;

export function Video() {
  return (
    <Layout>
      <BottomLayout>
        <Container maxWidth="xl">
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={5}>
              <div className="mTitle">
                <h1 className="h-mTitle">PointCard™</h1>
                <div className="h-mTitle-wrap">
                  <div className="h-mTitle background-clip ">Neon</div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={5}>
              <div className="mDesc">
                Mobile banking made modern — simple and designed for you.
                Starting at $9.99/month.
                <br />
              </div>
            </Grid>

            <Grid item xs={12} md={2}>
              <LearnMoreBtn href="/apply">
                <p className="link-text">Apply</p>
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  className="svgimg"
                >
                  <path
                    d="M214.783 343L216.071 341.614 213.443 338.964 220 338.964 220 337.036 213.443 337.036 216.071 334.386 214.783 333 210 338z"
                    transform="matrix(-1 0 0 1 220 -333)"
                    fill="#fff"
                  />
                </svg>
              </LearnMoreBtn>
            </Grid>
          </Grid>
        </Container>
      </BottomLayout>
      <HomeVideo
        loop
        autoPlay
        muted
        id="hero"
        poster="https://d2r6iglqr5ha6g.cloudfront.net/web/video/main/neon/pc_neon_launch_first_frame_still.jpg?dl=1"
      >
        <source src="https://d2r6iglqr5ha6g.cloudfront.net/web/video/main/neon/PointCard_Neon_Launch_Web_Edition.mp4?raw=1" />
      </HomeVideo>
    </Layout>
  );
}
