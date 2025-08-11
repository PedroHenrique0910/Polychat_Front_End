
import Main from "../../components/main/main";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Aside from "../../components/aside/aside";
import { HomeContainer } from "./styles"

function Home() {
  return (
   <HomeContainer>
      <Header />
      <Main />
      <Footer />
  </HomeContainer>
  );
}

export default Home