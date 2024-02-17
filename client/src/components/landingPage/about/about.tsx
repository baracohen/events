import {
  Links,
  Container,
  Chrome,
  Firefox,
  ColunaImagem,
  Paragrafo,
  Titulo,
  Linha,
  Textos,
} from "./about.styled";
import animationData from "../../../assets/images/dashboard.json";
import { i18n } from "../../../translate/i18n";
import Lottie from "lottie-react";


export default function About() {
  return (
    <Container>
      <Linha>
        <Textos>
          <Titulo>{i18n.t("about.titulo")}</Titulo>
          <Paragrafo>{i18n.t("about.paragrafo")}</Paragrafo>
          <Links>
            <Chrome
              href="https://www.google.com/intl/pt-BR/chrome/"
              target="_blank"
            >
              {i18n.t("about.buttons.chrome")}
            </Chrome>
            <Firefox
              href="https://www.mozilla.org/pt-BR/firefox/new/"
              target="_blank"
            >
              {i18n.t("about.buttons.firefox")}
            </Firefox>
          </Links>
        </Textos>
        <ColunaImagem>
          <Lottie animationData={animationData} loop={true} />
        </ColunaImagem>
      </Linha>
    </Container>
  );
}
