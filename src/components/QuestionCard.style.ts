import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #fff;
  border-radius: 2px;
  padding: 20px;
  text-align: center;

  p {
    font-size: 16px;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3 ease;
  :hover {
    opactiy: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-family: "Merriweather", serif;
    font-size: 16px;
    color: #212121;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? "lineaer gradient(90deg, #56ffa4, #59bc86)"
        : !correct && userClicked
        ? "linear gradient (90deg, #ff5656, #ca6868)"
        : "linear gradient (90deg, #56ccff, #6eafb4)"};
    border-radius: 5px;    
`;
