import React from "react";

import styled from "styled-components";

const StyledDiv = styled.div`
	border: 1px solid black;
	padding: 16px;
	width: 360px;
	text-align: center;
	background-color: ${({ theme }) => theme.abc};
`;

const StyledHeading = styled.h1`
	font-size: 32px;
`;

const TestComponent: React.FC = () => (
	<StyledDiv data-testid="test-component">
		<StyledHeading className="heading">I'm the test component</StyledHeading>
	</StyledDiv>
);

export default TestComponent;
