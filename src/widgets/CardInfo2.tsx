import styled from "styled-components";
import { Card } from "@/components/Card";
import { cardDatas } from "@/utils/datas";
import { useState } from "react";

import { ApplyButton } from "@/components/LearnMoreBtn";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";

const Layout = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  margin-top: 100vh;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #000;
  z-index: 1;
  @media (max-width: 899px) {
    width: 100%;
    margin-top: 0;
    display: block;
    height: auto;
    padding: 100px 0;
  }
`;

const CarouselImage = styled.img`
  width: 100%;
  position: relative;
  top: 120px;
  @media (max-width: 899px) {
    top: 0;
  }
`;
const SubHeader = styled.div`
  color: white;
  margin-bottom: 60px;
  font-size: 1.125em;
  line-height: 1.222em;
  font-weight: 600;
  text-transform: uppercase;
`;
const MobileDescription = styled.div`
  display: none;
  @media (max-width: 899px) {
    display: block;
  }
`;

export const Cardinfo = () => {
  const [active, setActive] = useState(cardDatas[0].imagePath);

  return (
    <Layout>
      <Container>
        <Grid container alignItems="center" spacing={3}>
          <Grid item xs={12} md={7}>
            <SubHeader></SubHeader>
            <Grid container>
              {cardDatas.map((values) => (
                <Grid item xs={6} md={12} data-aos="fade-up" key={values.id}>
                  <Card
                    title={values.title}
                    text={values.description}
                    submit={() => setActive(values.imagePath)}
                    opacity={values.imagePath === active ? true : false}
                  />
                </Grid>
              ))}
              <Grid item xs={12} md={4} position="relative">
                <ApplyButton
                  backgroundColor="transparent"
                  borderColor="#fff"
                  text="APPLY"
                  textColor="#fff"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} overflow="hidden">
            <CarouselImage src={active} />
          </Grid>
          <Grid item xs={12}>
            <MobileDescription>
              {cardDatas.find((el) => el.imagePath === active)?.description}
            </MobileDescription>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
