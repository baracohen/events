import { createGlobalStyle } from "styled-components";
import { tema } from "./components/landingPage/theme/theme";

export const GlobalStyles = createGlobalStyle`

 body {
  width: auto;
  height: 100vh;
  background: ${tema.Body};
  font-family: 'Rubik', sans-serif;
  font-size:18px;
  color: ${tema.Dark};
 }

h1, h2, h3{
  color: ${tema.Dark};
}
 p{
  color: ${tema.Grayish};
 }

 button, a{
  border-radius: 0.2rem; 
  cursor: pointer;
  transition: 1s;
  :hover {
    transition: 0.5s;
    background-color: transparent;}
 }

 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border:none;
  outline: none;
  text-decoration:none;
  color:inherit;
}
`;
