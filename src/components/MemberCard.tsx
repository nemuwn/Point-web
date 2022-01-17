import styled from "styled-components";
const Card = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 35px 0;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  h3 {
    color: #000;
    font-size: 2.1875em;
    font-weight: 400;
    text-align: left;
    text-decoration: none;
  }
  img {
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
  }
`;
export const MemberCard = ({ text }: { text: string }) => {
  return (
    <Card data-aos="fade-up">
      <h3>{text}</h3>
      <img
        src="https://assets-global.website-files.com/5ee7f9eb35bb1852519f534e/5ee8121363d3197b58f4bcf2_combined-shape-copy-7.svg"
        alt="img"
      />
    </Card>
  );
};
