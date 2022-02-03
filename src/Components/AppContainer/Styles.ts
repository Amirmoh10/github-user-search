import styled from "styled-components";

export const AppContainer = styled.div`
  width: 730px;
  margin: 144px auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 375px) {
    width: 100%;
  }
`;
