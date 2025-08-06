import { Title } from "./styles"; 
import Button from "../../components/Button/myButton";

function Home() {
  return (
    <div>
      <Title>Welcome to Polychat</Title>
      <p>This is the home page of the Polychat application.</p>
      <Button />
    </div>
  );
}

export default Home