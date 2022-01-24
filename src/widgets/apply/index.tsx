import React, { useState } from "react";
import { Grid } from "@mui/material";
import ShowMoreText from "react-show-more-text";
import styled from "styled-components";
const FormRow = styled.div``;

const Radio = styled.div`
  position: relative;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  .content {
    transition: all 2s linear 1s;
  }
  input {
    width: 18px;
    height: 18px;
    position: relative;
    bottom: -4px;
    margin-left: 0px;
    margin-right: 14px;
  }
  .content p {
    margin: 0px;
    display: block;
    text-align: start;
    font-weight: 600;
  }
  .content label {
    margin-bottom: 16px;
    font-weight: 300;
    line-height: 20px;
  }
  .content .desc {
    width: 85%;
  }
  label {
    display: flex;
    margin-bottom: 10px;
  }
  .sub {
    margin-bottom: 20px;
  }

  .icon {
    width: 35px;
    height: 35px;
    margin-right: 10px;
  }
  @media (max-width: 899px) {
    width: 100%;
  }
`;

const FormSep = styled.div`
  width: 80%;
  height: 1px;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: rgba(0, 0, 0, 0.3);

  @media (max-width: 899px) {
    width: 100%;
  }
`;

const InpForm = styled.div`
  display: block;
  input {
    width: 80%;
    height: 60px;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    font-size: 16px;
    margin-top: 10px;
    padding: 20px;
  }
  .inp {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-bottom: 20px;
    font-size: 18px;
  }
  @media (max-width: 899px) {
    input {
      width: 100%;
    }
  }
`;

