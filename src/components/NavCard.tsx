import styled from "styled-components";

const NavLink = styled.a<{ opacity: number }>`
  display: flex;
  width: 100%;

  border-top: 1px solid #97999b;
  color: rgba(0, 0, 0, 0.3);
  text-decoration: none;

  padding-top: 0.95rem;
  padding-bottom: 3.125rem;
  opacity: ${(props) => props.opacity};
  :hover {
    opacity: 1;
    cursor: pointer;
  }
  transition: 1s;
`;

const NavHeading = styled.div`
  width: 40%;
  text-align: left;
  display: block;

  h3 {
    margin-bottom: 10px;
    font-family: SequelSans-SemiBoldBody, sans-serif;
    color: #000;
    font-size: 1.5em;
    line-height: 1.208em;
    max-width: 10ch;
    font-family: "Sequel Sans (Display)", sans-serif;
    font-weight: 600;
  }
`;

const NavDesc = styled.div`
  width: auto;
  max-width: 32ch;
  font-size: 1em;
  margin-bottom: 10px;
  font-family: "Sequel Sans (Display)", sans-serif;
  line-height: 1.23em;
  font-weight: 400;
  text-decoration: none;
  color: #000;
`;

export const NavCard = ({
  title,
  desc,
  opacity,
  submit,
}: {
  title: string;
  desc: string;
  opacity: boolean;
  submit: () => void;
}) => {
  return (
    <>
      <NavLink onClick={submit} opacity={opacity ? 1 : 0.5}>
        <NavHeading>
          <h3>{title}</h3>
        </NavHeading>
        <NavDesc>
          <p>{desc}</p>
        </NavDesc>
      </NavLink>
    </>
  );
};
