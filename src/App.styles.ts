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

  p {
    font-family: "Merriweather", serif;
    color: #212121;
    line-height: 30px;
  }

  .score {
    font-family: "Merriweather", serif;
    color: #212121;
    font-size: 32px;
    margin: 5px;
  }

  h1 {
    font-family: "Titillium Web", sans-serif;
    color: #212121;
    font-size: 70px;
    font-weight: 900;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    font-family: "Merriweather", serif;
    cursor: pointer;
    background: linear-gradient(180deg, #f34141, #a42c2c);
    border: 2px;
    border-radius: 5px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
