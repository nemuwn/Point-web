import { Container7 } from "@/components/Container";
import { CardContent3 } from "@/components/CardContent";
import styled from "styled-components";
import { Members } from "@/utils/datas";
import { MemberCard } from "@/components/MemberCard";
import { skeletonClasses } from "@mui/material";
const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
  padding-bottom: 100px;
  .text {
    h2 {
      font-size: 2.1875em;
      font-weight: 400;
      color: #000;
      line-height: 1.185em;
    }
    a {
      display: flex;
      transition: all 200ms ease;
      padding: 8px 0px;
      p {
        color: black;
        font-weight: 600;
      }
    }
  }
  .text2 {
    display: flex;

    max-width: 1200px;
    justify-content: flex-end;
    h3 {
      max-width: none;
      margin-top: 0px;
      font-size: 7.11875em;
      text-align: right;
      color: black;
    }
  }

  @media (max-width: 899px) {
    .text2 h3 {
      font-size: 2.375em;
    }
    .text h2 {
      font-size: 1.3125em;
    }
  }
`;

const SignUpContainer = styled.div`
  background-color: black;
`;
export const Membership = () => {
  return (
    <Container7>
      <CardContent3>
        <MemberCard text="MEMBERSHIP INCLUDES" />
        {Members.map((member) => (
          <MemberCard text={member.text} key={member.text} />
        ))}
        <SubContainer>
          <div className="text">
            <h2>Total Estimated</h2>
            <a href="#asdsad" className="dekstop_btn">
              <p>See the breakdown</p>
              <img
                src="https://assets-global.website-files.com/5ee7f9eb35bb1852519f534e/5ee82addb7adad653c120ee6_invalid-name.svg"
                alt=""
              />
            </a>
          </div>
          <div className="text2">
            <h3>+ 1,435/yr.</h3>
          </div>
        </SubContainer>
      </CardContent3>
    </Container7>
  );
};
