import styled from "styled-components";

export const AppContainer = styled.div`
  width: 730px;
  max-width: 730px;
  margin: 144px auto;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 327px) {
    & {
      padding: 0 24px;
    }
  }

  @media only screen and (max-width: 573px) {
    & {
      padding: 0 100px;
    }
  }
`;
