import React from "react";

import styled from "styled-components";

import ButtonList from "../ButtonList/ButtonList";
import { TablerStyles } from "../Theme";
import Button from "./Button";

const PaddedDiv = styled.div`
	padding: 18px;
`;

const Story = {
	title: "Button",
};

const Examples = (
	<>
		<PaddedDiv>
			<h1>Button</h1>
			<ButtonList>
				<Button color="primary">Primary</Button>
				<Button color="secondary">Secondary</Button>
				<Button color="success">Success</Button>
				<Button color="warning">Warning</Button>
				<Button color="danger">Danger</Button>
				<Button color="info">Info</Button>
				<Button color="light">Light</Button>
				<Button color="dark">Dark</Button>
			</ButtonList>
		</PaddedDiv>
		<PaddedDiv>
			<h2>Disabled</h2>
			<ButtonList>
				<Button disabled color="primary">
					Primary
				</Button>
				<Button disabled color="secondary">
					Secondary
				</Button>
				<Button disabled color="success">
					Success
				</Button>
				<Button disabled color="warning">
					Warning
				</Button>
				<Button disabled color="danger">
					Danger
				</Button>
				<Button disabled color="info">
					Info
				</Button>
				<Button disabled color="light">
					Light
				</Button>
				<Button disabled color="dark">
					Dark
				</Button>
			</ButtonList>
		</PaddedDiv>
		<PaddedDiv>
			<h2>Loading</h2>
			<ButtonList>
				<Button loading color="primary">
					Primary
				</Button>
				<Button loading color="secondary">
					Secondary
				</Button>
				<Button loading color="success">
					Success
				</Button>
				<Button loading color="warning">
					Warning
				</Button>
				<Button loading color="danger">
					Danger
				</Button>
				<Button loading color="info">
					Info
				</Button>
				<Button loading color="light">
					Light
				</Button>
				<Button loading color="dark">
					Dark
				</Button>
			</ButtonList>
		</PaddedDiv>
		<PaddedDiv>
			<h2>Ghost</h2>
			<ButtonList>
				<Button shape="ghost" color="primary">
					Primary
				</Button>
				<Button shape="ghost" color="secondary">
					Secondary
				</Button>
				<Button shape="ghost" color="success">
					Success
				</Button>
				<Button shape="ghost" color="warning">
					Warning
				</Button>
				<Button shape="ghost" color="danger">
					Danger
				</Button>
				<Button shape="ghost" color="info">
					Info
				</Button>
				<Button shape="ghost" color="light">
					Light
				</Button>
				<Button shape="ghost" color="dark">
					Dark
				</Button>
			</ButtonList>
		</PaddedDiv>
		<PaddedDiv>
			<h2>Outline</h2>
			<ButtonList>
				<Button shape="outline" color="primary">
					Primary
				</Button>
				<Button shape="outline" color="secondary">
					Secondary
				</Button>
				<Button shape="outline" color="success">
					Success
				</Button>
				<Button shape="outline" color="warning">
					Warning
				</Button>
				<Button shape="outline" color="danger">
					Danger
				</Button>
				<Button shape="outline" color="info">
					Info
				</Button>
				<Button shape="outline" color="light">
					Light
				</Button>
				<Button shape="outline" color="dark">
					Dark
				</Button>
			</ButtonList>
		</PaddedDiv>
		<PaddedDiv>
			<h2>Square</h2>
			<ButtonList>
				<Button shape="square" color="primary">
					Primary
				</Button>
				<Button shape="square" color="secondary">
					Secondary
				</Button>
				<Button shape="square" color="success">
					Success
				</Button>
				<Button shape="square" color="warning">
					Warning
				</Button>
				<Button shape="square" color="danger">
					Danger
				</Button>
				<Button shape="square" color="info">
					Info
				</Button>
				<Button shape="square" color="light">
					Light
				</Button>
				<Button shape="square" color="dark">
					Dark
				</Button>
			</ButtonList>
		</PaddedDiv>
		<PaddedDiv>
			<h2>Pill</h2>
			<ButtonList>
				<Button shape="pill" color="primary">
					Primary
				</Button>
				<Button shape="pill" color="secondary">
					Secondary
				</Button>
				<Button shape="pill" color="success">
					Success
				</Button>
				<Button shape="pill" color="warning">
					Warning
				</Button>
				<Button shape="pill" color="danger">
					Danger
				</Button>
				<Button shape="pill" color="info">
					Info
				</Button>
				<Button shape="pill" color="light">
					Light
				</Button>
				<Button shape="pill" color="dark">
					Dark
				</Button>
			</ButtonList>
		</PaddedDiv>
		<PaddedDiv>
			<h2>Colors</h2>
			<ButtonList>
				<Button color="blue">Blue</Button>
				<Button color="azure">Azure</Button>
				<Button color="indigo">Indigo</Button>
				<Button color="purple">Purple</Button>
				<Button color="pink">Pink</Button>
				<Button color="red">Red</Button>
				<Button color="orange">Orange</Button>
				<Button color="yellow">Yellow</Button>
				<Button color="lime">Lime</Button>
				<Button color="green">Green</Button>
				<Button color="teal">Teal</Button>
				<Button color="cyan">Cyan</Button>
			</ButtonList>
		</PaddedDiv>
		<PaddedDiv>
			<h2>Sizes</h2>
			<ButtonList>
				<Button color="primary" size="sm">
					Small
				</Button>
				<Button color="primary">Normal</Button>
				<Button color="primary" size="lg">
					Large
				</Button>
			</ButtonList>
		</PaddedDiv>
		<PaddedDiv>
			<h2>Social</h2>
			<ButtonList>
				<Button color="facebook">Facebook</Button>
				<Button color="twitter">Twitter</Button>
				<Button color="google">Google</Button>
				<Button color="youtube">Youtube</Button>
				<Button color="vimeo">Vimeo</Button>
				<Button color="dribble">Dribble</Button>
				<Button color="github">Github</Button>
				<Button color="instagram">Instagram</Button>
				<Button color="pinterest">Pinterest</Button>
				<Button color="vk">VK</Button>
				<Button color="rss">RSS</Button>
				<Button color="flickr">Flickr</Button>
				<Button color="bitbucket">Bitbucket</Button>
				<Button color="tabler">Tabler</Button>
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
