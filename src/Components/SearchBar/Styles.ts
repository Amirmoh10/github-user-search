import styled from "styled-components";
import { LightColors } from "../App/Styles/Colors/LightColors";

export const SearchBarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 69px;
  display: flex;
  margin-top: 36px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: ${LightColors.white};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  border: none;
  outline: none;
  font-family: "Space Mono", monospace;
  color: ${LightColors.sanMarino};
  font-size: 18px;
  line-height: 25px;
  padding-left: 80px;
`;

export const Image = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 32px;
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
`;
