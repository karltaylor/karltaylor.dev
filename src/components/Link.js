import styled from "styled-components";

import Colours from "../Colours";

const Link = styled.a`
  position: relative;
  color: ${Colours.notBlack};
  text-decoration: none;

  &:after {
    content: "";
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

export default Link;