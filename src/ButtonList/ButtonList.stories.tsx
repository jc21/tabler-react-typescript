import React from "react";

import styled from "styled-components";

import Button from "../Button/Button";
import { TablerStyles } from "../Theme";
import ButtonList from "./ButtonList";

const PaddedDiv = styled.div`
	padding: 18px;
`;

const Story = {
	title: "ButtonList",
};

const Examples = (
	<>
		<PaddedDiv>
			<h1>ButtonList</h1>
			<ButtonList>
				<Button color="primary">Primary</Button>
				<Button color="secondary">Secondary</Button>
				<Button color="success">Success</Button>
			</ButtonList>
		</PaddedDiv>
		<PaddedDiv>
			<h2>Center</h2>
			<ButtonList align="center">
				<Button color="primary">Primary</Button>
				<Button color="secondary">Secondary</Button>
				<Button color="success">Success</Button>
			</ButtonList>
		</PaddedDiv>
		<PaddedDiv>
			<h2>Right</h2>
			<ButtonList align="right">
				<Button color="primary">Primary</Button>
				<Button color="secondary">Secondary</Button>
				<Button color="success">Success</Button>
			</ButtonList>
		</PaddedDiv>
	</>
);

const render = (dark = false) => {
	return (
		<div className={dark ? "theme-dark page" : "page"}>
			<TablerStyles />
			{Examples}
		</div>
	);
};

const Light = () => render();
const Dark = () => render(true);

export default Story;
export { Light, Dark };
