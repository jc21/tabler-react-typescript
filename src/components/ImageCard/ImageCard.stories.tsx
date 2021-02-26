import React from "react";

import styled from "styled-components";

import { TablerStyles } from "../../Theme";
import ImageCard from "./ImageCard";

const PaddedDiv = styled.div`
	padding: 18px;
`;

const Story = {
	title: "ImageCard",
};

const Examples = (
	<>
		<PaddedDiv>
			<h1>ImageCard</h1>
			<div style={{ maxWidth: "20rem" }}>
				<ImageCard
					image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCF7G2bNT7hbbBYjVaPAUU0b0p1_y4zWXsQ&usqp=CAU"
					title="Title 1">
					Body
				</ImageCard>
			</div>
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
