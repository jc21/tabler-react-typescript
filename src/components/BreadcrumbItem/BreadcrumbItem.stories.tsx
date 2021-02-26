import React from "react";

import styled from "styled-components";

import { TablerStyles } from "../../Theme";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import BreadcrumbItem from "./BreadcrumbItem";

const PaddedDiv = styled.div`
	padding: 18px;
`;

const Story = {
	title: "BreadcrumbItem",
};

const Examples = (
	<>
		<PaddedDiv>
			<h1>BreadcrumbItem</h1>
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
