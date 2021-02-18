// my-theme.ts
import { DefaultTheme } from "styled-components";

export const LightTheme: DefaultTheme = {
	body: {
		background: "#F4F6FA",
		color: "#232e3c",
	},
	scrollbar: {
		thumb: "$gray-600" /* TODO */,
		track: "$gray-300" /* TODO */,
		hoverThumb: "$gray-600" /* TODO */,
	},
};
