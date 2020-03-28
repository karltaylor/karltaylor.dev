import React from "react";
import styled from "styled-components";

import "./baseStyle";

import Colours from "./Colours";

const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 20px;
  line-height: 38px;
`;

const LinkContainer = styled.div`
  margin-left: 100px;
`;

const Link = styled.a`
  color: ${Colours.notBlack};
  text-decoration: none;
`;

export default () => (
  <Centered>
    <div>
      <p>Hello,</p>
      <p>
        I am a fullstack software engineer with a<br />
        focus in NodeJS and React-Native.
      </p>
    </div>
    <LinkContainer>
      {/* <p>Work</p> */}
      <p><Link href="https://dev.to/karltaylor">dev.to</Link></p>
      <p>
        <Link href="mailto:karl@karltaylor.dev">Contact</Link>
      </p>
    </LinkContainer>
  </Centered>
);