const ApplyWidget = () => {
  return (
    <>
      <form>
        <FormSep />
        <FormRow>
          <Grid
            container
            direction="column"
            alignItems="flex-start"
            spacing={3}
          >
            <Grid item md={12}>
              <Radio>
                <label>
                  <input type="radio" name="machine"></input>
                  <h3>Si Plus</h3>
                </label>
                <ShowMoreText
                  lines={3}
                  more="Show more"
                  less="Show less"
                  className="content"
                  anchorClass="contentanchor"
                  onClick={() => {
                    console.log("expanded");
                  }}
                  expanded={false}
                  width={400}
                  truncatedEndingComponent={"... "}
                >
                  <label className="desc">
                    Pay for your new Mac over 12 months at 0% APR with Apple
                    Card.* Just choose Apple Card Monthly Installments when you
                    check out to apply.
                  </label>
                  <p>OS</p>
                  <label>Android 7.1 Android 7.1 Sunmi OS</label>
                  <p>CPU</p>
                  <label>Quad-core 1.4Hz CPU</label>
                  <p>Memory</p>
                  <label>1GB RAM + 8GB ROM 2GB+16GB ROM (optional)</label>
                  <p>Display</p>
                  <label>5.99" HD+ 1440x720 IPS</label>

                  <p>Camera</p>
                  <label>5.0MP, Flash, AF support 1D/2D barcode scan</label>
                  <p>Wi-Fi</p>
                  <label>2.4G/5GHz 2.4G/5GHz, IEEE 802.11 a/b/g/n</label>
                  <p>Bluetooth</p>
                  <label>Bluetooth 2.1/3.0/4.2 Support BLE</label>
                </ShowMoreText>
              </Radio>
            </Grid>

            <Grid item md={12}>
              <Radio>
                <label>
                  <input type="radio" name="machine"></input>
                  <h3>Si Pro</h3>
                </label>
                <ShowMoreText
                  lines={3}
                  more="Show more"
                  less="Show less"
                  className="content"
                  onClick={() => {
                    console.log("expanded");
                  }}
                  expanded={false}
                  width={400}
                  truncatedEndingComponent={"... "}
                >
                  <label className="desc">
                    Pay for your new Mac over 12 months at 0% APR with Apple
                    Card.* Just choose Apple Card Monthly Installments when you
                    check out to apply.
                  </label>
                  <p>OS</p>
                  <label>Android 7.1 Android 7.1 Sunmi OS</label>
                  <p>CPU</p>
                  <label>Quad-core 1.4Hz CPU</label>
                  <p>Memory</p>
                  <label>1GB RAM + 8GB ROM 2GB+16GB ROM (optional)</label>
                  <p>Display</p>
                  <label>5.99" HD+ 1440x720 IPS</label>

                  <p>Camera</p>
                  <label>5.0MP, Flash, AF support 1D/2D barcode scan</label>
                  <p>Wi-Fi</p>
                  <label>2.4G/5GHz 2.4G/5GHz, IEEE 802.11 a/b/g/n</label>
                  <p>Bluetooth</p>
                  <label>Bluetooth 2.1/3.0/4.2 Support BLE</label>
                </ShowMoreText>
              </Radio>
            </Grid>
          </Grid>
        </FormRow>

        <FormSep />

        <h2>Тохиргоо</h2>

        <Radio>
          <p className="sub">Банкаа сонгон уу</p>
          <Grid
            container
            direction="column"
            alignItems="flex-start"
            spacing={3}
          >
            <Grid item md={12}>
              <label htmlFor="Golomt">
                <input
                  id="Golomt"
                  type="radio"
                  value="Golomt Bank"
                  name="Bank"
                />
                Golomt Bank
              </label>
            </Grid>
            <Grid item md={12}>
              <label htmlFor="Khan">
                <input id="Khan" type="radio" value="Khan BANK" name="Bank" />
                Khan Bank
              </label>
            </Grid>
            <Grid item md={12}>
              <label htmlFor="TDB">
                <input id="TDB" type="radio" value="TDB" name="Bank" />
                TDB
              </label>
            </Grid>
            <Grid item md={12}>
              <label htmlFor="Tur">
                <input id="Tur" type="radio" value="Turiin Bank" name="Bank" />
                Turiin Bank
              </label>
            </Grid>
          </Grid>
        </Radio>
        <FormSep />

        <Radio>
          <p className="sub">Финтекүүдээ сонгон уу</p>
          <Grid
            container
            direction="column"
            alignItems="flex-start"
            spacing={3}
          >
            <Grid item md={12}>
              <label htmlFor="">
                <input type="checkbox" />
                Qpay
              </label>
            </Grid>
            <Grid item md={12}>
              <label htmlFor="">
                <input type="checkbox" />
                Social Pay
              </label>
            </Grid>
            <Grid item md={12}>
              <label htmlFor="">
                <input type="checkbox" />
                SuperUp
              </label>
            </Grid>
            <Grid item md={12}>
              <label htmlFor="">
                <input type="checkbox" />
                Mongol chat
              </label>
            </Grid>
            <Grid item md={12}>
              <label htmlFor="">
                <input type="checkbox" />
                Meme chat
              </label>
            </Grid>
            <Grid item md={12}>
              <label htmlFor="">
                <input type="checkbox" />
                Monpay
              </label>
            </Grid>
            <Grid item md={12}>
              <label htmlFor="">
                <input type="checkbox" />
                Pocket
              </label>
            </Grid>
          </Grid>
        </Radio>
        <FormSep />
        <InpForm>
          <div className="inp">
            <label>Name</label>
            <input
              placeholder="Өөрийн нэрээ бичнэ үү"
              id="name"
              className="sc-1kmc4e5-5 iekNQU"
            />
          </div>
          <div className="inp">
            <label>Email</label>
            <input type="email" placeholder="email@point.app" />
          </div>
          <div className="inp">
            <label>Phone Number</label>
            <input
              type="number"
              placeholder="Өөрийн дугаараа бичнэ үү"
              id="phone"
            />
          </div>
          <div className="inp">
            <label>Захиалах тоо ширхэг</label>
            <input
              type="number"
              placeholder="Захаилах тоо ширхэгээ бичнэ үү"
              id="number"
            />
          </div>
        </InpForm>
      </form>
    </>
  );
};

export default ApplyWidget;
