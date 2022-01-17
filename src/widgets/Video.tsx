import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Videocont = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: 1;
  display: block;
`;
const HomeVideo = styled.div`
  video {
    height: 100vh;
    min-height: 56.25vw;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const MemberContainer = styled.div`
  position: absolute;
  left: 0%;
  top: auto;
  right: 0%;
  bottom: 0%;
  z-index: 6;
  display: flex;
  overflow: visible;
  width: auto;
  height: 30vh;
  max-height: 164px;
  max-width: 100%;
  min-height: 164px;
  padding-bottom: 10px;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  backdrop-filter: blur(60px);
  background-color: hsla(0, 0%, 87.5%, 0.6);
  opacity: 1;
`;
const MemberContent = styled.div`
  position: static;
  left: 0%;
  top: auto;
  right: 0%;
  bottom: 0%;
  display: flex;
  overflow: visible;
  width: 85%;
  height: 42%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 0px;

  justify-content: space-between;
  align-items: center;
  align-self: center;

  .mTitle {
    display: flex;
    margin-right: 1px;
    align-self: center;
  }
  .h-mTitle {
    margin-top: 0px;
    font-family: "Sequel Sans (Display)", sans-serif;
    font-size: 3.58em;
    line-height: 1;
    font-weight: 400;
    color: #000000;
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
  /* .background-clip {
    position: relative;
    z-index: 1;
    background-image: linear-gradient(
      90deg,
      #faff2e,
      #faff2e 10%,
      #ff7142 30%,
      #ff7142 40%,
      #ff73af 60%,
      #ff73af 70%,
      #00afff 90%,
      #00afff 104%
    );
  } */

  .mDesc {
    display: flex;
    width: auto;
    height: 100%;
    max-width: 50ch;
    margin-right: 20px;
    margin-left: 20px;
    align-items: center;
    justify-content: center;

    p {
      color: rgba(0, 0, 0, 0.5);
      font-size: 1rem;
      line-height: 1.35;
    }
  }
`;

const LearnMoreBtn = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    text-decoration: none;
    cursor: pointer;
    width: 180px;
    height: 60px;

    margin-right: 0px;
    margin-bottom: 30px;
    margin-top: 30px;
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
  }
  a:hover {
    background-color: transparent;

    .link-text {
      color: #000000;
    }
  }
`;

export function Video() {
  return (
    <>
      <Videocont>
        <MemberContainer>
          <MemberContent>
            <div className="mTitle">
              <h1 className="h-mTitle">PointCard™</h1>
              <div className="h-mTitle-wrap">
                <div className="h-mTitle background-clip ">Neon</div>
              </div>
            </div>

            <div className="mDesc">
              <p>
                Made to spend. Unlimited cash-back, exclusive rewards &amp;
                comprehensive benefits. Become a member for $99/yr.
                <br />
              </p>
            </div>

            <LearnMoreBtn>
              <a
                href="/apply"
                className="learn-more-link lean-more-link--card ctabutton-2 w-inline-block"
              >
                <p className="link-text">Apply</p>
                <img
                  src="https://assets-global.website-files.com/5ee7f9eb35bb1852519f534e/5ee8230aa2c66311cab3d242_copy.svg"
                  alt=""
                  className="arrow-right-black"
                />
              </a>
            </LearnMoreBtn>
          </MemberContent>
        </MemberContainer>
        <HomeVideo>
          <video
            loop
            autoPlay
            muted
            id="hero"
            poster="https://d2r6iglqr5ha6g.cloudfront.net/web/video/main/neon/pc_neon_launch_first_frame_still.jpg?dl=1"
          >
            <source src="https://d2r6iglqr5ha6g.cloudfront.net/web/video/main/neon/PointCard_Neon_Launch_Web_Edition.mp4?raw=1" />
          </video>
        </HomeVideo>
      </Videocont>
    </>
  );
}
