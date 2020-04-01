import React from "react";
import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

import Container from "../components/Container";
import Link from "../components/Link";

const Centered = styled(Container)`
  padding: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 38px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const FullWidthMobileContainer = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    width: auto;
  }
`

const LinkContainer = styled(FullWidthMobileContainer)`
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 15px;
    @media (min-width: 1024px) {
      width: 100px;
    }
  }

  @media (min-width: 1024px) {
    margin-left: 250px;
    width: auto;
  }
`;

const Home = () => {
  return (
    <Centered>
      <FullWidthMobileContainer>
        <p>Hello, I'm Karl Taylor</p>
        <p>
          I am a full stack software engineer with a<br />
          focus in Node.js, React & React-Native.
        </p>
      </FullWidthMobileContainer>
      <LinkContainer>
        <span>
          <Link as={ReactRouterLink} to="/work">
            Work
          </Link>
        </span>
        <span>
          <Link target="_blank" href="https://dev.to/karltaylor">
            dev.to
          </Link>
        </span>
        <span>
          <Link href="mailto:karl@karltaylor.dev">Contact</Link>
        </span>
      </LinkContainer>
    </Centered>
  );
};

export default Home;
