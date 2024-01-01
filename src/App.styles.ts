import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/popcornbg.webp";

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}

body {
  background-image: url(${BGImage});
  background-size: cover;
  margin: 0;
  padding: 0 20px;
  display: flex;
  justify-content: center;
}

*{
  box-sizing: border-box
  font-family: 'Titillium', san-serif;
}`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: "Titillium Web", sans-serif;
    color: #212121;
    font-size: 70px;
    font-weight: 900;
    text-align: center;
    margin: 20px;
  }
`;
