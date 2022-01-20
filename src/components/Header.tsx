import useScroll from "@/hooks/useScroll";
import useWindowSize from "@/hooks/useWindowSize";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
const Layout = styled.div`
  background-color: hsla(0, 0%, 76.9%, 0.3);
  -webkit-backdrop-filter: blur(54px);
  backdrop-filter: blur(54px);
  height: 105px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  transition: all 0.3s;
  &[data-menu="false"] {
    top: -105px;
  }
  img {
    width: 38px;
  }
  .flex {
    width: 100%;
    height: 105px;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 890px) {
    padding: 0 16px;
    height: 70px;
    .flex {
      height: 70px;
    }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Button = styled.div`
  padding: 16px 32px;
  border-radius: 5em;
  background-color: #000;
  font-size: 0.75rem;
  line-height: 1;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  transition: all ease 0.3s;
  cursor: pointer;
  border: 0;
  &:hover {
    background-color: white;
    color: black;
  }
`;

export const Header = () => {
  const scroll = useScroll();
  const size = useWindowSize();

  const [visible, setVisible] = useState(false);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(scroll.y);
    if (
      (scroll.y < Number(size?.height) * 3 && scroll.y - scroll.lastY > 0) ||
      scroll.y < Number(size?.height) * 3
    )
      setVisible(false);
    else setVisible(true);
  }, [scroll.y, scroll.lastY, size]);

  return (
    <Layout data-menu={visible}>
      <Container>
        <div className="flex">
          <img src="/waves-logo.png" />
          <Link href="/apply">
            <Button>Apply</Button>
          </Link>
        </div>
      </Container>
    </Layout>
  );
};
