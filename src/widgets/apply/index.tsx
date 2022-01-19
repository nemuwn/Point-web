import React from "react";
import { Grid } from "@mui/material";

const ApplyWidget = () => {
  return (
    <>
      <form>
        <Grid container direction="column" alignItems="flex-start">
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
