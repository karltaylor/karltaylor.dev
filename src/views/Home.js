import React from "react";
import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

import Colours from "../Colours";

const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 20px;
  line-height: 38px;
`;

const LinkContainer = styled.div`
  margin-left: 250px;
`;

const Link = styled.a`
  position: relative;
  color: ${Colours.notBlack};
  text-decoration: none;

  &:after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: ${Colours.notBlack};
    bottom: 0px;
    left: 0;
    transform: translateY(10px);
    transition: 200ms;
    opacity: 0;
  }

  &:hover {
    &:after {
      transform: translateY(5px);
      opacity: 1;
    }
  }
`;

const Home = () => (
  <Centered>
    <div>
      <p>Hello,</p>
      <p>
        I am a full stack software engineer with a<br />
        focus in NodeJS and React & React-Native.
      </p>
    </div>
    <LinkContainer>
      <p><Link as={ReactRouterLink} to='/work'>Work</Link></p>
      <p><Link target="_blank" href="https://dev.to/karltaylor">dev.to</Link></p>
      <p>
        <Link href="mailto:karl@karltaylor.dev">Contact</Link>
      </p>
    </LinkContainer>
  </Centered>
);

export default Home;