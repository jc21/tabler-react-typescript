import React from "react";

import { ThemeProvider } from "styled-components";

import { DarkTheme, LightTheme, TablerStyles } from "../Theme";
import Button from "./Button";

const Story = {
	title: "Button",
};

const Examples = (
	<>
		<Button>Default</Button> <Button color="primary">Primary</Button>{" "}
		<Button color="secondary">Secondary</Button>{" "}
		<Button disabled>Disabled</Button>
	</>
);

const Light = () => (
	<ThemeProvider theme={LightTheme}>
		<TablerStyles />
		{Examples}
	</ThemeProvider>
);

const Dark = () => (
	<ThemeProvider theme={DarkTheme}>
		<TablerStyles />
		{Examples}
	</ThemeProvider>
);

export default Story;
export { Light, Dark };
