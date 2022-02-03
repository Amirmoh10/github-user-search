import styled from "styled-components";

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 26px;
  line-height: 38px;
`;

export const H2 = styled.h2`
  font-weight: bold;
  font-size: 22px;
  line-height: 33px;
`;

export const H3 = styled.h3`
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;

  @media (max-width: 375px) {
    & {
      font-size: 14px;
    }
  }
`;

export const H4 = styled.h4`
  font-size: 13px;
  line-height: 20px;
`;

export const Body = styled.p`
  font-size: 15px;
  line-height: 25px;
`;
