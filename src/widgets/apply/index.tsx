import React, { useState } from "react";
import { Grid } from "@mui/material";
import ShowMoreText from "react-show-more-text";

const ApplyWidget = () => {
  return (
    <>
      <form>
        <label>
          <input type="radio"></input>
          <ShowMoreText
            /* Default options */
            lines={3}
            more="Show more"
            less="Show less"
            className="content-css"
            anchorClass="my-anchor-css-class"
            onClick={() => {
              console.log("expanded");
            }}
            expanded={false}
            width={280}
            truncatedEndingComponent={"... "}
          >
            <h3>Si Plus</h3>{" "}
            <label>
              Pay for your new Mac over 12 months at 0% APR with Apple Card.*
              Just choose Apple Card Monthly Installments when you check out to
              apply.
            </label>
            <p>OS</p>
            <label>Android 7.1 Android 7.1 Sunmi OS</label>
            <p>CPU</p>
            <label>Quad-core 1.4Hz CPU</label>
            <p>Memory</p>
            <label>1GB RAM + 8GB ROM 2GB+16GB ROM (optional)</label>
            <p>Display</p>
            <label>5.99" HD+ 1440x720 IPS</label>
          </ShowMoreText>
        </label>

        <label>
          <input type="radio"></input>
          <h3>Si Pro</h3>
          <label>
            Pay for your new Mac over 12 months at 0% APR with Apple Card.* Just
            choose Apple Card Monthly Installments when you check out to apply.
          </label>
          <p>OS</p>
          <label>Android 7.1 Android 7.1 Sunmi OS</label>
          <p>CPU</p>
          <label>Quad-core 1.4Hz CPU</label>
          <p>Memory</p>
          <label>1GB RAM + 8GB ROM 2GB+16GB ROM (optional)</label>
          <p>Display</p>
          <label>5.99" HD+ 1440x720 IPS</label>
        </label>
      </form>
      <h2>Тохиргоо</h2>
      <form>
        <Grid container direction="column" alignItems="flex-start" spacing={3}>
          <Grid item md={12}>
            <input id="Golomt" type="radio" value="Golomt Bank" name="Bank" />
            <label htmlFor="Golomt">Golomt Bank</label>
          </Grid>
          <Grid item md={12}>
            <input id="Khan" type="radio" value="Khan BANK" name="Bank" />
            <label htmlFor="Khan">Khan Bank</label>
          </Grid>
          <Grid item md={12}>
            <input id="TDB" type="radio" value="TDB" name="Bank" />
            <label htmlFor="TDB">TDB</label>
          </Grid>
          <Grid item md={12}>
            <input id="Tur" type="radio" value="Turiin Bank" name="Bank" />
            <label htmlFor="Tur">Turiin Bank</label>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default ApplyWidget;
