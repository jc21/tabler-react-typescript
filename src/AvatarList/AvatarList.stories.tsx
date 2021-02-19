import React from "react";

import styled from "styled-components";

import Avatar from "../Avatar/Avatar";
import { TablerStyles } from "../Theme";
import AvatarList from "./AvatarList";

const PaddedDiv = styled.div`
	padding: 18px;
`;

const Story = {
	title: "AvatarList",
};

const Examples = (
	<>
		<PaddedDiv>
			<h1>AvatarList</h1>
			<AvatarList>
				<Avatar initials="JC" /> <Avatar initials="BV" />{" "}
				<Avatar initials="DH" /> <Avatar initials="RG" />{" "}
				<Avatar initials="LR" /> <Avatar initials="MD" />{" "}
				<Avatar initials="LR" color="pink-lt" />{" "}
				<Avatar initials="MD" color="red-lt" />{" "}
				<Avatar initials="JC" color="orange-lt" />
			</AvatarList>
		</PaddedDiv>
		<PaddedDiv>
			<h2>Stacked</h2>
			<AvatarList stacked>
				<Avatar initials="JC" /> <Avatar initials="BV" />{" "}
				<Avatar initials="DH" /> <Avatar initials="RG" />{" "}
				<Avatar initials="LR" /> <Avatar initials="MD" />{" "}
				<Avatar initials="LR" color="pink-lt" />{" "}
				<Avatar initials="MD" color="red-lt" />{" "}
				<Avatar initials="JC" color="orange-lt" />
			</AvatarList>
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
