import styled from 'styled-components';


export const HeaderContainer = styled.header`
  background-image: linear-gradient(to right, #5D0382, #2C12A4, #07045D);
  height: 100px;
  flex: 1 1 100vw;
  display: flex;  

  #polychatLogo {
    flex: 0 1 200px;
  }
  
  #openMenu, #closeMenu {
    border: none;
    background: none;
    font-size: 30px;
    font-weight: bold;
    padding: 0px 5px 0px 5px;
    cursor: pointer;
    display: none;
  }
  
  nav {
    flex: 1 1 100vw;
    align-items: center;
    justify-content: flex-end;
    display: flex; 
  }

  nav a {
    margin: 3%;
    font-size: 20pt;
  }

  @media only screen and (max-width: 717px) {
  #openMenu, #closeMenu {
    display: block;
  }
  #openMenu {
    margin-left: auto;
  }
  #closeMenu {
    position: fixed;
    right: 15px;
    top: 15px;
  }
  nav {
    position: fixed;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.8);
    align-items: center;
    justify-content: center;
    margin: 0;
     display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'none')};
     opacity: ${({ menuOpen }) => (menuOpen ? '1' : '0')};
    transition: 0.3s;
  }
}

`;
