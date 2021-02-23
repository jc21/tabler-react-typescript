import React from "react";

import styled from "styled-components";

import Button from "../Button/Button";
import ButtonList from "../ButtonList/ButtonList";
import { TablerStyles } from "../Theme";
import PageHeader from "./PageHeader";

const PaddedDiv = styled.div`
	padding: 18px;
`;

const Story = {
	title: "PageHeader",
};

const breadcrumbs = (
	<div className="mb-1">
		<ol
			className="breadcrumb breadcrumb-alternate"
			aria-label="breadcrumbs">
			<li className="breadcrumb-item">
				<a href="#">Home</a>
			</li>
			<li className="breadcrumb-item">
				<a href="#">Library</a>
			</li>
			<li className="breadcrumb-item active" aria-current="page">
				<a href="#">Articles</a>
			</li>
		</ol>
	</div>
);

const Examples = (
	<>
		<PaddedDiv>
			<h1>PageHeader</h1>
			<hr />
			<PageHeader title="Example 1" preTitle="Pre Title 1">
				<ButtonList>
					<Button color="primary">Edit</Button>
					<Button color="teal">Subscribe</Button>
				</ButtonList>
			</PageHeader>
			<hr />
			<PageHeader title="Example 2" subTitle="Sub-title 2">
				<ButtonList>
					<Button color="primary">Edit</Button>
					<Button color="teal">Subscribe</Button>
				</ButtonList>
			</PageHeader>
			<hr />
			<PageHeader title="Example 3" breadcrumbs={breadcrumbs}>
				<ButtonList>
					<Button color="primary">Edit</Button>
					<Button color="teal">Subscribe</Button>
				</ButtonList>
			</PageHeader>
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
