import React from "react";
import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

import Container from "../components/Container";
import Link from "../components/Link";

const Centered = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 38px;
`;

const LinkContainer = styled.div`
  margin-left: 250px;
`;

const Home = () => {
  return (
    <Centered>
      <div>
        <p>Hello,</p>
        <p>
          I am a full stack software engineer with a<br />
          focus in NodeJS and React & React-Native.
        </p>
      </div>
      <LinkContainer>
        <p>
          <Link as={ReactRouterLink} to="/work">
            Work
          </Link>
        </p>
        <p>
          <Link target="_blank" href="https://dev.to/karltaylor">
            dev.to
          </Link>
        </p>
        <p>
          <Link href="mailto:karl@karltaylor.dev">Contact</Link>
        </p>
      </LinkContainer>
    </Centered>
  );
};

export default Home;
