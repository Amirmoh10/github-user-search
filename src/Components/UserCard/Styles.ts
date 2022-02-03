import styled from "styled-components";
import { LightColors } from "../App/Styles/Colors/LightColors";
import { H1, Body } from "../App/Styles/Fonts/Styles";

const bodyColor = `color: ${LightColors.slateGrey};
`;

export const CardContainer = styled.div`
  background-color: ${LightColors.white};
  display: flex;
  padding: 48px;
  margin-top: 72px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  max-width: 100%;
`;

export const Logo = styled.img`
  height: 117px;
  width: 117px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 37px;
`;

export const ProfileInfo = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 138px;
  align-items: center;
`;

export const ProfileName = styled(H1)`
  color: ${LightColors.licorice};
`;

export const JoinedDate = styled(Body)`
  color: ${LightColors.slateGrey};
`;

export const ProfileBio = styled(Body)`
  margin: 20px 0 32px;
  ${bodyColor}
`;

export const CompanyLocation = styled(Body)`
  ${bodyColor}
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 90px;
  background-color: ${LightColors.ghostWhite};
  padding: 15px 32px;
`;

export const Column = styled.div`
  display: grid;
  grid-auto-flow: Row;
  grid-gap: 1px;
  color: ${LightColors.licorice};
`;

export const CompanyInfoContainer = styled.div`
  display: grid;
  margin-top: 39px;
  max-width: 100%;
  grid-auto-flow: column;
`;

export const CompanyInfoColumn = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 20px;
`;

export const CompanyInfoBox = styled.div`
  display: grid;
  width: fit-content;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 20px;
`;

export const EmptyMessage = styled.span`
  color: ${LightColors.sanMarino};
  opacity: 0.5;
  font-size: 15px;
  line-height: 25px;
`;
