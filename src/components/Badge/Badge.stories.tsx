import React from "react";

import styled from "styled-components";

import { TablerStyles } from "../../Theme";
import Badge from "./Badge";

const PaddedDiv = styled.div`
	padding: 18px;
`;

const Story = {
	title: "Badge",
};

const Examples = (
	<>
		<PaddedDiv>
			<h1>Badge</h1>
			<Badge color="blue">
				blue
			</Badge> <Badge color="azure">azure</Badge>{" "}
			<Badge color="indigo">indigo</Badge>{" "}
			<Badge color="purple">purple</Badge>{" "}
			<Badge color="pink">pink</Badge> <Badge color="red">red</Badge>{" "}
			<Badge color="orange">orange</Badge>{" "}
			<Badge color="yellow">yellow</Badge>{" "}
			<Badge color="lime">lime</Badge> <Badge color="green">green</Badge>{" "}
			<Badge color="teal">teal</Badge> <Badge color="cyan">cyan</Badge>
		</PaddedDiv>
		<PaddedDiv>
			<h2>Pill</h2>
			<Badge color="blue" type="pill">
				blue
			</Badge>{" "}
			<Badge color="azure" type="pill">
				azure
			</Badge>{" "}
			<Badge color="indigo" type="pill">
				indigo
			</Badge>{" "}
			<Badge color="purple" type="pill">
				purple
			</Badge>{" "}
			<Badge color="pink" type="pill">
				pink
			</Badge>{" "}
			<Badge color="red" type="pill">
				red
			</Badge>{" "}
			<Badge color="orange" type="pill">
				orange
			</Badge>{" "}
			<Badge color="yellow" type="pill">
				yellow
			</Badge>{" "}
			<Badge color="lime" type="pill">
				lime
			</Badge>{" "}
			<Badge color="green" type="pill">
				green
			</Badge>{" "}
			<Badge color="teal" type="pill">
				teal
			</Badge>{" "}
			<Badge color="cyan" type="pill">
				cyan
			</Badge>
		</PaddedDiv>
		<PaddedDiv>
			<h2>Soft</h2>
			<Badge color="blue" type="soft">
				blue
			</Badge>{" "}
			<Badge color="azure" type="soft">
				azure
			</Badge>{" "}
			<Badge color="indigo" type="soft">
				indigo
			</Badge>{" "}
			<Badge color="purple" type="soft">
				purple
			</Badge>{" "}
			<Badge color="pink" type="soft">
				pink
			</Badge>{" "}
			<Badge color="red" type="soft">
				red
			</Badge>{" "}
			<Badge color="orange" type="soft">
				orange
			</Badge>{" "}
			<Badge color="yellow" type="soft">
				yellow
			</Badge>{" "}
			<Badge color="lime" type="soft">
				lime
			</Badge>{" "}
			<Badge color="green" type="soft">
				green
			</Badge>{" "}
			<Badge color="teal" type="soft">
				teal
			</Badge>{" "}
			<Badge color="cyan" type="soft">
				cyan
			</Badge>
		</PaddedDiv>
		<PaddedDiv>
			<h2>Empty</h2>
			<Badge color="blue" /> <Badge color="azure" />{" "}
			<Badge color="indigo" /> <Badge color="purple" />{" "}
			<Badge color="pink" /> <Badge color="red" />{" "}
			<Badge color="orange" /> <Badge color="yellow" />{" "}
			<Badge color="lime" /> <Badge color="green" />{" "}
			<Badge color="teal" /> <Badge color="cyan" />
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
