import { Container } from "./Container";
import { Flex } from "../Styles/Flex.styled";
import SocialIcons from "./SocialIcons";
import { StyledFooter } from "./../Styles/Footer.styled";
import logo from "../assets/3903482.jpg";

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src={logo} alt="logo" />
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+55 - 99 9999-9999</li>
            <li>example@dadadad.com</li>
          </ul>
          <ul>
            <li>Sobre nós</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Carreiras</li>
            <li>Blog</li>
            <li>Fale conosco</li>
          </ul>
          <SocialIcons />
        </Flex>
        <p>&copy; 2022 MyShopping. Todos os direitos reservados</p>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
