import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  position: relative;
  width: 100%;
  background-color: #e8e8e8;
  padding: 100px 0;
  z-index: 1;
  p {
    color: #00000060;
    padding: 0 0 30px 0;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 12px;
  }
  span {
    display: inherit;
    font-size: 10px;
    line-height: 12px;
    color: #00000060;
    margin-top: 10px;
  }
  img {
    width: 40px;
  }
  .logo {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    column-gap: 12px;
    font-size: 22px;
    font-weight: bold;
    text-transform: uppercase;
    @media (max-width: 900px) {
      display: none;
    }
  }
  .m_logo {
    display: none;
    align-items: center;
    column-gap: 12px;
    font-size: 22px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 50px;
    @media (max-width: 900px) {
      display: flex;
    }
  }
  @media (max-width: 900px) {
    padding: 50px 0;
    p {
      padding: 0 0 20px 0;
    }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 900px) {
    padding: 0 16px;
  }
`;

export const Footer = () => {
  return (
    <Layout>
      <Container>
        <div className="m_logo">
          <img src="/waves-logo.png" />
          Waves
        </div>
        <Grid container>
          <Grid item xs={6} md={3}>
            <p>Media</p>
            <p>Titan</p>
            <p>INTERSECTION</p>
            <p>ABOUT</p>
            <p>FAQ</p>
          </Grid>
          <Grid item xs={6} md={3}>
            <p>Neon</p>
            <p>contact</p>
            <p>careers</p>
            <p>legal</p>
            <p>privacy policy</p>
          </Grid>
          <Grid item xs={6} md={3}>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
          </Grid>
          <Grid item xs={6} md={3}>
            <div className="logo">
              <img src="/waves-logo.png" />
              Waves
            </div>
          </Grid>
          <Grid xs={12} md={12}>
            <span>
              1. 5x points on subscriptions is applicable for the following
              services: Netflix, Hulu, HBO Max, YouTube Premium, Spotify,
              Pandora, Feather, DoNotPay, and Headspace.
              <br />
              2. 3x points on food delivery and rideshare services is applicable
              for the following services: DoorDash, Uber Eats, Postmates,
              Caviar, GrubHub, Seamless, Instacart, Good Eggs, MTA, Uber, Lyft,
              and Lime.
              <br />
              3. Purchasing goods and services with PointCard, in most cases,
              will earn points, excluding balance transfers, cash-like
              transactions, digital currency purchases, certain gift card
              purchases, and all other forms of manufactured spending.
              <br />
              4. Provides coverage when you charge your monthly phone bill to
              your PointCard and in the event your phone is stolen or damaged
              (including cracked screens), up to $500 per incident, $50
              deductible per loss. A maximum of $1,000 per 12 months.
              <br />
              5. Provides coverage for most new items purchased with PointCard
              that are damaged or stolen within 90 days of the date of purchase,
              up to $1,000 per loss. A maximum pay of $25,000 per 12 months.
              <br />
              6. Doubles manufacturer’s warranty up to one additional year when
              you pay with PointCard. Provides up to $10,000 of coverage per
              claim, and $50,000 per cardholder per year.
              <br />
              7. Protects you against forfeited, non-refundable, unused payments
              if a trip is cancelled or interrupted for covered reasons, up to
              $2,000 per incident. Coverage applies to common carrier airfare.
              <br />
              8. Offers up to $1,000,000 in coverage in case of accidental death
              and dismemberment in the case of common carrier travel (airplane,
              train, airport terminal).
              <br />
              9. Receive emergency roadside assistance, help with lost/stolen
              documents, and access to a global network of lawyers, physicians,
              embassies, and consulates when you travel.
              <br />
              10. Pays for physical damage and theft to most rental vehicles
              when you pay for the entire rental transaction with PointCard and
              decline the Collision Damage/Loss Damage Waiver coverage offered
              by the car rental company.
              <br />
              11. Provides up to $300,000 in accident, death & dismemberment
              coverage, as well as up to $500 in personal property coverage.
              <br />
              12. Offers up to $500 insurance coverage per ticket and up to
              $2,000 per event.
              <br />
              13. Located in Point app, your virtual card has its very own
              number to keep your physical card number safe from prying eyes
              online.
              <br />
              14. If your PointCard is used without your authorization, your
              funds will be returned to your Point account following a report to
              Member Services.
              <br />
              15. Withdraw from any ATM regardless of network globally. Fees
              reimbursed for up to 2 withdrawals per month up to a maximum of
              $8, credited to your account in equivalent points value.
              <br />
              16. Incoming bank transfers typically arrive within 1–3 business
              days (M–F excluding public holidays) when initiated inside Point
              app.
              <br />
              17. Deposit insurance covers all funds in your Point account up to
              $250,000 and is offered by the Federal Deposit Insurance
              Corporation.
              <br />
              18. Covers foreign merchant transaction fees at Visa locations
              outside the United States.
              <br />
              <br />
              Banking services are provided by Column N.A., member FDIC.
              “Column” is a registered trademark of Column National Association.
              Point Up Inc. © 2021 All Rights Reserved. Benefits are subject to
              terms, conditions and limitations, including limitations on the
              amount of coverage. Please refer to Terms for additional details.
            </span>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
