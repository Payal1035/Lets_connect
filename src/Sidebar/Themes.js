import { createGlobalStyle } from "styled-components";

export const Red = {
  body: "#fff",
  fontColor: "#000",
};

export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`
	box {
		background-color: ${(props) => props.theme.box};
	}
`;
