import React from "react";

import styled from "styled-components";

import { TablerStyles } from "../Theme";
import Avatar from "./Avatar";

const PaddedDiv = styled.div`
	padding: 18px;
`;

const Story = {
	title: "Avatar",
};

const Examples = (
	<>
		<PaddedDiv>
			<h1>Avatar</h1>
			<Avatar url="data:image/jpeg;base64,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" />{" "}
			<Avatar url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCF7G2bNT7hbbBYjVaPAUU0b0p1_y4zWXsQ&usqp=CAU" />
		</PaddedDiv>
		<PaddedDiv>
			<h2>Initials</h2>
			<Avatar initials="JC" /> <Avatar initials="BV" />{" "}
			<Avatar initials="DH" /> <Avatar initials="RG" />{" "}
			<Avatar initials="LR" /> <Avatar initials="MD" />
		</PaddedDiv>
		<PaddedDiv>
			<h2>Initial Colors</h2>
			<Avatar initials="JC" color="blue" />{" "}
			<Avatar initials="BV" color="azure" />{" "}
			<Avatar initials="DH" color="indigo" />{" "}
			<Avatar initials="RG" color="purple" />{" "}
			<Avatar initials="LR" color="pink" />{" "}
			<Avatar initials="MD" color="red" />{" "}
			<Avatar initials="JC" color="orange" />{" "}
			<Avatar initials="BV" color="yellow" />{" "}
			<Avatar initials="DH" color="lime" />{" "}
			<Avatar initials="RG" color="green" />{" "}
			<Avatar initials="LR" color="teal" />{" "}
			<Avatar initials="MD" color="cyan" /> <br />
			<br />
			<Avatar initials="JC" color="blue-lt" />{" "}
			<Avatar initials="BV" color="azure-lt" />{" "}
			<Avatar initials="DH" color="indigo-lt" />{" "}
			<Avatar initials="RG" color="purple-lt" />{" "}
			<Avatar initials="LR" color="pink-lt" />{" "}
			<Avatar initials="MD" color="red-lt" />{" "}
			<Avatar initials="JC" color="orange-lt" />{" "}
			<Avatar initials="BV" color="yellow-lt" />{" "}
			<Avatar initials="DH" color="lime-lt" />{" "}
			<Avatar initials="RG" color="green-lt" />{" "}
			<Avatar initials="LR" color="teal-lt" />{" "}
			<Avatar initials="MD" color="cyan-lt" />
		</PaddedDiv>
		<PaddedDiv>
			<h2>Sizes</h2>
			<Avatar initials="XL" color="blue-lt" size="xl" />{" "}
			<Avatar initials="LG" color="azure-lt" size="lg" />{" "}
			<Avatar initials="MD" color="indigo-lt" size="md" />{" "}
			<Avatar initials="DF" color="purple-lt" />{" "}
			<Avatar initials="SM" color="pink-lt" size="sm" />{" "}
			<Avatar initials="XS" color="red-lt" size="xs" />
		</PaddedDiv>
		<PaddedDiv>
			<h2>Status</h2>
			<Avatar initials="JC" status="info" />{" "}
			<Avatar initials="BV" status="success" />{" "}
			<Avatar initials="DH" status="warning" />{" "}
			<Avatar initials="RG" status="danger" />
		</PaddedDiv>
		<PaddedDiv>
			<h2>Shapes</h2>
			<Avatar initials="JC" /> <Avatar initials="BV" shape="rounded" />{" "}
			<Avatar initials="DH" shape="rounded-circle" />{" "}
			<Avatar initials="RG" shape="rounded-0" />{" "}
			<Avatar initials="RG" shape="rounded-lg" />
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
