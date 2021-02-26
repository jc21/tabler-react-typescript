import React from "react";

import styled from "styled-components";

import BreadcrumbItem from "../BreadcrumbItem/BreadcrumbItem";
import { TablerStyles } from "../Theme";
import Breadcrumb from "./Breadcrumb";

const PaddedDiv = styled.div`
	padding: 18px;
`;

const Story = {
	title: "Breadcrumb",
};

const Examples = (
	<>
		<PaddedDiv>
			<h1>Breadcrumb</h1>
			<Breadcrumb>
				<BreadcrumbItem>
					<a href="/">Home</a>
				</BreadcrumbItem>
				<BreadcrumbItem>
					<a href="/">Next</a>
				</BreadcrumbItem>
				<BreadcrumbItem active>
					<a href="/">Here</a>
				</BreadcrumbItem>
			</Breadcrumb>
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
