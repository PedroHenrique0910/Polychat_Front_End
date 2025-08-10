import styled from 'styled-components';

export const MainContainer = styled.main`
  background-color: #d0ff00ff;
  flex: 20 1 500px;
  height: calc(100vh - 224px);

   @media only screen and (max-width: 923px) {
    height: calc(100vh - 330px);
  }
`;
