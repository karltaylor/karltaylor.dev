import { css } from "styled-components";

export const FadeIn = ({ active, duration = 1500, delay = 0 }) => {
  return css`
    opacity: ${active ? 1 : 0};
    transition: opacity ${duration}ms ${delay}ms;
  `;
};
