import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

import { FadeIn } from "../components/Animations";
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
`;

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

const AnimatedSpan = styled.span`
  ${({ active, delay }) => {
    return FadeIn({ active, delay });
  }};
`;

const AnimatedP = styled.p`
  ${({ active, delay }) => {
    return FadeIn({ active, delay });
  }};
`;

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 100);
  }, []);

  return (
    <Centered>
      <FullWidthMobileContainer>
        <AnimatedP delay={100} active={mounted}>Hello, I'm Karl Taylor</AnimatedP>
        <AnimatedP delay={200} active={mounted}>
          I am a full stack software engineer with a<br />
          focus in Node.js, React & React-Native.
        </AnimatedP>
      </FullWidthMobileContainer>
      <LinkContainer>
        <AnimatedSpan active={mounted}>
          <Link as={ReactRouterLink} to="/work">
            Work
          </Link>
        </AnimatedSpan>
        <AnimatedSpan delay={300} active={mounted}>
          <Link target="_blank" href="https://dev.to/karltaylor">
            dev.to
          </Link>
        </AnimatedSpan>
        <AnimatedSpan delay={500} active={mounted}>
          <Link href="mailto:karl@karltaylor.dev">Contact</Link>
        </AnimatedSpan>
      </LinkContainer>
    </Centered>
  );
};

export default Home;
