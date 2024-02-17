import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import About from "./about/about"
import Contact from "./contact/contact";
import Features from "./features/features";
import Extension from "./extension/extension";
import Questions from "./questions/questions";
import Header from "./header/header";
import { tema } from "./theme/theme";
import { GlobalStyles } from "../../GlobalStyles.style";
import Footer from "./footer/footer";

export const Container = styled.div``;


export default function Home() {
  return (
    <ThemeProvider theme={tema}>
    <Container>

      <Header />

     <About/>
     <Features/>
     <Extension/>
     <Questions/>
     <Contact/>

      <Footer/>

    </Container>
    </ThemeProvider >

  );
}
