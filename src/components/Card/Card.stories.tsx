import React from "react";

import styled from "styled-components";

import { TablerStyles } from "../Theme";
import Card from "./Card";

const PaddedDiv = styled.div`
	padding: 18px;
`;

const Story = {
	title: "Card",
};

const Examples = (
	<>
		<PaddedDiv>
			<h1>Card</h1>
			<Card>Card Body</Card>
		</PaddedDiv>
		<PaddedDiv>
			<h2>Sizes</h2>
			<Card size="sm">Small</Card>
			<br />
			<Card size="md">Medium</Card>
			<br />
			<Card size="lg">Large</Card>
		</PaddedDiv>
		<PaddedDiv>
			<h2>Titles</h2>
			<Card title="Title 1">Body</Card>
		</PaddedDiv>
		<PaddedDiv>
			<h2>Status Color</h2>
			<Card title="Title 1" statusColor="info">
				Body
			</Card>
			<br />
			<Card title="Title 2" statusColor="success" statusPosition="start">
				Body
			</Card>
		</PaddedDiv>
		<PaddedDiv>
			<h2>Stacked</h2>
			<Card stacked>Body</Card>
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
