import { CardContent } from "@/components/CardContent";
import { ContainerPh } from "@/components/Container";

import styled from "styled-components";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 100px;
  .kkk {
    display: flex;
    .imgg {
      position: absolute;
      z-index: 1;
      display: flex;
      margin-top: 0px;
      width: 357px;
      height: 733px;
    }
  }
  .video {
    position: absolute;

    overflow: visible;
    width: 350px;
    height: 728px;

    padding-bottom: 0px;
    -o-object-fit: contain;
    object-fit: contain;

    video {
      background-size: cover;
      background-position: 50% 50%;
      position: absolute;
      margin: auto;
      width: 100%;
      height: 100%;
      right: -100%;
      bottom: -100%;
      top: -100%;
      left: -100%;
      object-fit: cover;
      z-index: -100;
    }
  }
  h3 {
    margin-bottom: 10px;
    color: white;
    font-size: 1.125em;
    line-height: 1.222em;
    font-weight: 600;
    text-transform: uppercase;
  }
  h2 {
    margin-bottom: 20px;
    font-family: "Sequel Sans (Display)", sans-serif;
    color: white;
    font-size: 3.75em;
    line-height: 1.185em;
    font-weight: 500;
  }
`;
const LeftContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    max-width: 530px;
    color: white;
    font-size: 1.5em;
    line-height: 1.15em;
    font-weight: 400;
    margin-bottom: 10px;
  }
`;
export const PhonePage = ({
  title,
  header,
  Img,
  Description,
  Video,
}: {
  title: string;
  header: string;
  Description: string;
  Img: any;
  Video?: string;
}) => {
  return (
    <ContainerPh>
      <CardContent>
        <Grid container>
          <Grid item xs={12} md={6}>
            <div>
              <h3>{title}</h3>
            </div>
            <div>
              <h2>{header}</h2>
            </div>
            <div className="kkk">
              <div className="imgg" data-aos="fade-up">
                {<Img />}
                <div className="video">
                  <video autoPlay loop muted playsInline>
                    <source src={Video} />
                  </video>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <LeftContainer>
              <p>{Description}</p>
            </LeftContainer>
          </Grid>
        </Grid>
      </CardContent>
    </ContainerPh>
  );
};
