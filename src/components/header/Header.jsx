import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import logo from "../../assets/logo.png";

//import {Container,Image} from "react-bootstrap" //!yazım olarak daha kullanışlı ama performans açısından üstteki yöntem daha ideal

const Header = () => {
  return (
    <Container>
      <Image src={logo} width={"200px"} />
      <h1>Football Legends</h1>
    </Container>
  );
};
export default Header;
