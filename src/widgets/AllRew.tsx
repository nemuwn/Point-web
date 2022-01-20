import { Container } from "@mui/material";
import styled from "styled-components";

const Layout = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 1024px;
  flex-direction: row;
  align-items: center;
  background-color: #e3e3e3;
  z-index: 1;
  @media (max-width: 899px) {
    height: 100%;
    padding: 100px 0px;
  }
`;

const CardCont = styled.div`
  position: relative;
  width: 100%;
  justify-content: center;

  h3 {
    margin-bottom: 10px;
    color: #000;
    font-size: 1.125em;
    line-height: 1.222em;
    font-weight: 600;
    text-transform: uppercase;
  }
  h2 {
    width: auto;
    margin-top: 0px;
    margin-bottom: 20px;
    color: #000;
    font-size: 6.875em;
    line-height: 1em;
    font-weight: 400;
    span {
      color: rgba(0, 0, 0, 0.6);
    }
  }
  .desc {
    width: 500px;
    p {
      width: 100%;
      max-width: 405px;
      margin-bottom: 10px;
      font-family: "Sequel Sans (Display)", sans-serif;
      color: rgba(0, 0, 0, 0.5);
      font-size: 1.125em;
      line-height: 1.23em;
      font-weight: 400;
      text-decoration: none;
    }
  }

  @media (max-width: 899px) {
    width: 90%;
    margin: auto;
    height: 100%;
    padding: 0px;
    align-items: center;
    h3 {
      font-size: 0.937em;
    }
    h2 {
      font-size: 3.5em;
      line-height: 1.1865em;
    }
    .desc {
      width: auto;

      p {
        margin-bottom: 0px;
        font-size: 1em;
        line-height: 1.187em;
      }
    }
  }
`;

export function AllRew() {
  return (
    <Layout>
      <Container>
        <CardCont>
          <h3>MEMBERSHIP</h3>
          <h2>
            All rewards. <br />
            <span>All benefits.</span>
          </h2>
          <div className="desc">
            <p>
              Point membership pays for itself and then some. See the benefits
              you receive when you join.
            </p>
          </div>
        </CardCont>
      </Container>
    </Layout>
  );
}
