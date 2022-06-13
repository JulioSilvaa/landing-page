import GlobalStyles from "./Styles/Global";
import { Container } from "./Components/Container";
import Header from "./Components/Header";
import { ThemeProvider } from "styled-components";
import content from "./content";
import Card from "./Components/Card";
import Footer from "./Components/Footer";



const theme = {
  colors: {
    header: "#BCB8B1",
    body: "#463F3A",
    footer: "#BCB8B1",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
     
        <Container style={{ marginTop: "40px" }}>
          {content.map((product) => (
            <Card product={product} key={product.id} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
