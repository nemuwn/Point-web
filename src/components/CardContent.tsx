import styled from "styled-components";
export const CardContent = styled.div`
  position: absolute;
  left: 0%;
  top: 0px;
  right: 0%;
  bottom: auto;

  display: flex;

  justify-content: space-between;
  width: 85%;
  height: 1024px;
  max-width: 1200px;
  margin: auto;
  padding-top: 100px;

  .subcontain {
    display: flex;
    .switch {
      align-self: flex-end;
    }
  }
  .headersection {
    margin-bottom: 100px;
  }
  @media only screen and (max-width: 899px) {
    padding-top: 100 px;
    width: 85%;
    justify-content: none;
    height: auto;
    flex: none;
    flex-direction: column;
    .headersection {
      display: none;
    }
  }
`;
export const CardContent2 = styled.div`
  position: absolute;
  left: 0%;
  top: 0px;
  right: 0%;
  bottom: auto;
  z-index: 20;
  display: flex;
  justify-content: space-between;
  width: 85%;
  height: 1024px;
  max-width: 1200px;
  margin: auto;
  padding-top: 100px;
`;

export const CardContent3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  max-width: 1200px;
  margin: auto;
  padding-top: 100px;
  @media (max-width: 899px) {
    padding-top: 0px;
  }
`;

export const CardContent4 = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  max-width: 1200px;
  /* padding-top: 100px; */
`;

export const CardSubContainer = styled.div`
  display: flex;
  width: 50%;
  .SubContain {
    padding: 100px 0px;
  }
  .footertext {
    font-weight: 500;
    font-size: 0.625em;
    line-height: 1.2em;
    width: 310px;
  }
  flex-direction: column;
  @media (max-width: 900px) {
    width: 100%;
  }
  .access {
    color: white;
    font-weight: 600;
    margin-bottom: 10px;
  }
  h1 {
    color: white;
    font-weight: 500;
    margin-bottom: 20px;
    line-height: 1.1833333333333333em;
    font-size: 3.75em;
  }
  .enjoy {
    font-size: 1.125em;
    line-height: 1.23em;
    width: 330px;
  }
`;
