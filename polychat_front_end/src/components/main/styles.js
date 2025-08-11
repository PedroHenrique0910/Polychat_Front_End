import styled from 'styled-components';

export const MainContainer = styled.main`
  flex: 20 1 500px;
  height: calc(100vh - 224px);

  background-image: linear-gradient(to right, #5D0382, #2C12A4, #07045D);


   @media only screen and (max-width: 923px) {
    height: calc(100vh - 330px);
  }
`;
