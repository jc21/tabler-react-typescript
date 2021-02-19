import React from "react";

import styled from "styled-components";

import { TablerStyles } from "../Theme";
import Alert from "./Alert";

const PaddedDiv = styled.div`
	padding: 18px;
`;

const Story = {
	title: "Alert",
};

const Examples = (
	<>
		<PaddedDiv>
			<h1>Alert</h1>
			<Alert>
				<h4 className="alert-title">Did you know?</h4>
				<div className="text-muted">
					Here is something that you might like to know.
				</div>
			</Alert>
			<Alert color="success">
				<h4 className="alert-title">Wow! Everything worked!</h4>
				<div className="text-muted">Your account has been saved!</div>
			</Alert>
			<Alert color="warning">
				<h4 className="alert-title">Uh oh, something went wrong</h4>
				<div className="text-muted">
					Sorry! There was a problem with your request.
				</div>
			</Alert>
			<Alert color="danger">
				<h4 className="alert-title">I'm so sorry&hellip;</h4>
				<div className="text-muted">
					Your account has been deleted and can't be restored.
				</div>
			</Alert>
		</PaddedDiv>
		<PaddedDiv>
			<h2>Dismissable</h2>
			<Alert dismissable>
				<h4 className="alert-title">Did you know?</h4>
				<div className="text-muted">
					Here is something that you might like to know.
				</div>
			</Alert>
			<Alert color="success" dismissable>
				<h4 className="alert-title">Wow! Everything worked!</h4>
				<div className="text-muted">Your account has been saved!</div>
			</Alert>
			<Alert color="warning" dismissable>
				<h4 className="alert-title">Uh oh, something went wrong</h4>
				<div className="text-muted">
					Sorry! There was a problem with your request.
				</div>
			</Alert>
			<Alert color="danger" dismissable>
				<h4 className="alert-title">I'm so sorry&hellip;</h4>
				<div className="text-muted">
					Your account has been deleted and can't be restored.
				</div>
			</Alert>
		</PaddedDiv>
		<PaddedDiv>
			<h2>Important</h2>
			<Alert important>
				<h4 className="alert-title">Did you know?</h4>
				<div className="text-muted">
					Here is something that you might like to know.
				</div>
			</Alert>
			<Alert color="success" important>
				<h4 className="alert-title">Wow! Everything worked!</h4>
				<div className="text-muted">Your account has been saved!</div>
			</Alert>
			<Alert color="warning" important>
				<h4 className="alert-title">Uh oh, something went wrong</h4>
				<div className="text-muted">
					Sorry! There was a problem with your request.
				</div>
			</Alert>
			<Alert color="danger" important>
				<h4 className="alert-title">I'm so sorry&hellip;</h4>
				<div className="text-muted">
					Your account has been deleted and can't be restored.
				</div>
			</Alert>
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
