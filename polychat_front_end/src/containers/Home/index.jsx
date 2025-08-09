import { Title } from "./styles"; 
import NavBar from "../../components/navBar/navBar";
import Main from "../../components/main/main";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Aside from "../../components/aside/footer";

function Home() {
  return (
    <div>
      <Header />
      <NavBar />
      <Main />
      <Aside />
      <Footer />
    </div>
  );
}

export default Home