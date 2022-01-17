import styled from "styled-components";
const Button = styled.div`
  width: 40%;
  height: 60px;
  align-self: auto;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  padding: 0px 20px;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  img {
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
  }

  div {
    line-height: 1.166em;
    font-weight: 600;
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 0.75em;
    text-transform: uppercase;
    color: #000;
  }
`;
export const DownloadButton = () => {
  return (
    <Button>
      <div>DOWNLOAD THE APP</div>
      <img
        src="https://assets-global.website-files.com/5ee7f9eb35bb1852519f534e/5ee82addb7adad653c120ee6_invalid-name.svg"
        alt="arrow"
      />
    </Button>
  );
};
