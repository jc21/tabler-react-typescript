// my-theme.ts
import { DefaultTheme } from "styled-components";

export const DarkTheme: DefaultTheme = {
	body: {
		background: "#000" /* TODO */,
		color: "#fff" /* TODO */,
	},
	scrollbar: {
		thumb: "transparent",
		track: "transparent",
		hoverThumb: "mix($white, $dark, 20%)",
	},
};
