import styled from "styled-components";
import { LightColors } from "../App/Styles/Colors/LightColors";

export const SearchBarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 69px;
  display: flex;
  margin-top: 36px;
`;

export const Image = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 16px;
  width: 24px;
  height: 24px;

  @media (max-width: 375px) {
    & {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Button = styled.button`
  width: 106px;
  height: 50px;
  border: none;
  background-color: ${LightColors.dodgerBlue};
  border-radius: 10px;
  color: ${LightColors.white};
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;

  @media (max-width: 375px) {
    & {
      font-size: 14px;
      width: 84px;
      height: 46px;
      right: 7px;
    }
  }
`;
