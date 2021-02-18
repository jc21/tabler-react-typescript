import React from "react";

import { ThemeProvider } from "styled-components";

import { DarkTheme, LightTheme, TablerStyles } from "../theme";
import TestComponent from "./TestComponent";

const TestComponentStory = {
	title: "TestComponent",
};

const Light = () => (
	<ThemeProvider theme={LightTheme}>
		<TablerStyles />
		<TestComponent />
	</ThemeProvider>
);

const Dark = () => (
	<ThemeProvider theme={DarkTheme}>
		<TablerStyles />
		<TestComponent />
	</ThemeProvider>
);

export default TestComponentStory;
export { Light, Dark };
